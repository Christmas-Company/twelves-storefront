import React from 'react'
import Link from 'next/link'
import slide from "@assets/images/home-static-image/main-slide.jpg"
import RandomDotsWrapper from './RandomDotsWrapper'


const HomeSection = () => {

    
    return (
        <React.Fragment>
            <div style={{ position: 'relative' }}>
          
      <RandomDotsWrapper count={25} />
      {/* <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>Welcome to My Website</h1>
        {/* Add other homepage content here 
      </div> */}
    </div>
            {/* <section className="min-vh-100 kalles-categories-link-banner position-relative" style={{ backgroundImage: `url(${slide.src})` }}>
             
            
                <div className="position-absolute top-0 start-0 end-0 bottom-0 text-center py-5 text-white d-flex align-items-center justify-content-center">
                    <div className="p-3 p-md-0">
                        <h1 className="text-uppercase fs-60 fw-bold mb-4">UNLEASH THE MAGIC <br /> WITH TWELVES</h1>
                        <h3 className="fs-24 font-secondary mb-3">Create Sensational festive esxperiences that deliver dazzling commercial performance</h3>
                        <Link href="/shop" className="btn-dark fw-medium min-w-150 rounded-pill stretched-link">Shop
                            Now</Link>
                    </div>
                </div>
            </section> */}
        </React.Fragment>
    )
}
export default HomeSection