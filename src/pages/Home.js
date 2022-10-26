import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="headerHome">
      {/* Banner Section Start */}
      <div className="overlay" />
      <div className="home-slide-item-content">
        <div className="item-content-wraper">
          <div className="item-content-title">Venom: 2</div>
          <div className="movie-infos  delay-2">
            <div className="movie-info">
              <i className="far fa-thumbs-up" />
              <span>9.2</span>
            </div>
            <div className="movie-info">
              <i className="fas fa-clock" />
              <span>1h 37m</span>
            </div>
            <div className="movie-info">
              <span>HD</span>
            </div>
            <div className="movie-info">
              <span>13+</span>
            </div>
          </div>
          <div className="item-content-description delay-4">
          Eddie Brock tries to revive his failing career by interviewing a serial killer,
           Cletus Kasady, who is on death row. When Carnage gains control over Cletus's body,
            he escapes from the prison.
          </div>
          <div className="item-action  delay-6">
            <a href="https://ww2.soap2dayhd.co/film/venom-let-there-be-carnage-1630851645/" className="btn btn-hover">
              <i className="fas fa-play" />
              <span>Watch now</span>
            </a>
          </div>
        </div>
      </div>
      {/* Banner Section End */}
    </section>
  );
};

export default Home;
