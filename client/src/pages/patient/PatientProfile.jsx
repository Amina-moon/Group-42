import React from 'react';

const PatientProfile = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen space-y-6">
      <div className="max-w-9/10 mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H6a1 1 0 110-2h4V3a1 1 0 011-1z" />
            </svg>
            Edit
          </button>
        </div>
        <p className="text-gray-600 mb-4">Manage your basic profile information</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-black font-semibold">First Name</span>
            <div className="text-gray-600">Amina</div>
          </div>
          <div>
            <span className="text-black font-semibold">Last Name</span>
            <div className="text-gray-600">Yassin</div>
          </div>
          <div>
            <span className="text-black font-semibold">Email</span>
            <div className="text-gray-600">aminayassin369@email.com</div>
          </div>
       
          <div>
            <span className="text-black font-semibold">Phone</span>
            <div className="text-gray-600">+251900000000</div>
          </div>
          <div>
            <span className="text-black font-semibold">Address</span>
            <div className="text-gray-600">kaliti</div>
          </div>
          <div>
            <span className="text-black font-semibold">Emergency Contact</span>
            <div className="text-gray-600">Yassin-0988888888</div>
          </div>
        </div>
      </div>

      <div className="max-w-9/10 mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Medical History</h2>
        <p className="text-gray-600 mb-4 text-sm">View-only medical information maintained by your healthcare provider</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="flex items-center font-semibold mb-2">
              <span className="mr-2">👤</span> Demographics
            </h3>
            <div className="space-y-1 text-gray-600">
              <div><span className="font-semibold text-black">Date of Birth:</span> March 15, 1985</div>
              <div><span className="font-semibold text-black">Gender:</span> Male</div>
              <div><span className="font-semibold text-black">Blood Type:</span> O+</div>
              <div><span className="font-semibold text-black">Height:</span> 160cm</div>
              <div><span className="font-semibold text-black">Weight:</span> 75Kg</div>
            </div>
          </div>
          <div>
            <h3 className="flex items-center font-semibold mb-2">
              <span className="mr-2">💊</span> Current Medications
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">Lisinopril 10mg - Daily</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">Metformin 500mg - Twice daily</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">Vitamin D3 1000IU - Daily</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="flex items-center font-semibold mb-2">⚠️ Allergies & Conditions</h3>
            <div className="space-x-2 mb-2">
              <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm">Penicillin</span>
              <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm">Shellfish</span>
            </div>
          </div>
          <div>
            <div className="space-x-2 mb-2">
              <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-sm">Type 2 Diabetes</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-sm">Hypertension</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
