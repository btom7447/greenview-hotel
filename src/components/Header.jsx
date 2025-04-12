import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderNav from './HeaderNav'

const Header = () => {
    return (
        <header className='mb-[-30dvh] md:mb-[-32dvh] xl:mb-[-30dvh] flex flex-col relative'>
            <HeaderTop />
            <HeaderNav />
        </header>
    )
}

export default Header