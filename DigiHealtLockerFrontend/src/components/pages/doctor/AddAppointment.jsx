import React, { useState } from 'react';
import DoctorHeader from './DoctorHeader';

function AddAppointments() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAadharNo: '',
    hospitalName: '',
    department: '',
    appointmentDate: '',
    timeSlot: '',
    problem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <>
      <DoctorHeader />
      <div className="container mx-auto mt-5">
        <h1 className="text-3xl font-semibold text-center mb-8 text-teal-600">Add Appointment</h1>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 md:pl-2 mb-3">
              <label htmlFor="patientName" className="block text-gray-700">Patient Name</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2 mb-3">
              <label htmlFor="patientAadharNo" className="block text-gray-700">Patient Aadhar No</label>
              <input
                type="text"
                id="patientAadharNo"
                name="patientAadharNo"
                value={formData.patientAadharNo}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2 mb-3">
              <label htmlFor="hospitalName" className="block text-gray-700">Hospital Name</label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2 mb-3">
              <label htmlFor="department" className="block text-gray-700">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2 mb-3">
              <label htmlFor="appointmentDate" className="block text-gray-700">Appointment Date</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2 mb-3">
              <label htmlFor="timeSlot" className="block text-gray-700">Time Slot</label>
              <input
                type="time"
                id="timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
              <label htmlFor="problem" className="block text-gray-700">Problem</label>
              <textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                rows="4"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              ></textarea>
            </div>
          </div>
          <div className="mb-4 ml-2">
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-teal-600"
            >
              Add Appointment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddAppointments;
