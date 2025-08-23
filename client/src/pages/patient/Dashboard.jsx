import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";
import Header from "./Header";
import TestResults from "./TestResults";
import PatientProfile from "./PatientProfile";
import HealthRcords from "./HealthRecord";
import MedicalAlert from "./MedicalAlert";
import Doctormessage from "./Doctormessage"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("PatientProfile");

  const renderContent = () => {
    switch (activeTab) {
      case "PatientProfile": return <PatientProfile />; 
      case "HealthRecords": return <HealthRcords />;
      case "TestResults": return <TestResults />; 
      case "DoctorMessages": return <Doctormessage />; 
      case "MedicalAlerts": return <MedicalAlert />; 
      default: return <PatientProfile />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
