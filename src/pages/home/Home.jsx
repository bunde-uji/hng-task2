import React from "react";
import img from '../../assets/profile_img.png'
import Link from '../../components/link/Link';
import share from '../../assets/share.png';
import slackIcon from '../../assets/slack-icon.png';
import github from '../../assets/github.png';
import shareWeb from '../../assets/share-web.png';
import shareMobile from '../../assets/share-mobile.png';


function Home() {
    return (  
        <div>
            <div className="main">
        <div className="profile-section">
          <img src={img} alt="" id='profile__img' />
          <h3 className="name" id='twitter'>bundeuji</h3>
          <h3 id='slack'>Bunde</h3>
          <img src={shareWeb} alt="" className='share' />
          <img src={shareMobile} alt="" className='shareMobile' />
        </div>

        <div className="links-section">
          <Link text="Twitter Link" url='https://twitter.com/bundeuji' />
          <Link text="Zuri Team" url='https://training.zuri.team/' id='btn__zuri' />
          <Link text="Zuri Books" url='http://books.zuri.team' id='books' />
          <Link text="Python Books" url='https://books.zuri.team/python-for-beginners?ref_id=Bunde' id='book__python' />
          <Link text="Background Check for Coders" url='https://background.zuri.team' id='pitch' />
          <Link text="Design Books" url='https://books.zuri.team/design-rules' id='book__design' />
          <Link text='Contact' url='/contact' id='contact' />
        </div>

        <div className="socials-section">
          <img src={slackIcon} alt="" className='social' />
          <img src={github} alt="" className='social' />
        </div>
      </div>
        </div>
    );
}

export default Home;