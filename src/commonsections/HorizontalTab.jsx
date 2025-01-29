import { React, useState } from "react";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      {/* Tab Titles */}
      <div className="tabs__nav">
        <div
          onClick={() => handleTabClick("tab1")}
          className="headline tabs__button tabs__button--active light-behind light-behind--dt-only"
        >
          <div className="tabs__light" data-light-el=""></div>
          Design
        </div>
        <div
          onClick={() => handleTabClick("tab2")}
          className="headline tabs__button"
        >
          Installation
        </div>
        <div
          onClick={() => handleTabClick("tab3")}
          className="headline tabs__button"
        >
          Maintenance
        </div>
        <div
          onClick={() => handleTabClick("tab4")}
          className="headline tabs__button"
        >
          Removal
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ flex: 1 }}>
        {activeTab === "tab1" && (
          <div style={{ display: "flex", gap: "2rem" }}>
            {/* Column 1 */}
            <div style={{ flex: 1, padding: "2rem" }}>
              <h2 className="subtitle tabs__title mt-5">
                We create bespoke experiences to suit your needs
              </h2>
              <div className="tabs__content">
                <p>
                  Our stunning commercial Christmas decor will make your
                  business a must-visit, Instagrammable destination that
                  attracts more people, makes them happier, and encourages them
                  to spend more.
                </p>
                <p>
                  From marvellous malls to revitalizing hospital wards, we rise
                  to any challenge and will craft an experience that’s sure to
                  inspire and delight.
                </p>
              </div>
              <ul className="tabs__links mb-5">
                <li className="tabs__links-item">
                  <button className="btn__wrapper btn__wrapper--dark">
                    <div className="btn btn--dark btn--hover">How it works</div>
                    <a
                      className="btn btn--dark"
                      data-button-el=""
                      href="https://twelves.8080.dev/how-it-works/"
                    >
                      How it works
                    </a>
                  </button>
                </li>
                <li className="tabs__links-item">
                  <button className="btn__wrapper btn__wrapper--dark">
                    <div className="btn btn--dark btn--hover">
                      Book a consultation
                    </div>
                    <a
                      className="btn btn--dark"
                      data-button-el=""
                      href="https://twelves.8080.dev/get-started/"
                    >
                      Book a consultation
                    </a>
                  </button>
                </li>
              </ul><br /><br />
            </div>
            {/* Column 2 */}
            <div style={{flex: 1}}>
                <img src="https://twelves.8080.dev/wp-content/uploads/2023/05/IfewfewMG.jpg" alt="" width="100%" height="100%"/>
            </div>
        </div>
        )}
        {activeTab === "tab2" && (
          <div style={{ display: "flex", gap: "2rem" }}>
            {/* Column 1 */}
            <div style={{ flex: 1, padding: "2rem" }}>
              <h2 className="subtitle tabs__title">
         
              </h2>
              <div className="tabs__content">
                <p>
                Our professional Christmas light installation team has expertise and passion in spades. We design bespoke lighting experiences that wow customers and boost staff morale. Then we combine thorough planning with the technical skills and creative ingenuity you need for a stress-free, professional-grade light installation that dazzles from day one.
                </p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              </div>
              {/* <ul className="tabs__links">
                <li className="tabs__links-item">
                  <button className="btn__wrapper btn__wrapper--dark">
                    <div className="btn btn--dark btn--hover">How it works</div>
                    <a
                      className="btn btn--dark"
                      data-button-el=""
                      href="https://twelves.8080.dev/how-it-works/"
                    >
                      How it works
                    </a>
                  </button>
                </li>
                <li className="tabs__links-item">
                  <button className="btn__wrapper btn__wrapper--dark">
                    <div className="btn btn--dark btn--hover">
                      Book a consultation
                    </div>
                    <a
                      className="btn btn--dark"
                      data-button-el=""
                      href="https://twelves.8080.dev/get-started/"
                    >
                      Book a consultation
                    </a>
                  </button>
                </li>
              </ul> */}
            </div>
            {/* Column 2 */}
            <div style={{flex: 1}}>
            <img src="https://twelves.8080.dev/wp-content/uploads/2023/04/IMG.png" alt="" width="100%" height="100%"/>
            </div>
        </div>
        )}
      {activeTab === 'tab3' && (
          <div style={{ display: "flex", gap: "2rem" }}>
            {/* Column 1 */}
            <div style={{ flex: 1, padding: "2rem" }}>
              <h2 className="subtitle tabs__title">
             
              </h2>
              <div className="tabs__content">
                <p>
                Our holiday lighting installations are there to be enjoyed by all, but interactive, selfie-worthy displays may experience wear and tear throughout the season. Our comprehensive maintenance service will keep that magic alive all season. Once assembled, we handle all necessary repairs for total peace of mind.                 </p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              </div>
              {/* <ul className="tabs__links">
                <li className="tabs__links-item">
                  <button className="btn__wrapper btn__wrapper--dark">
                    <div className="btn btn--dark btn--hover">How it works</div>
                    <a
                      className="btn btn--dark"
                      data-button-el=""
                      href="https://twelves.8080.dev/how-it-works/"
                    >
                      How it works
                    </a>
                  </button>
                </li>
                <li className="tabs__links-item">
                  <button className="btn__wrapper btn__wrapper--dark">
                    <div className="btn btn--dark btn--hover">
                      Book a consultation
                    </div>
                    <a
                      className="btn btn--dark"
                      data-button-el=""
                      href="https://twelves.8080.dev/get-started/"
                    >
                      Book a consultation
                    </a>
                  </button>
                </li>
              </ul> */}
            </div>
            {/* Column 2 */}
            <div style={{flex: 1}}>
            <img src="https://twelves.8080.dev/wp-content/uploads/2023/04/IMG.jpg" alt="" width="100%" height="100%"/>
            </div>
        </div>
        )}
         {activeTab === 'tab4' && (
          <div style={{ display: 'flex', gap: '2rem' }}>
            {/* Column 1 */}
            <div style={{ flex: 1, padding: "2rem" }}>
              <h2 className="subtitle tabs__title">
                
              </h2>
              <div className="tabs__content">
                <p>
                Once your commercial Christmas decorations have proved their value to your bottom line, we’ll remove them safely and efficiently so you can get on with the next promotion. But we’re ready when you are to start planning something even more exciting for next year. 
          
                </p>
              </div>
              {/* <ul className="tabs__links">
                <li className="tabs__links-item">
                  <button className="btn__wrapper btn__wrapper--dark">
                    <div className="btn btn--dark btn--hover">How it works</div>
                    <a
                      className="btn btn--dark"
                      data-button-el=""
                      href="https://twelves.8080.dev/how-it-works/"
                    >
                      How it works
                    </a>
                  </button>
                </li>
                <li className="tabs__links-item">
                  <button className="btn__wrapper btn__wrapper--dark">
                    <div className="btn btn--dark btn--hover">
                      Book a consultation
                    </div>
                    <a
                      className="btn btn--dark"
                      data-button-el=""
                      href="https://twelves.8080.dev/get-started/"
                    >
                      Book a consultation
                    </a>
                  </button>
                </li>
              </ul> */}
            </div>
            {/* Column 2 */}
            <div style={{flex: 1}}>
            <img src="https://twelves.8080.dev/wp-content/uploads/2023/05/Twelves_Web_Image_3-973x1440.jpg" alt="" width="100%" height="100%"/>
            </div>
        </div>
        )}
      </div>
    </div>
  )
};

export default TabsComponent;
