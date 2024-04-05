import React from 'react'
import PatientHeader from './PatientHeader'
import { NavLink } from 'react-router-dom'
import allAppointments from '../../../utils/allAppointments'

const AllAppointments = () => {
  return (
    <>
      <PatientHeader />
      <div className="overflow-x-auto flex items-center justify-center">
        <div>
          <table className="min-w-4xl bg-white shadow-lg rounded mt-10">
            <thead className='border'>
              <tr className="text-left  text-teal-600">
                <th className="py-3 px-4">Appointment ID</th>
                <th className="py-3 px-4">Doctor Name</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Problem</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {allAppointments.map(appointment => (
                <tr key={appointment.aadhar_no}>
                  <td className="border-b py-3 px-4">{appointment.appointment_id}</td>
                  <td className="border-b py-3 px-4">{appointment.doctor_name}</td>
                  <td className="border-b py-3 px-4">{appointment.appointment_date}</td>
                  <td className="border-b py-3 px-4">{appointment.time_slot}</td>
                  <td className="border-b py-3 px-4">{appointment.problem}</td>
                  <td className="border-b py-3 px-4">
                    <span className={appointment.status === 'Accepted' ? 'text-green-600' : appointment.status === 'Rejected' ? 'text-red-600' : 'text-yellow-500'}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="border-b py-3 px-4 underline text-sm hover:text-blue-600"><NavLink to={'appointmentdetails/'+ appointment.appointment_id }>view more</NavLink></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AllAppointments