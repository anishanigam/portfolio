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
                <h5>Media House Of MNNIT</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led the design team and directed visual content for Media House MNNIT.
              Created event posters, social media creatives, promotional banners, publication
              graphics, and digital assets for major university events.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GDG Media Lead</h4>
                <h5>Student Google Developer Group</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managed the creative design for GDG MNNIT's technical events and community activities.Developed engaging event visuals, digital campaigns, social media content, and promotional creatives across workshops, sessions, and hackathons.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
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
