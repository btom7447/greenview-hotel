import React from 'react'
import { Facebook, Instagram, Mail, MapPin, Music2 } from 'lucide-react'

const HeaderTop = () => {
    return (
        <div className='bg-transparent hidden md:flex px-5 py-10 items-center justify-between gap-30 border-gray-600 border-b-1 z-20'>
            <div className='flex items-center space-x-5' aria-label="Social Media Links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook size={25} color='#FFF' />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={25} color='#FFF' />
                </a>
                <a href="https://musicplatform.com" target="_blank" rel="noopener noreferrer" aria-label="Music">
                    <Music2 size={25} color='#FFF' />
                </a>
            </div>
            <div className='flex items-center space-x-10'>
                <div className='flex items-center gap-1'>
                    <Mail size={20} color='#E4BF3B' />
                    <a href="mailto:help@greenviewhotelltd.com" className='text-white text-lg'>
                        help@greenviewhotelltd.com
                    </a>
                </div>
                <div className='flex items-center gap-1'>
                    <MapPin size={20} color='#E4BF3B' />
                    <address className='text-white text-lg not-italic'>
                        Plot 221 Ewet Housing Extension Estate, Uyo, AKS, Nigeria.
                    </address>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop