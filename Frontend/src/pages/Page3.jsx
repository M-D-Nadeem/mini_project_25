import React from "react";

const Page3 = ({ formData, setFormData,onNext, onPrevious }) => {

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
  

  return (
    <div className="p-6  min-h-screen">
      <h3 className="text-2xl font-bold text-center mb-6">
        1. Teaching Learning Process (TLP)
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">1.1</th>
              <th
                colSpan="4"
                className="border border-gray-300 px-4 py-2 text-left"
              >
                Teaching Learning Activities
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Sr. No</th>
              <th className="border border-gray-300 px-4 py-2">Parameter</th>
              <th className="border border-gray-300 px-4 py-2">
                Self-Evaluation
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Evaluation by HoD
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Evaluation by External Audit Member
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1.1.1</td>
              <td className="border border-gray-300 px-4 py-2">
                <ol>
                  <li>
                    Lectures taken as percentage of lectures allocated as per
                    academic calendar
                  </li>
                  <span className="text-red-600">
                    (100% compliance = 10 points)
                  </span>
                  <ul className="list-disc ml-4">
                    <li>Total number of lectures allocated: 40</li>
                    <li>Total number of lectures taken: 40</li>
                    <li>SEMESTER No.: 6</li>
                    <li>Makeup lectures may be counted as against any leave</li>
                  </ul>
                </ol>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  name="TLP111"
                  value={formData["TLP111Self"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP111Self")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  name="TLP111"
                  value={formData["TLP111HoD"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP111HoD")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData["TLP111External"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP111External")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1.1.2</td>
              <td className="border border-gray-300 px-4 py-2">
                <ol>
                  <li>
                    Tutorials, practical, contact hours undertaken as percentage
                    of those allocated
                  </li>
                  <span className="text-red-600">
                    (100% compliance = 10 points)
                  </span>
                  <ul className="list-disc ml-4">
                    <li>SEMESTER No.: 7</li>
                    <li>Total number of tutorials allocated: 40</li>
                    <li>Total number of tutorials taken: 40</li>
                  </ul>
                </ol>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData["TLP112Self"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP112Self")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData["TLP112HoD"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP112HoD")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData["TLP112External"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP112External")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1.1.3</td>
              <td className="border border-gray-300 px-4 py-2">
                Extra Lectures, Remedial Lectures/Practical or other teaching
                duties
                <span className="text-red-600">
                  {" "}
                  (2 hour excess per week = 4 points for each semester)
                </span>
                <br />
                <span className="text-green-600">
                  Verification: Official attendance record
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData["TLP113Self"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP113Self")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData["TLP113HoD"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP113HoD")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData["TLP113External"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP113External")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
            </tr>

            <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">1.1.4</td>
            <td className="border border-gray-300 px-4 py-2">
              Semester End Examination duties (Question paper setting,
              evaluation of answer scripts etc.){" "}
              <span className="text-red-500">(100% compliance = 4 points/sem)</span>
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData["TLP114Self"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP114Self")}
                  className="border border-gray-400 px-2 py-1 w-16 text-center"
                />
              </td>
            <td className="border border-gray-300 px-60 py-2">
              <input type="number" min="0" value={formData["TLP114HoD"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP114HoD")} max="10" className="border border-gray-400 px-2 py-1 w-16 text-center" />
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              <input type="number" min="0" value={formData["TLP114External"] || ""}
                  onChange={(e) => handleInputChange(e, "TLP114External")} max="10" className="border border-gray-400 px-2 py-1 w-16 text-center" />
            </td>
          </tr>
          </tbody>
        </table>
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
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page3;
