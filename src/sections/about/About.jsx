import React, { useEffect, useRef } from 'react';
import CV from './resume.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';
import lottie from 'lottie-web';

function About() {
  const about__portrait = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: about__portrait.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./Animation - 1719590009520 (2).json')
    });
  }, []);

  return (
    <section id="about">
      <div className="container about__container" data-aos="fade-up">
        <div className="about__left">
          <div className="about__portrait" ref={about__portrait}>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5 className="title_text">{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p style={{ color: 'white' }}>
            Hi, my name is Sushant Bhosale from Pune, India. I'm a competitive
            programmer and coding enthusiast currently pursuing a Bachelor's
            degree in Computer Science.
          </p>
          <p style={{ color: 'white' }}>
            I am passionate about coding and development, constantly pushing
            myself to learn and master new technologies. With a strong
            foundation in competitive programming and a love for solving complex
            problems, I am always eager to take on new challenges and Learn something new!. Get in touch today, and
            let's get started! Check out my resume below!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
