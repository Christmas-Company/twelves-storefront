import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginModal from '@src/components/Headers/LoginModal'
import logo from '@assets/images/svg/kalles.svg'
import { Col, Row } from "react-bootstrap";
import MobileHeader from "@src/components/Headers/MobileHeader";
import ShoppingCardModal from "@src/commonsections/ShoppingCardModal";
import SearchModal2 from "../SearchModal2";

const LayoutHeader6 = () => {
    const [loginShow, setLoginShow] = useState(false);
    const [headerShow, setHeaderShow] = useState(false)
    const [shoppingShow, setShoppingShow] = useState(false);
    const [searchShow, setSearchShow] = useState(false);

    const handleHeader = () => {
        setHeaderShow(true)
        setLoginShow(false)
    }
    const handleLoginShow = () => {
        setLoginShow(true);
        setHeaderShow(false);
    }
    const handleLoginClose = () => setLoginShow(false);
    const handleHeaderClose = () => setHeaderShow(false)
    const handleShoppingClose = () => setShoppingShow(false);
    const handleShoppingShow = () => setShoppingShow(true);
    const handleClose = () => setSearchShow(false);
    const handleShow = () => setSearchShow(true);

    return (
        <React.Fragment>
            <div id="kalles-section-header_top" className="{{ class-name }}">
                <div className="h__top d-flex align-items-center">
                    <div className="container-fluid">
                        <Row className="py-2">
                            <Col md={6} lg={4}>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <p className="mb-0"><i className="pegk pe-7s-call fs-14 me-1 align-middle"></i> +01 23456789</p>
                                    <p className="mb-0 ms-2"><i className="pe-7s-mail pegk fs-14 me-1 align-middle"></i> Kalles@domain.com
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="header-text text-center fs-12 py-1 py-md-0">
                                Summer sale discount off <span className="cr">50%</span>! <Link href="/shop" className="text-reset">Shop
                                    Now</Link>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className="navbar-custom d-flex align-items-center justify-content-between p-3">
                        <Link className="d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={handleHeader}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                <rect width="30" height="1.5"></rect>
                                <rect y="7" width="20" height="1.5"></rect>
                                <rect y="14" width="30" height="1.5"></rect>
                            </svg>
                        </Link>
                        <div className="d-none d-lg-block nt-social">
                            <Link href="#" className="facebook text-black fs-14 mx-1">
                                <i className="facl facl-facebook"></i>
                            </Link>
                            <Link href="#" className="twitter text-black fs-14 mx-1">&nbsp;
                                <i className="facl facl-twitter"></i>
                            </Link>
                            <Link href="#" className="instagram text-black fs-14 mx-1">&nbsp;
                                <i className="facl facl-instagram"></i>
                            </Link>
                            <Link href="#" className="linkedin text-black fs-14 mx-1">&nbsp;
                                <i className="facl facl-linkedin"></i>
                            </Link>
                            <Link href="#" className="pinterest text-black fs-14 mx-1">&nbsp;
                                <i className="facl facl-pinterest"></i>
                            </Link>
                        </div>

                        <Link href="#!">
                        <svg width="136" height="40" viewBox="0 0 136 40" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M47.577 10.8404H54.2095V8.13027H47.577V2.70855H58.6086V0H44.8345V22H58.6086V19.2915H47.577V10.8404Z" fill="#171440"></path>
            <path d="M97.6077 10.8404H104.239V8.13027H97.6077V2.70855H108.639V0H94.8652V22H108.639V19.2915H97.6077V10.8404Z" fill="#171440"></path>
            <path d="M64.4236 0H61.6812V22H75.392V19.2699H64.4236V0Z" fill="#171440"></path>
            <path d="M122.15 13.7679C121.863 13.066 121.422 12.392 120.826 11.7426C120.231 11.0948 119.444 10.4454 118.466 9.79604L116.808 8.72866C115.894 8.12248 115.261 7.57799 114.911 7.0952C114.561 6.61396 114.385 6.05868 114.385 5.4309C114.385 4.51005 114.761 3.79281 115.517 3.28072C116.271 2.76862 117.308 2.51103 118.625 2.51103C119.071 2.51103 119.512 2.53263 119.949 2.57428C120.384 2.61592 120.751 2.66837 121.048 2.73161V0.220493C120.879 0.178847 120.66 0.141828 120.394 0.110979C120.128 0.0801299 119.847 0.0539082 119.549 0.0323139C119.251 0.012262 118.954 0.00146484 118.656 0.00146484C116.446 0.00146484 114.692 0.487337 113.395 1.46217C112.098 2.43545 111.45 3.76968 111.45 5.46483C111.45 6.51216 111.71 7.45305 112.23 8.2906C112.752 9.12816 113.595 9.92406 114.764 10.6768L116.39 11.7765C117.581 12.5509 118.42 13.2573 118.909 13.8959C119.398 14.5345 119.642 15.2609 119.642 16.0784C119.642 17.1458 119.227 17.9772 118.398 18.5741C117.57 19.1711 116.443 19.4688 115.019 19.4688C114.508 19.4688 113.945 19.4317 113.328 19.3592C112.711 19.2867 112.181 19.1973 111.734 19.0924V21.6051C112.138 21.7099 112.664 21.7994 113.311 21.8719C113.959 21.9444 114.57 21.9814 115.145 21.9814C117.462 21.9814 119.279 21.4524 120.598 20.3958C121.915 19.3392 122.575 17.8893 122.575 16.0476C122.575 15.2316 122.432 14.4728 122.145 13.7709L122.15 13.7679Z" fill="#171440"></path>
            <path d="M81.1563 13.7371C79.2097 6.3549 75.5603 1.14758 71.189 0L70.5195 2.67153C72.6697 3.23607 74.7736 5.38316 76.441 8.71794C78.204 12.244 79.4025 16.9608 79.8128 22H82.4982C82.9085 16.9608 84.107 12.244 85.87 8.71794C87.539 5.38316 89.6413 3.23607 91.7915 2.67153L91.1221 0C86.7508 1.14604 83.1013 6.3549 81.1547 13.7371H81.1563Z" fill="#171440"></path>
            <path d="M39.0549 0V18.7809C35.2173 17.7259 32.3375 14.914 31.8347 11.5684L31.3997 8.67321H29.5935L29.1585 11.5684C28.6557 14.914 25.7759 17.7259 21.9383 18.7809V2.52962H21.9398V0H0V2.70855H6.72818V22H9.47066V2.70855H19.2344V22L20.7784 21.7794C25.0217 21.1748 28.6048 18.8318 30.4989 15.6605C32.393 18.8318 35.9762 21.1763 40.2194 21.7794L41.7634 22V0H39.0564H39.0549Z" fill="#171440"></path>
          
</svg>
                        </Link>
                        <div className="topbar-toolbar d-flex align-items-center gap-3">
                            <Link href="#!" role="presentation" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={handleShow}>
                                <i className="iccl iccl-search"></i>
                            </Link>
                            <Link className="d-none d-lg-block" data-bs-toggle="offcanvas" href="#accountOffcanvas" aria-controls="accountOffcanvas" onClick={handleLoginShow}><i className="iccl iccl-user"></i></Link>
                            <Link className="d-none d-lg-block" href="/wishlist"><i className="iccl iccl-heart" ></i><span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" >3</span></Link>
                            <Link data-bs-toggle="offcanvas" href="#shoppingCartOffcanvas" aria-controls="shoppingCartOffcanvas"><i className="iccl iccl-cart" onClick={handleShoppingShow}></i><span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">5</span></Link>
                            <Link className="d-none d-lg-block rotate-180" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={handleHeader}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                    <rect width="30" height="1.5"></rect>
                                    <rect y="7" width="20" height="1.5"></rect>
                                    <rect y="14" width="30" height="1.5"></rect>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backdrop-shadow d-none"></div>
            <SearchModal2 show={searchShow} handleClose={handleClose} />
            <LoginModal loginShow={loginShow} handleLoginClose={handleLoginClose} />
            <MobileHeader headerShow={headerShow}
                handleHeaderClose={handleHeaderClose}
                loginShow={loginShow}
                handleLoginClose={handleLoginClose}
                handleLoginShow={handleLoginShow} />
            <ShoppingCardModal shoppingShow={shoppingShow} handleShoppingClose={handleShoppingClose} />

        </React.Fragment>
    )
}
export default LayoutHeader6