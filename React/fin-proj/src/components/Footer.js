import React from 'react';

const Footer = () => (
  <footer>
    <section className="services">
      <div className="service">
        <h4>Free Delivery</h4>
        <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
      </div>
      <div className="service">
        <h4>Sales & Discounts</h4>
        <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
      </div>
      <div className="service">
        <h4>Quality Assurance</h4>
        <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
      </div>
    </section>
    <section className="testimonial-subscribe">
      <div className="testimonial">
        <img src="testimonial.jpg" alt="Testimonial" />
        <blockquote>
          <p>"Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum"</p>
          <footer>- Customer</footer>
        </blockquote>
      </div>
      <div className="subscribe">
        <h4>Subscribe</h4>
        <p>FOR OUR NEWSLETTER AND PROMOTION</p>
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </section>
    <div className="footer-bottom">
      <p>&copy; 2022 Brand. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer;
