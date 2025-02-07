import React from "react";
import WomenColting from "@src/commonsections/WomenCloting";
import FilterTab from "./FilterTab";
import ShopNavbar from "@src/commonsections/ShopNavbar";
import FooterPage from "@src/components/Footer";
import TopBanner from "@src/components/Headers/TopBanner";
import Header from "@src/components/Header2";
import PopupPage from "@src/components/Popup";
import Link from "next/link";

const Shop = () => {
    return (
        <React.Fragment>
            {/* <TopBanner /> */}

            {/* header */}
            <Header />

            <ShopNavbar />

            <WomenColting />

            {/* filterTab */}

            <FilterTab />
            <div className="filter-pagination">
                <ul className="pagination py-4 d-flex justify-content-center">
                    <li className="active"><Link href="#" className="text-danger">1</Link></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">Next</a></li>
                </ul>
            </div>
            <FooterPage />
            {/* <PopupPage /> */}
        </React.Fragment>
    )
}
export default Shop