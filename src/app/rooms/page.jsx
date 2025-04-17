import Breadcrumb from '@/components/Breadcrumb'
import RoomGrid from '@/components/RoomGrid'
import React from 'react'

const RoomsPage = () => {
  return (
    <div>
      <Breadcrumb title="Rooms & Suites" />
      <RoomGrid />
    </div>
  )
}

export default RoomsPage;