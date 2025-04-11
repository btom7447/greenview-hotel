import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderNav from './HeaderNav'

const Header = () => {
    return (
        <header className='mb-[-30dvh] md:mb-[-35dvh] xl:mb-[-28dvh] flex flex-col relative'>
            <HeaderTop />
            <HeaderNav />
        </header>
    )
}

export default Header