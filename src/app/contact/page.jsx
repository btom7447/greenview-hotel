import Breadcrumb from '@/components/Breadcrumb'
import ContactSection from '@/components/ContactSection'
import MapSection from '@/components/MapSection'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <Breadcrumb title="Contact" />
      <ContactSection />
      <MapSection />
    </div>
  )
}

export default ContactPage;