import React from 'react';
import foot1 from '../../assets/Vector_text.png';
import foot2 from '../../assets/Vector_dot.png';
import zuriLogoMobile from '../../assets/zuri_logo_mobile.png';
import footText from '../../assets/footer_text.png';
import footTextMobile from '../../assets/footer_text_mobile.png';
import i4g from '../../assets/I4G.png';
import i4gMobile from '../../assets/I4G_mobile.png';


function Footer() {
    return (  
        <div className="footer">
            <div className="footer-inner-container">
                <div className="footer-item footer-item-web zuri" id='zuri'>
                    <img src={foot1} alt="" className='foot1' />
                    <img src={foot2} alt="" className='foot2' />
                </div>
                <img src={zuriLogoMobile} className="footer-item footer-item-mobile" alt="" id="zuri_mobile" />

                <img src={footText} alt="" className="footer-item footer-item-web" id='text'/>
                <img src={footTextMobile} alt="" className="footer-item footer-item-mobile" id='text_mobile'/>

                <img src={i4g} alt="" className="footer-item footer-item-web" id='i4g'/>
                <img src={i4gMobile} alt="" className="footer-item footer-item-mobile" id='i4g_mobile'/>
            </div>
        </div>
    );
}

export default Footer;