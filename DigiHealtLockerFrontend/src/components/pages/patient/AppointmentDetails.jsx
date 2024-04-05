import React from 'react';
import PatientHeader from './PatientHeader'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import allAppointments from '../../../utils/allAppointments';

const AppointmentDetails = () => {
  const {appointmentId} = useParams();
  console.log('Appointment ID:', appointmentId);
  console.log(allAppointments[0].appointment_id);
  const appointment = allAppointments.find(appointment => appointment.appointment_id === appointmentId);

  if (!appointment) {
    return <div>Appointment not found</div>;
  }

  return (
    <>
    <PatientHeader/>
    <div className="container mx-auto mt-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="w-full">
        <div className='flex justify-between'>
        <h3 className="text-lg font-semibold text-teal-600 p-2">Appointment Details</h3>
        </div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <tbody>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Appointment ID</td>
                      <td className="pr-4 pt-2 pb-2">{appointment.appointment_id}</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Hospital Name</td>
                      <td className="pr-4 pt-2 pb-2">{appointment.hospital_name}</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Department</td>
                      <td className="pr-4 pt-2 pb-2">{appointment.department}</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Doctor Name</td>
                      <td className="pr-4 pt-2 pb-2">{appointment.doctor_name}</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Appointment Date</td>
                      <td className="pr-4 pt-2 pb-2">{appointment.appointment_date}</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Time Slot</td>
                      <td className="pr-4 pt-2 pb-2">{appointment.time_slot}</td>
                    </tr>
                    <tr className="border-b border-teal-600">
                      <td className="font-semibold pr-4 pt-2 pb-2">Problem</td>
                      <td className="pr-4 pt-2 pb-2">{appointment.problem}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AppointmentDetails;
