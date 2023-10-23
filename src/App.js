function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            <li>
              <a href="#home" className="nav-link"> home </a>
            </li>

            <li>
              <a href="#about" className="nav-link"> about </a>
            </li>

            <li>
              <a href="#services" className="nav-link"> services </a>
            </li>

            <li>
              <a href="#tours" className="nav-link"> tours</a>
            </li>
          </ul>

          <ul className="nav-icons">
            <li>
              <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-squarespace"></i
              ></a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a href="#tours" className="btn hero-btn">explore tours</a>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-title">
          <h2>about <span>us</span></h2>
        </div>

        <div className="section-center about-center">
          <div className="about-img">
            <img
              src="./images/about.jpeg"
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
              quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
              unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
              quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
              unde dolor?
            </p>
            <a href="#" className="btn">read more</a>
          </article>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-title">
          <h2>our <span>services</span></h2>
        </div>
        <div className="section-center services-center">
          <article className="service">
            <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
            <div className="service-info">
              <h4 className="service-title">saving money</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
            <div className="service-info">
              <h4 className="service-title">endless hiking</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
            <div className="service-info">
              <h4 className="service-title">amazing comfort</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="tours">
        <div className="section-title">
          <h2>featured <span>tours</span></h2>
        </div>

        <div className="section-center featured-center">
          {/* ... (tour cards) */}
        </div>
      </section>

      <footer className="section footer">
        <ul className="footer-links">
          <li>
            <a href="#home" className="footer-link">home</a>
          </li>
          <li>
            <a href="#about" className="footer-link">about</a>
          </li>
          <li>
            <a href="#services" className="footer-link">services</a>
          </li>
          <li>
            <a href="#featured" className="footer-link">featured</a>
          </li>
        </ul>
        <ul className="footer-icons">
          {/* ... (footer icons) */}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    
    </>
  );
}

export default App;
