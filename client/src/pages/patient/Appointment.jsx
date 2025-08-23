import { useState } from 'react';
import { useNavigate } from "react-router-dom"; 




const Appointment = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedProvider, setSelectedProvider] = useState('ele Health');
  const [selectedService, setSelectedService] = useState('Clinic Consultation');
  const [selectedLocation, setSelectedLocation] = useState('Tele-Health');
  const [appointmentDate, setAppointmentDate] = useState('2025-08-21');
  const [appointmentTime, setAppointmentTime] = useState('10:30');
  const [reason, setReason] = useState('e.g. General checkup with healthcare provider');
    const navigate = useNavigate(); 


  const CancelAppointment = () => {
    navigate("/"); 
  };


  const departments = ['All Departments', 'Cardiology', 'Dermatology', 'Pediatrics'];
//   const providers = ['Tele Health', 'Provider 2', 'Provider 3'];
  const services = ['Clinic Consultation', 'Teleconsultation', 'Follow-up'];
//   const locations = ['Tele-Health', 'Main Clinic', 'Branch Office'];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Appointment booked:', {
      selectedDepartment,
      selectedProvider,
      selectedService,
      selectedLocation,
      appointmentDate,
      appointmentTime,
      reason
    });
    alert('Appointment booked successfully!');
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    return hour >= 12 
      ? `${hour === 12 ? 12 : hour - 12}:${minutes} pm` 
      : `${hour === 0 ? 12 : hour}:${minutes} am`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-2">Book Your Appointment</h1>
          <p className="text-blue-100">Schedule your healthcare visit Wnaw Tena Health</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Department</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

        
          {/* <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Healthcare Provider</label>
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm mb-2"
            >
              {providers.map((provider) => (
                <option key={provider} value={provider}>{provider}</option>
              ))}
            </select>
            <p className="text-sm text-gray-600 mb-2">Search for a Healthcare Provider (without title e.g. Dr, Mr, Ms)</p>
            <button type="button" className="text-blue-600 font-medium text-sm hover:underline">
              View Healthcare Providers
            </button>
          </div> */}

          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Service</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          {/* <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Practice Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div> */}

          {/* Appointment Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">Appointment Date</label>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
              <p className="mt-2 text-gray-700 font-medium">{formatDate(appointmentDate)}</p>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">Appointment Time</label>
              <input
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
              <p className="mt-2 text-gray-700 font-medium">{formatTime(appointmentTime)}</p>
              <p className="mt-1 text-sm text-gray-600 font-semibold">EAT</p>
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Reason for Appointment</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm h-32"
              placeholder="e.g. General checkup with healthcare provider"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
            onClick={CancelAppointment} 
              type="button"
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/30"
            >
              Confirm Appointment
            </button>
          </div>
        </form>

        <div className="bg-gray-100 p-6 text-center text-gray-600 text-sm">
          <p>© 2025 Wanaw Tena. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;