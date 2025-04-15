import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <h2 className="section-heading">IEEE GTBIT Newsletter</h2>
      <div className="underline"></div>

      <p className="section-description">
        Stay updated with our latest news, research articles, and events. Subscribe to our newsletter to never miss an update!
      </p>

      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" className="email-input" />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
