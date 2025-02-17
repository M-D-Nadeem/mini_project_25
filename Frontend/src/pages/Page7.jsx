import React, { useState } from 'react';
import axiosInstance from '../helper/axiosInstance';

const Page7 = ({formData,setFormData,onPrevious}) => {
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

  const handleSubmit=async ()=>{
    const confirmSubmit = window.confirm("This action will submit the form data. Do you want to proceed?");
    if (!confirmSubmit) return;
  
    try {
      const response=await axiosInstance.post("/addData", formData);
      console.log(response);
      if (response?.data?.success ) {
        alert("Form submitted successfully!");
      }
    } catch (error) {
      alert("An error occurred while submitting the form. Please try again.");
      console.error("Submission error:", error);
    }
  }
  
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
          value={formData["RemarksHoD"] || ""}
          onChange={(e) => handleInputChange(e)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
        />

        <label className="block text-lg font-semibold mt-4">Remarks by External Auditor:</label>
        <textarea
          name="RemarksExternal"
          value={formData["RemarksExternal"] || ""}
          onChange={(e) => handleInputChange(e)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
        />

        <label className="block text-lg font-semibold mt-4">Remarks by Principal:</label>
        <textarea
          name="RemarksPrincipal"
          value={formData["RemarksPrincipal"] || ""}
          onChange={(e) => handleInputChange(e)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
        />
      </div>
      {/* Navigation Buttons */}
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

