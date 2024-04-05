import React, { useState } from 'react';
import DoctorHeader from './DoctorHeader';

function DoctorUpload() {
  const [aadharNo, setAadharNo] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleAadharChange = (e) => {
    setAadharNo(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Perform upload logic here (e.g., send data to server)
    if (aadharNo && selectedFile) {
      // Simulate upload success
      setUploadSuccess(true);
      // Reset form
      setAadharNo('');
      setSelectedFile(null);
    } else {
      alert('Please enter Aadhar number and select a file.');
    }
  };

  return (
    <>
    <DoctorHeader/>
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-center mb-8 text-teal-600">Upload Patient Documents</h1>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="aadharNo" className="block text-gray-700">Patient Aadhar No</label>
          <input
            type="text"
            id="aadharNo"
            value={aadharNo}
            onChange={handleAadharChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="document" className="block text-gray-700">Upload Document</label>
          <input
            type="file"
            id="document"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            required
          />
        </div>
        <div className="mb-4">
          <button
            onClick={handleUpload}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-teal-600"
          >
            Upload
          </button>
        </div>
        {uploadSuccess && (
          <div className="bg-green-100 border border-green-400 px-4 py-2 rounded mb-4">
            Document uploaded successfully.
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default DoctorUpload;
