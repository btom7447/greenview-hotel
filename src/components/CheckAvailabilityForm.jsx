import React from 'react'

const CheckAvailabilityForm = () => {
    return (
        <form className='w-full md:w-[80%] flex flex-wrap items-stretch  md:absolute md:left-1/2 md:bottom-[-30] md:transform md:-translate-x-1/2 shadow-md'>
            <div className='w-full md:w-[25%] p-10 bg-white border-none outline-none'>
                <h2 className='text-black text-3xl'>Check In</h2>
                <input
                    type='date'
                />
            </div>
            <div className='w-full md:w-[25%] p-10 bg-white border-none outline-none'>
                <h2 className='text-black text-3xl'>Check Out</h2>
                <input
                    type='date'
                />
            </div>
            <div className='w-full md:w-[25%] p-10 bg-white border-none outline-none'>
                <h2 className='text-black text-3xl'>Quests</h2>
                <select name="guests" id="guests">
                    <option value=""></option>
                    <option value="">2</option>
                </select>
            </div>
            <button className='w-full md:w-[25%] bg-[#E4BF3B] hover:bg-black hover:text-white text-black text-3xl p-10 transition duration-300 ease-in-out cursor-pointer'> 
                Check Availability
            </button>
        </form>
    )
}

export default CheckAvailabilityForm