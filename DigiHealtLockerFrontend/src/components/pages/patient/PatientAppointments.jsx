import React from 'react';
import PatientHeader from './PatientHeader'
import { NavLink } from 'react-router-dom';

const PatientAppointments = () => {
  return (
    <>
    <PatientHeader/>
    <div className="container mx-auto mt-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="w-full">
        <div className='flex justify-between'>
        <h3 className="text-lg font-semibold text-teal-600 p-2">Appointment Details</h3>
        <NavLink to='/patient/appointments/allappointments'><button className="px-4 py-1 bg-teal-600 text-white border border border-teal-500  rounded hover:bg-gray-50 hover:text-teal-600"><span className="ti-pencil-alt"></span>All Appointments</button></NavLink>
        </div>
          <div className="bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-teal-600 p-4 border-b">1.</h3>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <tbody>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Patient ID</td>
                      <td className="pr-4 pt-2 pb-2">PT56</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Department</td>
                      <td className="pr-4 pt-2 pb-2">Dental</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Doctor Name</td>
                      <td className="pr-4 pt-2 pb-2">Dr Kiran Sharma</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Appointment Date</td>
                      <td className="pr-4 pt-2 pb-2">16-nov-2018</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Time Slot</td>
                      <td className="pr-4 pt-2 pb-2">10AM-11AM</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Token Number</td>
                      <td className="pr-4 pt-2 pb-2">27</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Problem</td>
                      <td className="pr-4 pt-2 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis egestas aliquet. Nunc ullamcorper massa in magna pulvinar, a eleifend felis condimentum.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-3"><span className="ti-pencil-alt"></span> Accept</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"><span className="ti-trash"></span>Reject</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default PatientAppointments;
