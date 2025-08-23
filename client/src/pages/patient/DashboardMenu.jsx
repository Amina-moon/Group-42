import React from "react";
import { FiUser, FiActivity } from "react-icons/fi";
import { VscNote, VscComment, VscBell } from "react-icons/vsc";
import logo from "../../assets/Images/logo1.png"; 

const menuItems = [
  { name: "Patient Profile", icon: <FiUser />, key: "PatientProfile" },
  { name: "Health Records", icon: <VscNote />, key: "HealthRecords" },
  { name: "Test Results", icon: <FiActivity />, key: "TestResults" },
  { name: "Doctor Messages", icon: <VscComment />, key: "DoctorMessages" },
  { name: "Medical Alerts", icon: <VscBell />, key: "MedicalAlerts" },
];

const DashboardMenu = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="bg-[#EFF7FD] shadow-lg w-64 flex flex-col">
      <div className="flex items-center justify-start p-4">
        <img src={logo} alt="Wanaw Tena Logo" className="h-12 w-auto mr-2" />
        <span className="text-2xl font-bold text-[#155DFC]">Wanaw Tena</span>
      </div>

      <nav className="mt-4 flex-1">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`flex items-center p-3 cursor-pointer rounded hover:bg-gray-200 mx-2 my-1 ${
              activeTab === item.key ? "bg-gray-200 font-bold" : ""
            }`}
            onClick={() => setActiveTab(item.key)}
          >
            <span className="text-lg mr-3">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardMenu;
