import React from 'react';
import foot1 from '../../assets/Vector_text.png';
import foot2 from '../../assets/Vector_dot.png';
import footText from '../../assets/footer_text.png';
import i4g from '../../assets/I4G.png';


function Footer() {
    return (  
        <div className="footer">
            <div className="footer-inner-container">
                <div className="footer-item zuri" id='zuri'>
                    <img src={foot1} alt="" className='foot1' />
                    <img src={foot2} alt="" className='foot2' />
                </div>
                <img src={footText} alt="" className="footer-item" id='text'/>
                <img src={i4g} alt="" className="footer-item" id='i4g'/>
            </div>
        </div>
    );
}

export default Footer;