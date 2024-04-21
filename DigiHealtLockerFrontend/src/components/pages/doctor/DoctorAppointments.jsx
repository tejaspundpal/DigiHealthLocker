import React, { useEffect, useState } from 'react'
import DoctorHeader from './DoctorHeader'
import doctorAllAppointments from '../../../utils/allAppointments'
import { NavLink } from 'react-router-dom'


const DoctorAppointments = () => {


  return (
    <>
      <DoctorHeader />
      <div className="overflow-x-auto flex items-center justify-center">
        <div>
          {/* <div className='mt-10 flex justify-between'>
            <h1 className="text-3xl font-semibold text-center text-teal-600">Appointment List</h1>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-teal-600"
            ><NavLink to="/doctor/appointments/addappointment">
              Add Appointment</NavLink>
            </button>
          </div>
          <table className="min-w-4xl bg-white shadow-lg rounded mt-5">
            <thead className='border'>
              <tr className="text-left  text-teal-600">
                {/* <th className="py-3 px-4">Appointment ID</th> */}
                {/* <th className="py-3 px-4">Patient Name</th> */}
                {/* <th className="py-3 px-4">Date</th> */}
                {/* <th className="py-3 px-4">Time</th> */}
                {/* <th className="py-3 px-4">Problem</th> */}
                {/* <th className="py-3 px-4">Status</th> */}
                {/* <th className="py-3 px-4">Details</th> */}
              {/* </tr> */}
            {/* </thead> */}
            {/* <tbody className="text-gray-700"> */}
              {/* {doctorAllAppointments.map(appointment => (
                <tr key={appointment.aadhar_no}> */}
              {/* <td className="border-b py-3 px-4">{appointment.appointment_id}</td> */}
              {/* <td className="border-b py-3 px-4">{appointment.patient_name}</td>
                  <td className="border-b py-3 px-4">{appointment.appointment_date}</td>
                  <td className="border-b py-3 px-4">{appointment.time_slot}</td>
                  <td className="border-b py-3 px-4">{appointment.problem}</td> */}
              {/* <td className="border-b py-3 px-4">
                    <span className={appointment.status === 'Accepted' ? 'text-green-600' : appointment.status === 'Rejected' ? 'text-red-600' : 'text-yellow-500'}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="border-b py-3 px-4 underline text-sm hover:text-blue-600"><NavLink to={'appointmentdetails/' + appointment.aadhar_no}>view more</NavLink></td>
                </tr>
              ))} */}
            {/* </tbody> */}
          {/* </table> */}
        </div>
      </div >
    </>
  )
}

export default DoctorAppointments