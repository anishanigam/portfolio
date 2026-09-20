import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Design Lead</h4>
                <h5>College Festivals (Culrav & Gnosiomania)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Directed the visual identity for major university festivals.
              Designed festival logos (including Culrav 2025), official event posters,
              competition flyers, photobooth backdrops, and promotional banners.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Visual & Graphic Designer</h4>
                <h5>TEDx MNNIT</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Spearheaded complete visual identity and campaign creatives.
              Designed keynote speaker reveal posters (including Dr. Vijender Chauhan),
              stage backdrops, credentials, and digital launch collaterals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic & Apparel Designer</h4>
                <h5>Freelance & Independent Studio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Crafting custom merchandise, anime & streetwear graphic tees,
              commercial brand identities, and high-impact social media creatives
              for brands, events, and apparel labels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
