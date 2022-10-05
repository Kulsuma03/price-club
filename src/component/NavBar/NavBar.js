import React, { useState } from 'react';
import Link from '../../Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Products', path: '/products'},
        {id: 4, name: 'Orders', path: '/order'},
        {id: 5, name: 'Contact', path: '/contact'},
        {id: 6, name: 'About', path: '/about'},
    ]
    return (
        <nav className='bg-sky-300 '>
            <ul className={`md:flex justify-center w-full bg-sky-300  absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`} >
              {
                routes.map(route => <Link 
                    key={route.id}
                    route={route}
                ></Link>)
              }
            </ul>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden ">
            {
                open 
                ? <XMarkIcon />
                : <Bars3Icon />
            }
            </div>
            
        </nav>
    );
};

export default NavBar;