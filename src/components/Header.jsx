import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderNav from './HeaderNav'

const Header = () => {
    return (
        <header className='mb-[-28dvh] xl:mb-[-20dvh] flex flex-col relative'>
            <HeaderTop />
            <HeaderNav />
        </header>
    )
}

export default Header