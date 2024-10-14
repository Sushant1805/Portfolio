
import './header.css';
import { useEffect } from 'react';
import Typed from 'typed.js';
import data from "./data"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Header = () => {
  useEffect(() => {
  AOS.init({duration:1500})
    },[])

  useEffect(() => {
    const options = {
      strings: ['programmer','developer', 'designer'],
      typeSpeed: 120,
      backSpeed: 110,
      loop: true
    };
    
    const typed = new Typed('.input', options);

    // Cleanup function to destroy the Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id='header'>
      <div className='container header__container' data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className='header__maintext'>
        <h1>
          I'm a <br /> <span className='input'></span>
        </h1>
        <p>Also Gamer, Sports lover.</p>
        </div>
        <div className='header__cta'>
            <a href='#contact' className='btn primary'>Let's Talk</a>
            <a href='#portfolio' className='btn white'>My Projects</a>
        </div>

        <div className='header__socials '>
          {
            data.map(item => <a key={item.id} href={item.link} target="blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </section>
  );
};

export default Header;
