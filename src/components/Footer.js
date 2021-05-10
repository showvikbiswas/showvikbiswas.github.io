import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">© Showvik Biswas | 2021</small>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="http://facebook.com/showvikk"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>

            <a
              class="social-icon-link youtube"
              href="http://www.youtube.com/channel/UC3LJZuB3eYt6-gfJQpjVYdQ"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              class="social-icon-link github"
              href="http://www.github.com/showvikbiswas"
              target="_blank"
              aria-label="GitHub"
            >
              <i class="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
