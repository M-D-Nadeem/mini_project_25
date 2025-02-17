import React, { useState } from "react";

const Page4 = ({formData, setFormData, onNext, onPrevious }) => {
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
      <h3 className="text-xl font-bold text-center" id="head_pdrc">
        2. Professional Development and Research Contribution (PDRC)
      </h3>

      {/* Professional Development Table */}
      <table className="min-w-full border-collapse border border-gray-300 mt-4">
        <thead className="bg-gray-200">
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">2.1</th>
            <th className="border border-gray-300 px-4 py-2">Professional Development</th>
            <th className="border border-gray-300 px-4 py-2">Self-Evaluation</th>
            <th className="border border-gray-300 px-4 py-2">Evaluation by HOD</th>
            <th className="border border-gray-300 px-4 py-2">
              Evaluation by External Audit Member
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">2.1.1</td>
            <td className="border px-4 py-2">
              <ol>
                <li>Qualification improvement</li>
                <li>
                  (Ph. D / Post Doctorate –{" "}
                  <span className="text-red-500">10 points</span>)
                </li>
                <li>
                  (Ph. D registered –{" "}
                  <span className="text-red-500">4 points</span>) and for every
                  progress report submission (–{" "}
                  <span className="text-red-500">1 point</span>)
                </li>
              </ol>
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC211Self"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC211Self")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
              <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC211HoD"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC211HoD")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC211External"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC211External")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.1.2</td>
            <td className="border px-4 py-2">
              Acquiring status of Certified trainer for skill development
              courses from reputed organization.
              <br />
              <span className="text-red-500">
                (02 points each) (Max: 4 points)
              </span>
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC212Self"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC212Self")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC212HoD"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC212HoD")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC212External"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC212External")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.1.3</td>
            <td className="border px-4 py-2">
              Certification of International / National repute from reputed
              organization (e.g. EdX, MOOC from some best central
              universities/IITs/NITs/NPTEL etc.)
              <br />
              <span className="text-red-500">
                (02 points each) (Max: 4 points)
              </span>
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC213Self"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC213Self")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC213HoD"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC213HoD")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC213External"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC213External")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.1.4</td>
            <td className="border px-4 py-2">
              Awards/ Recognition/ Any other achievement through professional
              bodies of National/International repute (e.g. Best Teacher, Young
              Scientist award given by ISTE).
              <br />
              <span className="text-red-500">
                (02 points each) (Max: 4 points)
              </span>
              <br />
              <span className="text-green-500">
                (Verification for 2.1: Certificate/letter/report)
              </span>
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC214Self"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC214Self")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC214HoD"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC214HoD")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC214External"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC214External")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Research Achievements Table */}
      <table className="min-w-full border-collapse border-2 border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">2.2</th>
            <th className="border border-gray-300 px-4 py-2">Research Achievements (RA)</th>
            <th className="border border-gray-300 px-4 py-2">Self-Evaluation</th>
            <th className="border border-gray-300 px-4 py-2">Evaluation by HOD</th>
            <th className="border border-gray-300 px-4 py-2">
              Evaluation by External Audit Member
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">2.2.1</td>
            <td className="border px-4 py-2">
              <ol>
                <li>
                  <b>Research Publication (journals)</b>
                </li>
                <li>Number of articles in refereed International Journals</li>
                <li>
                  <span className="text-red-500">
                    (For 2 publication: Scopus indexed - 5 points, Web of
                    Science indexed – 3 points, and UGC care list – 2 points)
                    H-index {">"} 5: 2 points, Citation {">"} 10: 2 points
                  </span>
                </li>
              </ol>
            </td>
            {/* <td className="border px-4 py-2">
              Scopus – 5<br />
              Citations – 2<br />
              UGC care list – 2<br />
            </td> */}
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC221Self"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC221Self")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC221HoD"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC221HoD")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC221External"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC221External")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.2.2</td>
            <td className="border px-4 py-2">
              <ol>
                <li>
                  <b>Full paper publication in Conference Proceedings</b>
                </li>
                <li>
                  <span className="text-red-500">
                    (For publication in International Conference Proceedings – 3
                    points, and National Conference Proceedings – 2 points)
                    (Egs. Springer, Elsevier, IEEE, and ACM etc.)
                  </span>
                </li>
              </ol>
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC222Self"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC222Self")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC222HoD"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC222HoD")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                value={formData["PDRC222External"] || ""}
                onChange={(e) => handleInputChange(e, "PDRC222External")}
                min="0"
                max="10"
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* Continue similarly for remaining rows */}
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
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page4;
