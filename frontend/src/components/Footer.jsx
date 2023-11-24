import React from 'react';


const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-primary flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center color-white'>
                <p className='text'><b>"Driving Dreams, Accelerating your journey"</b></p> 
                <span className='text'>&copy; {date.getFullYear().toString()} Automotive. Theme</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer