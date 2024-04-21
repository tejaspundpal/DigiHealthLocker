import React from 'react';
import { useParams } from 'react-router-dom';
import doctorAllAppointments from '../../../utils/doctorAllAppointments';
import DoctorHeader from './DoctorHeader';

const DoctorAppointmentDetails = () => {
  const {aadhar_no,registration_no} = useParams();
  console.log('Aadhaar No:',);
  console.log(doctorAllAppointments[0].aadhar_no);
  console.log('Registration No:', );
  console.log(doctorAllAppointments[0].registration_no);
  const appointment = doctorAllAppointments.find(appointment => appointment.aadhar_no === aadhar_no);

  if (!appointment) {
    return <div>Appointment not found</div>;
  }

  return (
    <>
      <DoctorHeader />
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
                        <td className="font-semibold pr-4 pt-2 pb-2">Patient Name</td>
                        <td className="pr-4 pt-2 pb-2">{appointment.patient_name}</td>
                      </tr>
                      <tr className="border-b border-teal-600">
                        <td className="font-semibold pr-4 pt-2 pb-2">Patient Aadhar No.</td>
                        <td className="pr-4 pt-2 pb-2">{appointment.aadhar_no}</td>
                      </tr>
                      <tr className="border-b border-teal-600">
                        <td className="font-semibold pr-4 pt-2 pb-2">Department</td>
                        <td className="pr-4 pt-2 pb-2">{appointment.department}</td>
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

export default DoctorAppointmentDetails;
