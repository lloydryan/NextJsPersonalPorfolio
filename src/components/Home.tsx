import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaBrain, FaCode, FaGithub, FaLinkedin, FaPaintBrush, FaTwitter } from "react-icons/fa";
import profile from "../assets/images/profile.jpg";
const Home = () => {
  const navigate = useNavigate();
  const staticText = "Hi, I'm "; // This part remains unchanged
  const dynamicText = "Lloyd."; // This part will be erased and retyped
  const [typedText, setTypedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayAfterTyping = 1000; // Delay before erasing
    const delayAfterErasing = 500; // Delay before retyping

    const interval = setTimeout(
      () => {
        if (!isErasing && index < dynamicText.length) {
          setTypedText((prev) => prev + dynamicText[index]);
          setIndex(index + 1);
        } else if (isErasing && index > 0) {
          setTypedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        } else if (index === dynamicText.length) {
          setTimeout(() => setIsErasing(true), delayAfterTyping);
        } else if (index === 0 && isErasing) {
          setTimeout(() => setIsErasing(false), delayAfterErasing);
        }
      },
      isErasing ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(interval);
  }, [index, isErasing]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blinking speed

    return () => clearInterval(cursorBlink);
  }, []);

  const handleClick = () => {
    navigate("/about");
  };

  return (
<div className="home-container container mt-5">
  
      <div className="home-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1
              className="home-h1"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {staticText}
              {typedText}
              <span className="cursor">{showCursor ? "|" : ""}</span>
            </h1>
            <h2 className="home-h2" data-aos="fade-right" data-aos-delay="500">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="home-p" data-aos="fade-right" data-aos-delay="700">
              Passionate about creating beautiful, functional web applications
              and user experiences. I specialize in modern web technologies
              and love bringing creative ideas to life through code.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="900">
              <button className="start-btn primary-btn" onClick={handleClick}>
                View My Work <span className="arrow-icon">➜</span>
              </button>
              <button className="start-btn secondary-btn" onClick={() => navigate("/connect")}>
                Get In Touch
              </button>
            </div>
            <div className="social-links" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="social-link"><FaLinkedin /></a>
              <a href="#" className="social-link"><FaGithub /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left" data-aos-delay="600">
            <div className="profile-image-container">
              <div className="profile-image">
                {/* Replace with your actual profile image */}
                <div className="profile-placeholder">
                  <span><img src={profile} alt="Profile" /></span>
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <span><FaCode /></span>
                  <small>Web Dev</small>
                </div>
                <div className="floating-card card-2">
                  <span><FaPaintBrush /></span>
                  <small>Design</small>
                </div>
                <div className="floating-card card-3">
                  <span><FaBrain /></span>
                  <small>Problem Solving</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
