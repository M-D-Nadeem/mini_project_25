import React, { useState, useEffect } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import logo from "./logo.png";
import Header from "./components/Header";
import axiosInstance from "./helper/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const categoriesTotal= {
    TLPSelf: "",
    TLPHoD: "",
    TLPExternal: "",
    PDRCSelf: "",
    PDRCHoD: "",
    PDRCExternal: "",
    CDLSelf: "",
    CDLHoD: "",
    CDLExternal: "",
    CILSelf: "",
    CILHoD: "",
    CILExternal: "",
    IOWSelf: "",
    IOWHoD: "",
    IOWExternal: "",
  }
  // Load formData from localStorage or set default values
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          employeeCode: "",
          name: "",
          designation: "",
          college: "DSCE",
          campus: "Kumarswamy Layout (Campus 1)",
          department: "Information Science and Engineering",
          joiningDate: "",
          periodOfAssessment: "",
          categoriesTotal,
          totalSelf:"",
          totalHoD:"",
          totalExternal:"",
          HODName: "",
          externalEvaluatorName: "",
          principleName: "",
        };
  });

  // Save formData (including scores) to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (!formData.employeeCode || !formData.name || !formData.designation || !formData.joiningDate || !formData.periodOfAssessment) {
      alert("Please fill all required fields before proceeding.");
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleLogout = async () => {
    try {
      const response=await axiosInstance.post("/logout");
      console.log(response);
      
      localStorage.removeItem("token");
      localStorage.clear();

      delete axiosInstance.defaults.headers.common["Authorization"];
      navigate("/");
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div>
      <header>
      <Header 
        userName={ "User Name"} 
        onLogout={handleLogout} 
      />
      </header>
      {currentPage === 1 && <Page1 catTotal={categoriesTotal} formData={formData} setFormData={setFormData} onNext={handleNext} />}
      {currentPage === 2 && <Page3 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} />}
      {currentPage === 3 && <Page4 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} />}
      {currentPage === 4 && <Page5 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} />}
      {currentPage === 5 && <Page6 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} />}
      {currentPage === 6 && <Page2 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} />}
      {currentPage === 7 && <Page7 formData={formData} setFormData={setFormData} onPrevious={handlePrevious} />}
    </div>
  );
};

export default App;
