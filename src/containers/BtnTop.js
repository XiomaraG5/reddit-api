import React, { useEffect, useState } from 'react'

const BtnTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false),
        goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);
  return (
    <div className='btnTop' onClick={goToTop}> 
        {showTopBtn &&
        <p className='position-fixed fixed-botton '> 
            <i class="bi bi-arrow-up-circle-fill"></i>
        </p>
        }
    </div>
  )
}

export default BtnTop