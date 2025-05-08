import React, { useState } from 'react';
import axiosInstance from '../helper/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Page7 = ({formData,setFormData,onPrevious,isReadOnly,userRole}) => {
  const navigate=useNavigate()
  const handleInputChange = (e) => {
    const {name, value } = e.target;
    
    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: value,
      };

      // Store updated data in localStorage
      localStorage.setItem("formData", JSON.stringify(updatedData));
      return updatedData;
    });
  };
  console.log(formData);

  const handleSubmit = async () => {
    const confirmSubmit = window.confirm("This action will submit the form data. Do you want to proceed?");
    if (!confirmSubmit) return;
    
    const evaluationData = new FormData();
    

    for (const [key, value] of Object.entries(formData)) {
      if (value === null || value === undefined) continue;
      
      if (key === 'categoriesTotal' && typeof value === 'object') {
        evaluationData.append(key, JSON.stringify(value));
      }
      else if (key.endsWith('Image') && typeof value === 'string' && value.startsWith('data:')) {
        try {
          const [dataInfo, base64Data] = value.split(',');
          const mimeType = dataInfo.match(/data:(.*?);/)[1];
          
          const extension = mimeType.split('/')[1];
          const fileName = `${key}.${extension}`;
          
          const byteCharacters = atob(base64Data);
          const byteArrays = [];
          
          for (let offset = 0; offset < byteCharacters.length; offset += 512) {
            const slice = byteCharacters.slice(offset, offset + 512);
            const byteNumbers = new Array(slice.length);
            
            for (let i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }
            
            byteArrays.push(new Uint8Array(byteNumbers));
          }
          
          const blob = new Blob(byteArrays, { type: mimeType });
          const file = new File([blob], fileName, { type: mimeType });
          
          evaluationData.append(key, file);
        } catch (error) {
          console.error(`Error processing ${key}:`, error);
          evaluationData.append(key, value);
        }
      }
      else {
        evaluationData.append(key, value);
      }
    }
    console.log(evaluationData);
    
    try {
      const response = await axiosInstance.post("/addData", evaluationData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response);
      if (response?.data?.success) {
        alert("Form submitted successfully!");
        localStorage.removeItem("token");
        localStorage.removeItem("authState");
        localStorage.clear();
        
        delete axiosInstance.defaults.headers.common["Authorization"];
        navigate("/tankyouPage")
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while submitting the form. Please try again.");
      console.error("Submission error:", error);
    }
  };
  
  return (
    <div className="container mx-auto p-6  min-h-screen">
      <h6 className="text-2xl font-bold text-center">Criteria for Rating</h6>
      <table className="border-3 border-black w-full mt-4">
        <>
          <thead>
            <tr className="bg-pink-500">
              <td className="px-4 py-2">Faculty Rating</td>
              <td className="px-4 py-2">Outstanding</td>
              <td className="px-4 py-2">Competent</td>
              <td className="px-4 py-2">Good</td>
              <td className="px-4 py-2">Satisfactory</td>
              <td className="px-4 py-2">Poor</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-pink-200 px-4 py-2">Professor</td>
              <td className="px-4 py-2">{">"}250Marks</td>
              <td className="px-4 py-2">{">"}225-250Marks</td>
              <td className="px-4 py-2">200-225Marks</td>
              <td className="px-4 py-2">175-200Marks</td>
              <td className="px-4 py-2">below 175Marks</td>
            </tr>
            <tr>
              <td className="bg-pink-200 px-4 py-2">Associate Professor</td>
              <td className="px-4 py-2">{">"}225Marks</td>
              <td className="px-4 py-2">200-225Marks</td>
              <td className="px-4 py-2">175-200Marks</td>
              <td className="px-4 py-2">150-175Marks</td>
              <td className="px-4 py-2">below 150Marks</td>
            </tr>
            <tr>
              <td className="bg-pink-200 px-4 py-2">Assistant Professor</td>
              <td className="px-4 py-2">{">"}200Marks</td>
              <td className="px-4 py-2">180-200Marks</td>
              <td className="px-4 py-2">160-180Marks</td>
              <td className="px-4 py-2">140-160Marks</td>
              <td className="px-4 py-2">below 140Marks</td>
            </tr>
          </tbody>
        </>
      </table>

      <p className="mt-4 text-sm text-gray-600">
        Note: The evaluation of score is based on taking average of three (Self, HoD, External Audit Member)
      </p>

      <div className="mt-4">
        <label className="block text-lg font-semibold">Remarks by HoD:</label>
        <textarea
          name="RemarksHoD"
          value={userRole==="hod" || userRole==="faculty" ?formData["RemarksHoD"] || "" : ""}
          readOnly={userRole==="faculty"}
          disabled={userRole === "external" ||  userRole=="principle"}
          onChange={(e) => handleInputChange(e)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
        />

        <label className="block text-lg font-semibold mt-4">Remarks by External Auditor:</label>
        <textarea
          name="RemarksExternal"
          value={userRole==="external" || userRole==="faculty"  ? formData["RemarksExternal"] || "":""}
          readOnly={userRole==="faculty"}
          disabled={userRole === "hod" ||  userRole=="principle"}
          onChange={(e) => handleInputChange(e)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
        />

        <label className="block text-lg font-semibold mt-4">Remarks by Principal:</label>
        <textarea
          name="RemarksPrincipal"
          value={userRole==="principle" || userRole==="faculty"  ? formData["RemarksPrincipal"] || "" :""}
          readOnly={userRole==="faculty"}
          disabled={userRole === "hod" || userRole=="external"}
          onChange={(e) => handleInputChange(e)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex justify-between mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
       
      </div>
    </div>
  );
};

export default Page7;

