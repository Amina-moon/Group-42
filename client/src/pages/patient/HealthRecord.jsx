// src/HealthRecords.js
import React, { useState } from 'react';

const HealthRecord = () => {
    const [activeTab, setActiveTab] = useState('documents');

    const documents = [
        { title: 'Annual Physical Exam', date: '2024-01-15', doctor: 'Dr. A', type: 'Exam Report' },
        { title: 'Blood Work Results', date: '2024-01-03', doctor: 'Dr. B', type: 'Lab Results' },
        { title: 'Chest X-Ray', date: '2023-12-20', doctor: 'Dr.C', type: 'Imaging' },
    ];

    const prescriptions = [
        { title: 'Prescription 1', date: '2024-01-10', doctor: 'Dr. A' },
        { title: 'Prescription 2', date: '2024-01-05', doctor: 'Dr. B' },
    ];

    const labResults = [
        { title: 'Lab Results 1', date: '2024-01-02', doctor: 'Dr. D' },
        { title: 'Lab Results 2', date: '2023-12-28', doctor: 'Dr. F' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'prescriptions':
                return prescriptions.map((record, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-4 mb-2 flex justify-between items-center">
                        <div>
                            <span className="font-semibold">{record.title} - {record.date}</span><br />
                            <span className="text-gray-600">{record.doctor}</span>
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">View Prescription</a>
                    </div>
                ));
            case 'labResults':
                return labResults.map((record, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-4 mb-2 flex justify-between items-center">
                        <div>
                            <span className="font-semibold">{record.title} - {record.date}</span><br />
                            <span className="text-gray-600">{record.doctor}</span>
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">View Lab Result</a>
                    </div>
                ));
            case 'documents':
            default:
                return documents.map((record, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-4 mb-2 flex justify-between items-center">
                        <div>
                            <span className="font-semibold">{record.title} - {record.date}</span><br />
                            <span className="text-gray-600">{record.doctor}</span>
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">{record.type}</a>
                    </div>
                ));
        }
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Health Records</h1>
            <div className="flex mb-4">
                <button 
                    className={`py-2 px-4 rounded mr-2 ${activeTab === 'documents' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} 
                    onClick={() => setActiveTab('documents')}
                >
                    Documents
                </button>
                <button 
                    className={`py-2 px-4 rounded mr-2 ${activeTab === 'prescriptions' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} 
                    onClick={() => setActiveTab('prescriptions')}
                >
                    Prescriptions
                </button>
                <button 
                    className={`py-2 px-4 rounded ${activeTab === 'labResults' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} 
                    onClick={() => setActiveTab('labResults')}
                >
                    Lab Results
                </button>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
};

export default HealthRecord;