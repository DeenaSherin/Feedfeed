import React, { useEffect } from 'react';
import './FeedBackComponent.css'; 
import poorImage from '../images/poor.png';
import badImage from '../images/bad.png';
import okayImage from '../images/okay.png';
import goodImage from '../images/good.png';
import excellentImage from '../images/excellent.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const FeedbackComponent = () => {
  useEffect(() => {
    const setStarsAndEmojiColors = (index) => {
      const stars = document.getElementsByClassName("fas fa-star");
      const emoji = document.getElementById("emoji");

      // Check if stars[i] is defined before trying to access its style property
      for (let i = 0; i < stars.length; i++) {
        if (i <= index && stars[i]) {
          stars[i].style.color = "#ffd93b";
        } else if (stars[i]) {
          stars[i].style.color = "#e4e4e4";
        }
      }

      if (emoji) {
        emoji.style.transform = `translateX(${-100 * index}px)`;
      }
    };

    const stars = document.getElementsByClassName("fas fa-star");
    for (let i = 0; i < stars.length; i++) {
      if (stars[i]) {
        stars[i].addEventListener("click", () => setStarsAndEmojiColors(i));
      }
    }
  }, []); // Empty dependency array to run the effect once when component mounts

  return (

    <div className="container">
      <div className="feedbackbox">
        <div className="emoji">
          <div id="emoji">
            <img src={poorImage} alt="" />
            <img src={badImage} alt="" />
            <img src={okayImage} alt="" />
            <img src={goodImage} alt="" />
            <img src={excellentImage} alt="" />
          </div>
        </div>
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <br />
        <div className="type">
  <h3>Echo your essence</h3>
  <br />
  <input
    type="text"
    placeholder="Share your opinion...."
    style={{ width: '400px', height: '200px', textAlign: 'left' }}
  />
</div>

      </div>
    </div>
  );
};

export default FeedbackComponent;
