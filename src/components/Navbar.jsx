import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSportsCricket } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOtherHouses } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
    <header className='w-full py-3 text-white'>
        <nav className=' flex justify-between items-center w-[75%] m-auto'>
            <span className='w-[25%]'>
                <Link to="/" className='font-bold'><img src="/Techno.jpg" alt="logo" className='w-32'/></Link>
            </span>
            <ul className='flex gap-10 w-[50%] justify-center'>
                <li><Link to="/" className='text-2xl' title='Home'><FaHome /></Link></li>
                <li><Link to="/tech" className='text-2xl' title='Technology'><GrTechnology /></Link></li>
                <li><Link to="/sport" className='text-2xl' title='Sports'><MdOutlineSportsCricket /></Link></li>
                <li><Link to="/finance" className='text-2xl' title='Finance'><FaMoneyBillAlt /></Link></li>
                <li><Link to="/other" className='text-2xl' title='Other'><MdOtherHouses /></Link></li>
            </ul>
            <span className='w-[25%] flex justify-end relative'>
                <input type="text" className='px-3 py-1 rounded-full' placeholder='Search blog' />
                <FaSearch className='absolute top-[calc(50%-10px)] right-2 text-xl cursor-pointer text-black'/>
            </span>
        </nav>
    </header>
      
    </>
  )
}

export default Navbar
