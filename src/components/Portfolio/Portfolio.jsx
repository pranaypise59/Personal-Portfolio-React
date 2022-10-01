import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import TicTacToe from "../../img/tic-tac-toe.png";
import fitness from "../../img/fitness.png";
// import HOC from "../../img/hoc.png";
import TrendNews from "../../img/trendnews.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://trendnews-react.netlify.app/"><img src={TrendNews} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://fitness-guru.netlify.app/"><img src={fitness} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://tic-tac-toe-webophilia.netlify.app/"><img src={TicTacToe} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
