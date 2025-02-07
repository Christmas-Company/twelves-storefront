import React from "react";
import PortfolioSection from "@src/commonsections/PortfolioSection";
import PortfolioTab from "@src/commonsections/PortfolioTab";
import FooterPage from "@src/components/Footer";
import TopBanner from "@src/components/Headers/TopBanner";
import Header from "@src/components/Header2";
import PopupPage from "@src/components/Popup";
import HeadTitle from "@src/commonsections/HeadTitle";

const Portfolio4Columns = () => {
    return (
        <React.Fragment>
            <HeadTitle title="Home Default" />
            {/* <TopBanner /> */}
            {/* header */}
            <Header />
            <PortfolioSection />
            <PortfolioTab />
            <FooterPage />
            {/* <PopupPage /> */}
        </React.Fragment>
    )
}
export default Portfolio4Columns