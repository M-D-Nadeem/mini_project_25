import React, { useEffect, useState } from "react";

const Page2 = ({ formData, setFormData, onNext, onPrevious }) => {
  const categories = [
    { key: "TLP", title: "Teaching Learning Process (TLP)", max: 80 },
    { key: "PDRC", title: "Professional Development and Research Contribution (PDRC)", max: 90 },
    { key: "CDL", title: "Contribution at Departmental level (CDL)", max: 50 },
    { key: "CIL", title: "Contribution at Institutional level (CIL)", max: 30 },
    { key: "IOW", title: "Interaction with the Outside World (IOW) / External Interface (EI)", max: 50 },
  ];

  

  const handleChangeSignature = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: value,
      };
    localStorage.setItem("formData", JSON.stringify(updatedData)); // Save to localStorage
    return updatedData;
  });
  };  
  // const totals = formData.scores.reduce(
  //   (acc, row) => {
  //     acc.self += row.self || 0;
  //     acc.hod += row.hod || 0;
  //     acc.external += row.external || 0;
  //     return acc;
  //   },
  //   { self: 0, hod: 0, external: 0 }
  // );
  const [categoriesTotal, setCategoriesTotal] = useState({});
  const [totalSelf,setTotalSelf]=useState("")
  const [totalHoD,setTotalHoD]=useState("")
  const [totalExternal,setTotalExternal]=useState("")
  useEffect(() => {
    
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    setTotalSelf(storedData.totalSelf)
    setTotalHoD(storedData.totalHoD)
    setTotalExternal(storedData.totalExternal)

    setCategoriesTotal(storedData.categoriesTotal || {});
  }, []);
 console.log(formData);
 

  return (
    <div className="p-6 min-h-screen">
      <h3 className="text-xl font-bold text-center mb-6">
        FACULTY PERFORMANCE MEASURING INDEX (FPMI)
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-400 mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Assessment Head</th>
              <th className="border px-4 py-2">Maximum Marks</th>
              <th className="border px-4 py-2">Self-evaluation (A)</th>
              <th className="border px-4 py-2">Evaluation by HoD (B)</th>
              <th className="border px-4 py-2">Evaluation by External (C)</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{row.title}</td>
                <td className="border px-4 py-2">{row.max}</td>
                {["Self", "HoD", "External"].map((field) => (
                  <td key={field} className="border px-4 py-2">
                    {categoriesTotal[`${row.key}${field}`] || "0"}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="font-bold">
              <td className="border px-4 py-2">Total</td>
              <td className="border px-4 py-2">300</td>
              <td className="border px-4 py-2">{totalSelf}</td>
              <td className="border px-4 py-2">{totalHoD}</td>
              <td className="border px-4 py-2">{totalExternal}</td>
            </tr>
          </tbody>
        </table>
      </div>

        {/* Signatures Section */}
        <div className="overflow-x-auto">
        <table className="w-full border border-gray-400">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Signature Name of the Faculty Member
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {/* <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChangeSignature}
                  className="border border-gray-400 rounded px-2 py-1 w-full"
                /> */}
              <input type="text" value={formData.name} disabled className="border border-gray-400 rounded px-2 py-1 w-full" />              </td>
              <td className="border border-gray-300 px-4 py-2">Signature Name of the HoD</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="HODName"
                  value={formData.HODName}
                  onChange={handleChangeSignature}
                  className="border border-gray-400 rounded px-2 py-1 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Signature Name of the External Evaluator
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="externalEvaluatorName"
                  value={formData.externalEvaluatorName}
                  onChange={handleChangeSignature}
                  className="border border-gray-400 rounded px-2 py-1 w-full"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">Signature Name of the Principal</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="principleName"
                  value={formData.principleName}
                  onChange={handleChangeSignature}
                  className="border border-gray-400 rounded px-2 py-1 w-full"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onPrevious}>
          Previous
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Page2;
