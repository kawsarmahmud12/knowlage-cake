import React from 'react';


const Header = () => {
    return (
        <nav className='flex justify-between mt-[30px] px-[100px] items-center'>
            <div>
                <h2 className='text-[40px] font-[700]'>knowlage cafe</h2>
            </div>
            <ul className='flex'>
                <li className='mr-6 font-bold'><a href="/about">About</a></li>
                <li className='mr-6 font-bold'><a href="/service">Service</a></li>
                <li className='mr-6 font-bold'><a href="/blog">Blog</a></li>
                <li className='font-bold'><a href="/contact">Contact</a></li>     
            </ul>
            <div>
                <img className='w-10 h-10 rounded-full' src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="author" />
            </div>
        </nav>
    );
};

export default Header;