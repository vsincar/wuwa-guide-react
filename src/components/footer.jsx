import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-links-section">
              <h3>Official Links</h3>
              <ul>
                <li>
                  <a
                    href="https://wutheringwaves.kurogames.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/wutheringwaves"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@WutheringWaves"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube Channel
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Wuthering_Waves"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h3>Game Resources</h3>
              <ul>
                <li>
                  <a href="#">Game Guides</a>
                </li>
                <li>
                  <a href="#">Character Database</a>
                </li>
                <li>
                  <a href="#">Weapon Information</a>
                </li>
                <li>
                  <a href="#">Tier Lists</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h3>Community</h3>
              <ul>
                <li>
                  <a href="#">Forum</a>
                </li>
                <li>
                  <a href="#">Fan Art</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="social-icons">
            <a href="#" aria-label="Discord">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" aria-label="X">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Reddit">
              <i className="fab fa-reddit"></i>
            </a>
          </div>

          <div className="footer-credits">
            <p>
              Developed by{" "}
              <a
                className="Veysel"
                href="https://veyselsincar.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Veysel Sincar
              </a>
            </p>
            <p>© 2025 Wuthering Waves. All rights reserved.</p>
            <p className="text-sm mt-2">Not affiliated with Kuro Games.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
