import { useState } from "react";

const Page5 = ({formData, setFormData, onNext, onPrevious }) => {
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
            <h3 id="head_pdrc" className="text-xl font-bold text-center"> 3. Contribution at Department Level (CDL)</h3>
            <table className="border-3 border-gray-300 w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <td className="border border-gray-300 p-2">3</td>
                        <td className="border border-gray-300 p-2">Professional Involvement (PI)</td>
                        <td className="border border-gray-300 p-2">Self-Evaluation</td>
                        <td className="border border-gray-300 p-2">Evaluation by HOD</td>
                        <td className="border border-gray-300 p-2">Evaluation by External Audit Member</td>
                    </tr>
                </thead>
                <tbody>
                    {[
                        {
                            id: "3.1",
                            no:"31",
                            description:
                                "Contribution in conducting the activities of professional bodies (like IEEE, CSI, IETE etc.) either for the students or faculty members (5 points for activity like FDP, SDP, Seminar, workshop etc. conducted with individual as a main resource person)",
                        },
                        {
                            id: "3.2",
                            no:"32",
                            description:
                                "Organizing Training program (FDP/SDP/STTP/Workshop/Seminar etc.) / Organization of short term training courses (Coordinator: Co-Coordinator: Member = 10:8:6 for 2-week duration)",
                        },
                        {
                            id: "3.3",
                            no:"33",
                            description:
                                "Participation in Training Program / Participation in short term training courses (10 points for two-week duration, 8 points for one week, 2 points for less than one week)",
                        },
                        {
                            id: "3.4",
                            no:"34",
                            description:
                                "Internal Revenue Generation (IRG) through FDP / SDP / STTP / Workshop / Seminar / Conference / Consultancy (Rs.25,000 and above - Coordinator: Co-Coordinator: Member = 10:8:5)",
                        },
                        {
                            id: "3.5",
                            no:"35",
                            description:
                                "Department level Governance/responsibilities assigned (NBA/NAAC/NIRF Coordinator/Member, IQAC Coordinator/Member, Other Departmental Coordinators/Member)",
                        },
                    ].map((row, index) => (
                        <tr key={row.id}>
                            <td className="border p-2 ">{row.id}</td>
                            <td className="border p-2">{row.description}</td>
                            <td className="border p-2">
                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    value={formData[`CDL${row.no}Self`] || ""}
                onChange={(e) => handleInputChange(e, `CDL${row.no}Self`)}
                                    className="w-full p-2 border"
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    value={formData[`CDL${row.no}HoD`] || ""}
                onChange={(e) => handleInputChange(e, `CDL${row.no}HoD`)}
                                    className="w-full p-2 border"
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    value={formData[`CDL${row.no}External`] || ""}
                onChange={(e) => handleInputChange(e, `CDL${row.no}External`)}
                                    className="w-full p-2 border"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 id="head_pdrc" className="text-xl font-bold text-center pt-6">4. Contribution at Institute Level (CIL)</h3>
            <table className="border-3 border-gray-300 w-full mt-4">
                <thead>
                    <tr className="bg-gray-200">
                        <td className="border border-gray-300 p-2">4</td>
                        <td className="border border-gray-300 p-2">Institutional level Governance responsibilities assigned</td>
                        <td className="border border-gray-300 p-2">Self-Evaluation</td>
                        <td className="border border-gray-300 p-2">Evaluation by HOD</td>
                        <td className="border border-gray-300 p-2">Evaluation by External Audit Member</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2 ">4</td>
                        <td className="border p-2">
                            Member of statutory bodies: NBA/NAAC/NIRF Coordinator/Member, IQAC Coordinator/Member, Member of BoS/Faculty/Academic council, and various college/university level committees. Activities such as Internship and Placement Support.
                            <div className="text-red-600">Internship support through hackman – 1, Placement support through Catalysis and Hackman – 1</div>
                        </td>
                        <td className="border p-2">
                            <input
                                type="number"
                                min="0"
                                max="10"
                                value={formData[`CIL4Self`] || ""}
                onChange={(e) => handleInputChange(e, `CIL4Self`)}
                                className="w-full p-2 border"
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="number"
                                min="0"
                                max="10"
                                value={formData[`CIL4HoD`] || ""}
                onChange={(e) => handleInputChange(e, `CIL4HoD`)}
                                className="w-full p-2 border"
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="number"
                                min="0"
                                max="10"
                                value={formData[`CIL4External`] || ""}
                onChange={(e) => handleInputChange(e, `CIL4External`)}
                                className="w-full p-2 border"
                            />
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
          onClick={onNext}
        >
          Next
        </button>
      </div>
        </div>
    );
};

export default Page5;
