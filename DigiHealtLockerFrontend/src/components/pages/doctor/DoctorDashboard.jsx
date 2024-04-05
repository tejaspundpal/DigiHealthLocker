import React from 'react'
import DoctorHeader from './DoctorHeader'
import { useState } from 'react';

const DoctorDashboard = () => {
  const [aadharNo, setAadharNo] = useState('');
  const [patientFiles, setPatientFiles] = useState([]);

  const handleSearch = () => {
    const dummyFiles = [
      { id: 1, name: 'Report1.pdf' },
      { id: 2, name: 'Report2.pdf' },
      { id: 3, name: 'Report3.pdf' },
    ];
    setPatientFiles(dummyFiles);
  };

  const handleAadharChange = (e) => {
    setAadharNo(e.target.value);
  };

  const renderPatientFiles = () => {
    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Patient Files:</h3>
        <ul className="list-disc pl-5">
          {patientFiles.map((file) => (
            <li key={file.id}>
              <a href={`path/to/patients/${file.name}`} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <DoctorHeader />
      <div className='className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md "'>
        <h2 className="text-2xl font-bold mb-4 text-teal-600 flex justify-center items-center">Patient Search</h2>
        <div className="max-w-2xl flex justify-center items-center">
          <label htmlFor="aadharNo" className="mr-2">Enter Aadhar No:</label>
          <input
            type="text"
            id="aadharNo"
            value={aadharNo}
            onChange={handleAadharChange}
            placeholder="Enter Aadhar No"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500 flex-grow"
          />
          <button onClick={handleSearch} className="ml-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-teal-300">
            Search
          </button>
        </div>
        {patientFiles.length > 0 && renderPatientFiles()}
      </div>
    </>
  )
}

export default DoctorDashboard