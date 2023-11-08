import React from 'react'
import './Footer.css'
import footer from'../../assets/img/footer.png'
import { Link } from 'react-router-dom'

function Footer() {
    const handleClick=()=>{
        window.scrollTo(0,0);
    }
  return (
<footer className='footer'>
    <div className='container'>
<div className='footer_wrapper'>

<div className='footer-box'>
    <div className='logo'>
        <div className='logo-img'>

            <img src={footer} alt=''>

            </img>
        </div>
    </div>
    <h2>Edugrad</h2>


</div>
<div>
<p>
    Embrace the future of innovation and technology with our cutting edge tech business solutions
    </p></div>
<div className='footer-box'>
<h4 className='footer_title'>Company</h4>
<ul className='footer_links'>
<li>
<Link to='/courses'>Our Programs</Link>
</li>
<li>
<Link to='/services'>Our Plans</Link>
</li>

</ul>

</div>
<div className='footer-box'>
<h4 className='footer_title'>Quick Links</h4>
<ul className='footer_links'>
<li>
<Link to='/about' onClick={handleClick}> About us</Link>
</li>
<li>
<Link to='/contact' onClick={handleClick}>Contact Us</Link>
</li>

</ul>


</div>



</div>
</div>
    

</footer>
  )
}

export default Footer
