import React from 'react'
import Ourproduct from '@src/commonsections/Ourproduct'
import LatestBlogs from '@src/commonsections/LatestBlogs'
import FollowInstagram from '@src/commonsections/FollowInstagram'
import HomeSection from '@pages/home-static-image/HomeSection'
import TrendingCard from '@src/commonsections/TrendingCard';
import LookBookCard from '@src/commonsections/LookBookCard';
import TabsComponent from '@src/commonsections/HorizontalTab'
import SellerCard from '@src/commonsections/SellerCard';
import Shipping from '@src/commonsections/Shipping';
import FooterPage from '@src/components/Footer';
import Header2 from '@src/components/Header2'
import TopBanner from '@src/components/Headers/TopBanner'
import PopupPage from '@src/components/Popup'
import HeadTitle from '@src/commonsections/HeadTitle'
import CatSection from '@pages/main-index/CatSection';
import MainBanner from './MainBanner'
import AboutFounder from './AboutFounder'
import ResponsiveFooter from '@src/components/ResponsiveFooter'


const HomeStaticImage = () => {

    return (
        <React.Fragment>
            <HeadTitle title="Home Static Image"/>
            {/* top banner */}
            {/* {/* <TopBanner /> */} 

            {/* header */}
            <Header2 />

            <div>
                <HomeSection />

<br />
<AboutFounder />

                 {/* cat-section */}
                 <CatSection />

{/* trending - card */}
<TrendingCard />
<TabsComponent />
{/* lookbook - card */}
<LookBookCard />

{/* best seller */}
<SellerCard />

{/* latest - blog */}
<LatestBlogs />

{/* instagram */}
<FollowInstagram />

{/* Shipping */}
<Shipping />

{/* Footer */}
<FooterPage />
<ResponsiveFooter />
{/* <PopupPage /> */}


            </div>
        </React.Fragment>
    )
}

export default HomeStaticImage