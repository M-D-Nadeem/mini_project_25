import React, { useState } from "react";
import axiosInstance from "../helper/axiosInstance";

const Page1 = ({catTotal, formData, setFormData, onNext }) => {

  const [curFormData, setCurFormData] = useState({
    employeeCode: "",
          name: "",
          designation: "",
          college: "DSCE",
          campus: "Kumarswamy Layout (Campus 1)",
          department: "Information Science and Engineering",
          joiningDate: "",
          periodOfAssessment: "",
          categoriesTotal:catTotal,
          totalSelf:"",
          totalHoD:"",
          totalExternal:"",
          HODName: "",
          externalEvaluatorName: "",
          principleName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const curUpdatedData = { ...curFormData, [name]: value };
    setCurFormData(curUpdatedData);

    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData)); // Save to localStorage
  };

  const handleNext = async () => {
    if (!formData.employeeCode) {
      alert("Please enter Employee Code.");
      return;
    }

    try {
      const response=await axiosInstance.get(`/getData/${formData.employeeCode}`, formData);
      console.log(response);
      
      if (response?.data?.success) {
        setFormData(response?.data?.data);
        localStorage.setItem("formData", JSON.stringify(response?.data?.data)); // Store only new data
      }
      else{
        console.log(curFormData);
        
        setFormData(curFormData)
        localStorage.setItem("formData", JSON.stringify(curFormData))
      }
      
      onNext(); // Proceed to the next step
    } catch (error) {
      console.error("Error fetching employee data:", error);
      alert("Failed to fetch employee data. Please try again.");
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-xl font-bold text-center mb-4">Performance Appraisal Form</h2>
      <table className="w-full border border-gray-400">
        <tbody>
          <tr>
            <td colSpan="3" className="border border-gray-300 p-2">
              Employee Code:
              <input
                type="text"
                name="employeeCode"
                value={formData.employeeCode}
                onChange={handleChange}
                className="border border-gray-400 rounded px-2 py-1 w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Name in Full:
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="border border-gray-400 rounded px-2 py-1 w-full"
              />
            </td>
            <td colSpan="2" className="border border-gray-300 p-2">
              Designation:
              <input
                type="text"
                name="designation"
                value={formData.designation || ""}
                onChange={handleChange}
                className="border border-gray-400 rounded px-2 py-1 w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              College / Institute:
              <input type="text" value="DSCE" disabled className="border border-gray-400 rounded px-2 py-1 w-full" />
            </td>
            <td colSpan="2" className="border border-gray-300 p-2">
              Campus:
              <input type="text" value="Kumarswamy Layout (Campus 1)" disabled className="border border-gray-400 rounded px-2 py-1 w-full" />
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="border border-gray-300 p-2">
              Department:
              <input type="text" value="Information Science and Engineering" disabled className="border border-gray-400 rounded px-2 py-1 w-full" />
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="border border-gray-300 p-2">
              Joining Date at DSCE:
              <input
                type="date"
                name="joiningDate"
                value={formData.joiningDate || ""}
                onChange={handleChange}
                className="border border-gray-400 rounded px-2 py-1 w-full"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="border border-gray-300 p-2">
              Period of Assessment:
              <input
                type="date"
                name="periodOfAssessment"
                value={formData.periodOfAssessment || ""}
                onChange={handleChange}
                className="border border-gray-400 rounded px-2 py-1 w-full"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="instructions mb-6">
        <h3 className="text-lg font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Faculty member should enter their self-evaluation scores...</li>
          <li>Completed appraisal form along with necessary proofs...</li>
          <li>Head of the department shall verify scores...</li>
          <li>The external evaluator will do the assessment...</li>
          <li>The Head of the department after complete evaluation...</li>
        </ol>
      </div>

      <div className="flex justify-between mt-6">
        <div></div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page1;
