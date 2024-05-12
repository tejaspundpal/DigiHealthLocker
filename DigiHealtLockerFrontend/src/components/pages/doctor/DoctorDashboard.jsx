import React from 'react'
import DoctorHeader from './DoctorHeader'
import { useAuth } from '../../../Store/AuthClient'
const DoctorDashboard = () => {
  let { user } = useAuth();
  console.log(user);
  return (
    <>
      <DoctorHeader />
      <div>DoctorDashboard</div>
    </>
  )
}

export default DoctorDashboard