import React from 'react'
import logo from '../../assets/img/logo.png'
import edugrad from '../../assets/img/edugard.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

    const nav_titles=[
        {
        path:'/',display:'Home'
         },

         {
            path:'/services',display:'Services'
             },
             {
                path:'/courses',display:'Courses'
                 },
                 {
                    path:'/about',display:'About Us'
                     },
                     
    ]
  return (
     <header className='header'>
     <div className='container'>

     <div className='nav_container'>
        <div className='logo'>
            <div className='logo-img'>

                <img src={edugrad} alt=''>

                </img>
            </div>
            <a href='https://google.com'>
            <h2>Edugrad</h2></a>
            

        </div>

        <div className='navigation'>


        <ul className='menu'>
            {
                nav_titles.map((item)=>(
<li className='nav_item'><Link to={item.path}>{item.display}</Link></li>
                ))
            }
            
        </ul>

        </div>


    </div>
    </div>
   </header>
  )
}

export default Header