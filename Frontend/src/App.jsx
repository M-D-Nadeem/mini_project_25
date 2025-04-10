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
import Page0 from "./pages/Page0";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [userName, setUserName] = useState("User Name");
  const [userRole, setUserRole] = useState("faculty");


  const categoriesTotal = {
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
  };

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
          totalSelf: "",
          totalHoD: "",
          totalExternal: "",
          HODName: "",
          externalEvaluatorName: "",
          principleName: "",
        };
  });

  // Check user role from localStorage and set readonly flag
  useEffect(() => {
    try {
      const authStateString = localStorage.getItem("authState");
      if (authStateString) {
        const authState = JSON.parse(authStateString);
        if (authState && authState.role) {
          const userRole = authState.role.toLowerCase();
          setUserRole(authState.role)
          // Set readonly flag if role is hod or external
          if (userRole === "hod" || userRole === "external") {
            setIsReadOnly(true);
          }
          
          // If user name is available in authState, set it
          if (authState.name) {
            setUserName(authState.name);
          }
        }
      }
    } catch (error) {
      console.error("Error parsing authState from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (currentPage!=0 && !formData.employeeCode) {
      alert("Please fill all required fields before proceeding.");
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post("/logout");
      console.log(response);
      
      localStorage.removeItem("token");
      localStorage.removeItem("authState");
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
          userName={userName} 
          onLogout={handleLogout} 
        />
      </header>
      {currentPage === 0 && <Page0  onNext={handleNext}  />}
      {currentPage === 1 && <Page1 catTotal={categoriesTotal} formData={formData} setFormData={setFormData} onPrevious={handlePrevious} onNext={handleNext}  />}
      {currentPage === 2 && <Page3 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} isReadOnly={isReadOnly} userRole={userRole} />}
      {currentPage === 3 && <Page4 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} isReadOnly={isReadOnly} userRole={userRole}/>}
      {currentPage === 4 && <Page5 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} isReadOnly={isReadOnly} userRole={userRole}/>}
      {currentPage === 5 && <Page6 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} isReadOnly={isReadOnly} userRole={userRole}/>}
      {currentPage === 6 && <Page2 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} isReadOnly={isReadOnly} userRole={userRole}/>}
      {currentPage === 7 && <Page7 formData={formData} setFormData={setFormData} onPrevious={handlePrevious} isReadOnly={isReadOnly} />}
    </div>
  );
};

export default App;