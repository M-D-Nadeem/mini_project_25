import React from 'react';
import axiosInstance from '../helper/axiosInstance';

const Page6 = ({formData, setFormData, onNext, onPrevious }) => {

  const handleInputChange = (e, key) => {
    const { value } = e.target;

    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [key]: value,
      };

      // Store updated data in localStorage
      localStorage.setItem("formData", JSON.stringify(updatedData));
      return updatedData;
    });
  };
  console.log(formData);

  const handleSubmit = async () => {
    try {
      const response=await axiosInstance.post("/total", formData);
      console.log(response);
      
      if(response?.data?.success){
        const categoriesTotal = {
          TLPSelf: response?.data?.totals?.TLPSelf || "0",
          TLPHoD: response?.data?.totals?.TLPHoD || "0",
          TLPExternal: response?.data?.totals?.TLPExternal || "0",
          PDRCSelf: response?.data?.totals?.PDRCSelf || "0",
          PDRCHoD: response?.data?.totals?.PDRCHoD || "0",
          PDRCExternal: response?.data?.totals?.PDRCExternal || "0",
          CDLSelf: response?.data?.totals?.CDLSelf || "0",
          CDLHoD: response?.data?.totals?.CDLHoD || "0",
          CDLExternal: response?.data?.totals?.CDLExternal || "0",
          CILSelf: response?.data?.totals?.CILSelf || "0",
          CILHoD: response?.data?.totals?.CILHoD || "0",
          CILExternal: response?.data?.totals?.CILExternal || "0",
          IOWSelf: response?.data?.totals?.IOWSelf || "0",
          IOWHoD: response?.data?.totals?.IOWHoD || "0",
          IOWExternal: response?.data?.totals?.IOWExternal || "0",
          totalSelf:response?.data?.totals?.totalSelf || "0",
          totalHoD:response?.data?.totals?.totalHoD || "0",
          totalExternal:response?.data?.totals?.totalExternal || "0",
        };
        console.log(formData);
        
        Object.keys(formData.categoriesTotal).forEach((key) => {
          if (response.data.totals.hasOwnProperty(key)) {
            formData.categoriesTotal[key] = categoriesTotal[key];
          }
        });
        
        formData = { 
          ...formData, 
          totalSelf:categoriesTotal.totalSelf, 
          totalHoD:categoriesTotal.totalHoD, 
          totalExternal:categoriesTotal.totalExternal 
        };
        localStorage.setItem("formData", JSON.stringify(formData));
      // });
      console.log(formData);
      
      onNext();
      } 
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data. Please try again.");
    }
  };
  return (
    <div className='p-6  min-h-screen'>
      <h3 id="head_pdrc" className="text-xl font-bold mb-4 text-center">
        5. Interaction with the Outside World (IOW) / External Interface (EI)
      </h3>
      <table className="border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200 ">
            <td className="border border-gray-300 p-2">5</td>
            <td className="border border-gray-300 p-2">Interaction with outside world: <span className="">A = 10 points, B = 4 points per activity</span></td>
            <td className="border border-gray-300 p-2">Self-Evaluation</td>
            <td className="border border-gray-300 p-2">Evaluation by HOD</td>
            <td className="border border-gray-300 p-2">Evaluation by External Audit Member</td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-300">
            <td className="p-2">A</td>
            <td colSpan="4" className="p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">Invited as speaker</td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW511Self"] || ""}
                onChange={(e) => handleInputChange(e, "IOW511Self")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW511HoD"] || ""}
                onChange={(e) => handleInputChange(e, "IOW511HoD")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW511External"] || ""}
                onChange={(e) => handleInputChange(e, "IOW511External")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">2</td>
            <td className="border border-gray-300 p-2">Live Industrial Projects</td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW512Self"] || ""}
                onChange={(e) => handleInputChange(e, "IOW512Self")}
                min="0"
                max="10"  className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW512HoD"] || ""}
                onChange={(e) => handleInputChange(e, "IOW512HoD")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW512External"] || ""}
                onChange={(e) => handleInputChange(e, "IOW512External")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">3</td>
            <td className="border border-gray-300 p-2">Any other please specify</td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW513Self"] || ""}
                onChange={(e) => handleInputChange(e, "IOW513Self")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW513HoD"] || ""}
                onChange={(e) => handleInputChange(e, "IOW513HoD")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW513External"] || ""}
                onChange={(e) => handleInputChange(e, "IOW513External")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
          </tr>
          <tr className="bg-gray-300">
            <td className="p-2">B</td>
            <td colSpan="4" className="p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">Subject Expert for Interview panel</td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW521Self"] || ""}
                onChange={(e) => handleInputChange(e, "IOW521Self")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW521HoD"] || ""}
                onChange={(e) => handleInputChange(e, "IOW521HoD")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW521External"] || ""}
                onChange={(e) => handleInputChange(e, "IOW521External")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">2</td>
            <td className="border border-gray-300 p-2">Judge/Session chairs for International/National Conference</td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW522Self"] || ""}
                onChange={(e) => handleInputChange(e, "IOW522Self")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW522HoD"] || ""}
                onChange={(e) => handleInputChange(e, "IOW522HoD")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW522External"] || ""}
                onChange={(e) => handleInputChange(e, "IOW522External")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">3</td>
            <td className="border border-gray-300 p-2">Reviewer - International/National Journal</td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW523Self"] || ""}
                onChange={(e) => handleInputChange(e, "IOW523Self")}
                min="0"
                max="10" className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW523HoD"] || ""}
                onChange={(e) => handleInputChange(e, "IOW523HoD")}
                min="0"
                max="10"  className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW523External"] || ""}
                onChange={(e) => handleInputChange(e, "IOW523External")}
                min="0"
                max="10"  className="border p-1" minLength="0" maxLength="10" />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">4</td>
            <td className="border border-gray-300 p-2">Editorial Board Member for National and International journal</td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW524Self"] || ""}
                onChange={(e) => handleInputChange(e, "IOW524Self")}
                min="0"
                max="10"  className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW524HoD"] || ""}
                onChange={(e) => handleInputChange(e, "IOW524HoD")}
                min="0"
                max="10"  className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW524External"] || ""}
                onChange={(e) => handleInputChange(e, "IOW524External")}
                min="0"
                max="10"  className="border p-1" minLength="0" maxLength="10" />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">5</td>
            <td className="border border-gray-300 p-2">Resource person for conferences/seminars/workshops/symposia etc.</td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW525Self"] || ""}
                onChange={(e) => handleInputChange(e, "IOW525Self")}
                min="0"
                max="10"  className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW525HoD"] || ""}
                onChange={(e) => handleInputChange(e, "IOW525HoD")}
                min="0"
                max="10"  className="border p-1" minLength="0" maxLength="10" />
            </td>
            <td className="border border-gray-300 p-2">
              <input type="number"
                value={formData["IOW525External"] || ""}
                onChange={(e) => handleInputChange(e, "IOW525External")}
                min="0"
                max="10"  className="border p-1" minLength="0" maxLength="10" />
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="text-green-500 p-2">
              (Verification for 2.2 : Office order / Attendance / Certificate / Account details / letter/report)
            </td>
          </tr>
        </tbody>
      </table>

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
          Next
        </button>
      </div>
    </div>
  );
};

export default Page6;
