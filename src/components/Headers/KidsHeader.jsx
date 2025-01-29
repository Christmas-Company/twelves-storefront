import React, { useState, useEffect, useRef } from "react";
import { country2 } from "@src/common/Header/mobileHeader";
import Image from "next/image";
import Link from "next/link";
import { HomePage1, HomePage2, HeaderLayout, Features, ProductLayout, ProductSwatch, ProductFeatures, LayoutHeaderDataCatogory, Lookbook, Blog, ShopPage2, ShopFeatures2, ProductDetail2 } from "@src/common/Header/headerkids";
import usd from '@assets/images/svg/usd.svg'
import { Col, Dropdown, Row } from "react-bootstrap";
import logo from '@assets/images/svg/kalles.svg'
import ShoppingCardModal from "@src/commonsections/ShoppingCardModal";
import LoginModal from "@src/components/Headers/LoginModal";
import MobileHeader from "@src/components/Headers/MobileHeader";
import cat1 from '@assets/images/home-kids/megamenu-cat-01.jpg'
import cat2 from '@assets/images/home-kids/megamenu-cat-02.jpg'
import SearchModal from "./SearchModal";

const KidsHeader = () => {

    const dropdownref = useRef(null)
    const [showw, setShoww] = useState(null)
    const [shoppingShow, setShoppingShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);
    const [headerShow, setHeaderShow] = useState(false)
    const [searchShow, setSearchShow] = useState(false);

    const handleMenuClick = (id) => {
        if (showw === id) {
            setShoww(null)
        } else {
            setShoww(id)
        }
    }
    const handleClickOutSide = (event) => {
        if (dropdownref.current &&
            !event.target.closest('.demo')
        ) {
            setShoww(false)
        }
    }
    useEffect(() => {
        window.addEventListener('click', handleClickOutSide)
        return () => {
            window.removeEventListener('click', handleClickOutSide)
        }
    }, [])
    const handleShoppingClose = () => setShoppingShow(false);
    const handleShoppingShow = () => setShoppingShow(true);
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
    const handleClose = () => setSearchShow(false);
    const handleShow = () => setSearchShow(true);

    return (
        <React.Fragment>
            <div id="kalles-section-header_top ">
                <div className="h__top text-white d-flex align-items-center bg-pink2">
                    <div className="container">
                        <Row className="align-items-center justify-content-center py-3 py-xl-0">
                            <Col md={5} lg={3} className="col-12">
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <p className="mb-0"><i className="pegk pe-7s-call fs-14 me-1 align-middle"></i> +01 23456789</p>
                                    <p className="mb-0 ms-2"><i className="pe-7s-mail pegk fs-14 me-1 align-middle"></i> Kalles@domain.com
                                    </p>
                                </div>
                            </Col>
                            <Col md={5} lg={6} className="col-12">
                                <div className="header-text text-center fs-12 py-1 py-lg-0">
                                    Summer sale discount off <span className="fw-bold">50% </span> <Link href="/shop" className="text-reset">Shop Now</Link>
                                </div>
                            </Col>
                            <Col md={2} lg={3} className="col-12">
                                <div className="dropdown text-md-end text-center position-relative">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" id="dropdown-currency" className="fs-12 text-reset currency-button p-0">
                                            <Image src={usd} alt="" height="12" className="me-1" /> USD <i className="facl facl-angle-down ms-1"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="p-3 dropdown-currency">
                                            {
                                                country2.map((item, index) => (
                                                    <Dropdown.Item key={index} as={Link} href="#!">
                                                        <Image src={item.image} alt="" height="12" className="me-1" />
                                                        {item.name}
                                                    </Dropdown.Item>
                                                ))
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-custom pt-4 pb-0 d-block align-items-center">
                    <div className="container">
                        <Link className="d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={handleHeader}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                <rect width="30" height="1.5"></rect>
                                <rect y="7" width="20" height="1.5"></rect>
                                <rect y="14" width="30" height="1.5"></rect>
                            </svg>
                        </Link>
                        <Link className="navbar-brand d-lg-none" href="#">  <svg width="136" height="40" viewBox="0 0 136 40" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M47.577 10.8404H54.2095V8.13027H47.577V2.70855H58.6086V0H44.8345V22H58.6086V19.2915H47.577V10.8404Z" fill="#171440"></path>
            <path d="M97.6077 10.8404H104.239V8.13027H97.6077V2.70855H108.639V0H94.8652V22H108.639V19.2915H97.6077V10.8404Z" fill="#171440"></path>
            <path d="M64.4236 0H61.6812V22H75.392V19.2699H64.4236V0Z" fill="#171440"></path>
            <path d="M122.15 13.7679C121.863 13.066 121.422 12.392 120.826 11.7426C120.231 11.0948 119.444 10.4454 118.466 9.79604L116.808 8.72866C115.894 8.12248 115.261 7.57799 114.911 7.0952C114.561 6.61396 114.385 6.05868 114.385 5.4309C114.385 4.51005 114.761 3.79281 115.517 3.28072C116.271 2.76862 117.308 2.51103 118.625 2.51103C119.071 2.51103 119.512 2.53263 119.949 2.57428C120.384 2.61592 120.751 2.66837 121.048 2.73161V0.220493C120.879 0.178847 120.66 0.141828 120.394 0.110979C120.128 0.0801299 119.847 0.0539082 119.549 0.0323139C119.251 0.012262 118.954 0.00146484 118.656 0.00146484C116.446 0.00146484 114.692 0.487337 113.395 1.46217C112.098 2.43545 111.45 3.76968 111.45 5.46483C111.45 6.51216 111.71 7.45305 112.23 8.2906C112.752 9.12816 113.595 9.92406 114.764 10.6768L116.39 11.7765C117.581 12.5509 118.42 13.2573 118.909 13.8959C119.398 14.5345 119.642 15.2609 119.642 16.0784C119.642 17.1458 119.227 17.9772 118.398 18.5741C117.57 19.1711 116.443 19.4688 115.019 19.4688C114.508 19.4688 113.945 19.4317 113.328 19.3592C112.711 19.2867 112.181 19.1973 111.734 19.0924V21.6051C112.138 21.7099 112.664 21.7994 113.311 21.8719C113.959 21.9444 114.57 21.9814 115.145 21.9814C117.462 21.9814 119.279 21.4524 120.598 20.3958C121.915 19.3392 122.575 17.8893 122.575 16.0476C122.575 15.2316 122.432 14.4728 122.145 13.7709L122.15 13.7679Z" fill="#171440"></path>
            <path d="M81.1563 13.7371C79.2097 6.3549 75.5603 1.14758 71.189 0L70.5195 2.67153C72.6697 3.23607 74.7736 5.38316 76.441 8.71794C78.204 12.244 79.4025 16.9608 79.8128 22H82.4982C82.9085 16.9608 84.107 12.244 85.87 8.71794C87.539 5.38316 89.6413 3.23607 91.7915 2.67153L91.1221 0C86.7508 1.14604 83.1013 6.3549 81.1547 13.7371H81.1563Z" fill="#171440"></path>
            <path d="M39.0549 0V18.7809C35.2173 17.7259 32.3375 14.914 31.8347 11.5684L31.3997 8.67321H29.5935L29.1585 11.5684C28.6557 14.914 25.7759 17.7259 21.9383 18.7809V2.52962H21.9398V0H0V2.70855H6.72818V22H9.47066V2.70855H19.2344V22L20.7784 21.7794C25.0217 21.1748 28.6048 18.8318 30.4989 15.6605C32.393 18.8318 35.9762 21.1763 40.2194 21.7794L41.7634 22V0H39.0564H39.0549Z" fill="#171440"></path>
          
</svg></Link>
                        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                            <div className="d-none d-lg-block w-100">
                                <Row>
                                    <div className="col-3">
                                        <Link className="navbar-brand" href="#">  <svg width="136" height="40" viewBox="0 0 136 40" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M47.577 10.8404H54.2095V8.13027H47.577V2.70855H58.6086V0H44.8345V22H58.6086V19.2915H47.577V10.8404Z" fill="#171440"></path>
            <path d="M97.6077 10.8404H104.239V8.13027H97.6077V2.70855H108.639V0H94.8652V22H108.639V19.2915H97.6077V10.8404Z" fill="#171440"></path>
            <path d="M64.4236 0H61.6812V22H75.392V19.2699H64.4236V0Z" fill="#171440"></path>
            <path d="M122.15 13.7679C121.863 13.066 121.422 12.392 120.826 11.7426C120.231 11.0948 119.444 10.4454 118.466 9.79604L116.808 8.72866C115.894 8.12248 115.261 7.57799 114.911 7.0952C114.561 6.61396 114.385 6.05868 114.385 5.4309C114.385 4.51005 114.761 3.79281 115.517 3.28072C116.271 2.76862 117.308 2.51103 118.625 2.51103C119.071 2.51103 119.512 2.53263 119.949 2.57428C120.384 2.61592 120.751 2.66837 121.048 2.73161V0.220493C120.879 0.178847 120.66 0.141828 120.394 0.110979C120.128 0.0801299 119.847 0.0539082 119.549 0.0323139C119.251 0.012262 118.954 0.00146484 118.656 0.00146484C116.446 0.00146484 114.692 0.487337 113.395 1.46217C112.098 2.43545 111.45 3.76968 111.45 5.46483C111.45 6.51216 111.71 7.45305 112.23 8.2906C112.752 9.12816 113.595 9.92406 114.764 10.6768L116.39 11.7765C117.581 12.5509 118.42 13.2573 118.909 13.8959C119.398 14.5345 119.642 15.2609 119.642 16.0784C119.642 17.1458 119.227 17.9772 118.398 18.5741C117.57 19.1711 116.443 19.4688 115.019 19.4688C114.508 19.4688 113.945 19.4317 113.328 19.3592C112.711 19.2867 112.181 19.1973 111.734 19.0924V21.6051C112.138 21.7099 112.664 21.7994 113.311 21.8719C113.959 21.9444 114.57 21.9814 115.145 21.9814C117.462 21.9814 119.279 21.4524 120.598 20.3958C121.915 19.3392 122.575 17.8893 122.575 16.0476C122.575 15.2316 122.432 14.4728 122.145 13.7709L122.15 13.7679Z" fill="#171440"></path>
            <path d="M81.1563 13.7371C79.2097 6.3549 75.5603 1.14758 71.189 0L70.5195 2.67153C72.6697 3.23607 74.7736 5.38316 76.441 8.71794C78.204 12.244 79.4025 16.9608 79.8128 22H82.4982C82.9085 16.9608 84.107 12.244 85.87 8.71794C87.539 5.38316 89.6413 3.23607 91.7915 2.67153L91.1221 0C86.7508 1.14604 83.1013 6.3549 81.1547 13.7371H81.1563Z" fill="#171440"></path>
            <path d="M39.0549 0V18.7809C35.2173 17.7259 32.3375 14.914 31.8347 11.5684L31.3997 8.67321H29.5935L29.1585 11.5684C28.6557 14.914 25.7759 17.7259 21.9383 18.7809V2.52962H21.9398V0H0V2.70855H6.72818V22H9.47066V2.70855H19.2344V22L20.7784 21.7794C25.0217 21.1748 28.6048 18.8318 30.4989 15.6605C32.393 18.8318 35.9762 21.1763 40.2194 21.7794L41.7634 22V0H39.0564H39.0549Z" fill="#171440"></path>
          
</svg></Link>
                                    </div>
                                    <div className="col-6 mb-lg-3">
                                        <form action="#" method="get" className="electrict-input" role="search">
                                            <div className="footer-subscribe position-relative electrict-input ps-2">
                                                <input type="text" name="email" placeholder="I'm shopping for..." className="ps-4 input-text input-search form-control w-100 rounded-pill" readOnly />
                                                <button type="submit" className="btn btn-pink2 position-absolute search-btn rounded-pill top-0 end-0">
                                                    <span>Search</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-2 col-3">
                                        <div className="topbar-toolbar d-flex justify-content-end align-items-center gap-3">
                                            <Link className="main_link_primary" data-bs-toggle="offcanvas" href="#searchOffcanvas" aria-controls="searchOffcanvas" onClick={handleLoginShow}><i className="iccl iccl-user"></i></Link>
                                            <Link className="main_link_primary d-md-block d-none" href="#!">
                                                <i className="iccl iccl-heart"></i>
                                                <span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">3</span>
                                            </Link>
                                            <Link className="main_link_primary" data-bs-toggle="offcanvas" href="#shoppingCartOffcanvas" aria-controls="shoppingCartOffcanvas" onClick={handleShoppingShow}><i className="iccl iccl-cart"></i><span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">5</span></Link>
                                        </div>
                                    </div>
                                </Row>
                            </div>

                        </div>
                        <div className="topbar-toolbar d-flex align-items-center gap-3 d-lg-none">
                            <Link className="main_link_primary" data-bs-toggle="offcanvas" href="#searchOffcanvas" aria-controls="searchOffcanvas" onClick={handleShow}><i className="iccl iccl-search"></i></Link>
                            <Link className="main_link_primary" data-bs-toggle="offcanvas" href="#shoppingCartOffcanvas" aria-controls="shoppingCartOffcanvas" onClick={handleShoppingShow}><i className="iccl iccl-cart"></i><span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">5</span></Link>
                        </div>
                    </div>

                    <div className="bg-blue-dark text-white d-none d-lg-block demo" ref={dropdownref}>
                        <div className="container">

                            <div className="d-flex justify-content-between">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item dropdown dropdown-mega-lg">
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                as="a"
                                                className="nav-link text-uppercase text-white d-flex align-items-center fw-medium bg-pink2"
                                                href="#"
                                                id="dropdown-shop-by-category"
                                                role="button"
                                                style={{ height: "50px" }}
                                            >
                                                <div className="nav-link text-uppercase text-white align-items-center fw-medium">
                                                    <i className="las la-bars mr__5 fs-18 me-1"></i> Shop by category
                                                </div>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="dropdown-sub-column p-2">
                                                {LayoutHeaderDataCatogory.map((item, index) => (
                                                    <Dropdown.Item as="li" key={index}>
                                                        <Link href="/home-lookbook" className="border-bottom px-0 py-2">
                                                            <i className={item.icon}></i> {item.label}
                                                        </Link>
                                                    </Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-xxl nav-electric-item">
                                        <Link className={`nav-link text-white ${showw === 1 ? 'show' : ''}`} style={{ height: "50px" }} href="#" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleMenuClick(1)}>
                                            Demo
                                        </Link>
                                        <div className={`dropdown-menu ${showw === 1 ? 'show' : ''}`}>
                                            <Row>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="#!" className="dropdown-menu-title">Home Pages</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                HomePage1.map((item, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted position-relative d-inline-flex" href={item.link}>{item.label}
                                                                                <span className={item.badgeColor}>{item.badge}</span>
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="#" className="dropdown-menu-title">Home
                                                            Pages</Link>
                                                        <ul className="sub-column-menu">

                                                            {
                                                                HomePage2.map((item, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted position-relative d-inline-flex" href={item.link}>{item.label}<span className={item.badgeColor}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <a href="/home-default" className="dropdown-menu-title">Header
                                                            Layouts</a>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                HeaderLayout.map((item, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted" href={item.link}>{item.label}</Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <a href="#!" className="dropdown-menu-title">FEATURES</a>
                                                        <ul className="sub-column-menu">

                                                            {
                                                                Features.map((item, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted position-relative d-inline-flex" href={item.link}>{item.label}
                                                                                <span className={item.badgeColor} style={item.badgeStyle}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-xxl nav-electric-item">
                                        <Link className={`nav-link position-relative text-white ${showw === 2 ? 'show' : ''}`} style={{ height: "50px" }} href="#" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleMenuClick(2)}>
                                            Shop
                                        </Link>
                                        <div className={`dropdown-menu p-3 ${showw === 2 ? 'show' : ''}`}>
                                            <Row className="g-0">
                                                <Col lg={5} >
                                                    <Row className="g-0">
                                                        <Col lg={6}>
                                                            <div className="dropdown-sub-column-item">
                                                                <Link href="/shop-filter-sidebar" className="dropdown-menu-title">SHOP PAGES</Link>
                                                                <ul className="sub-column-menu">

                                                                    {ShopPage2.map((item, index) => {
                                                                        return (
                                                                            <li key={index}>
                                                                                <Link className="text-muted" href={item.link}>{item.label}</Link>
                                                                            </li>
                                                                        )
                                                                    })}

                                                                </ul>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="dropdown-sub-column-item">

                                                                <Link href="/shop-filter-sidebar" className="dropdown-menu-title">FEATURES</Link>
                                                                <ul className="sub-column-menu">
                                                                    {
                                                                        ShopFeatures2.map((item, index) => {
                                                                            return (
                                                                                <li key={index}><a className="text-muted position-relative d-inline-flex" href={item.link}>{item.label}
                                                                                    <span className={item.badgeColor}>{item.badge}</span></a></li>
                                                                            )
                                                                        })
                                                                    }

                                                                </ul>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={7} className="p-4">
                                                    <Row className="g-0">
                                                        <Col lg={6} className="p-0">
                                                            <div className="dropdown-sub-column-item position-relative cat_grid_item overflow-hidden h-100">
                                                                <Image src={cat1} alt="" className="img-fluid" />
                                                                <Link href="/shop-left-sidebar" className="btn bg-white px-5 fw-medium mb-4 position-absolute bottom-0 start-50 translate-middle-x" style={{ whiteSpace: "nowrap" }}>
                                                                    Girls Fashion
                                                                </Link>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6} className="cat-section p-0">
                                                            <div className="dropdown-sub-column-item position-relative cat_grid_item overflow-hidden h-100">
                                                                <Image src={cat2} alt="" className="img-fluid" />
                                                                <Link href="/shop-left-sidebar" className="btn bg-white px-5 fw-medium mb-4 position-absolute bottom-0 start-50 translate-middle-x">
                                                                    Accessories
                                                                </Link>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-xxl nav-electric-item">
                                        <Link className={`nav-link text-white ${showw === 3 ? 'show' : ''}`} style={{ height: "50px" }} href="#" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleMenuClick(3)}>
                                            Product
                                        </Link>
                                        <div className={`dropdown-menu ${showw === 3 ? 'show' : ''}`}>
                                            <Row className="pe-3">
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/product-detail-layout-01" className="dropdown-menu-title">PRODUCT LAYOUT</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                ProductLayout.map((item, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted position-relative d-inline-flex" href={item.link}>
                                                                                {item.label}<span className={item.badgeColor}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }

                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/product-detail-layout-01" className="dropdown-menu-title">PRODUCT DETAIL</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                ProductDetail2.map((item, index) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}>{item.label}
                                                                            <span className={item.badgeColor}>{item.badge}</span></Link></li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/product-detail-layout-01" className="dropdown-menu-title">PRODUCT SWATCH</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                ProductSwatch.map((item, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted" href={item.link}>{item.label}</Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/product-detail-layout-01" className="dropdown-menu-title">PRODUCT FEATURES</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                ProductFeatures.map((item, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted position-relative d-inline-flex" href={item.link} style={item.badgeStyle}>{item.lable}
                                                                                <span className={item.badgeColor2} style={item.badstyle2}>{item.badge2}</span>
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-lg nav-electric-item">
                                        <Link className={`nav-link text-white ${showw === 4 ? 'show' : ''}`} style={{ height: "50px" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleMenuClick(4)}>
                                            Lookbook
                                        </Link>
                                        <ul className={`dropdown-menu dropdown-sub-column ${showw === 4 ? 'show' : ''}`}>
                                            {Lookbook.map((item, index) => {
                                                return (
                                                    <li key={index}><Link className="text-muted" href={item.link}>{item.lable}</Link></li>
                                                )
                                            })
                                            }

                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-lg nav-electric-item">
                                        <Link className={`nav-link text-white ${showw === 5 ? 'show' : ''}`} style={{ height: "50px" }} href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleMenuClick(5)}>
                                            Blog
                                        </Link>
                                        <ul className={`dropdown-menu dropdown-sub-column ${showw === 5 ? 'show' : ''}`}>
                                            {
                                                Blog.map((item, index) => {
                                                    return (
                                                        <li key={index}><Link className="text-muted" href={item.link}>{item.lable}</Link></li>
                                                    )
                                                })
                                            }

                                        </ul>
                                    </li>
                                </ul>
                                <div className="d-flex align-items-xl-center justify-content-center justify-content-md-start gap-3">
                                    <Link href="mailto:Kalles@domain.com" className="mb-0 text-white fs-12"><i className="pe-7s-mail pegk fs-14 me-1 align-middle"></i> contact</Link>
                                    <Link href="mailto:Kalles@domain.com" className="mb-0 text-white fs-12"><i className="las la-clock "></i>
                                        08:00 - 17:00</Link>
                                    <Link href="tel:+01 23456789" className="mb-0 text-white fs-12"><i className="pegk pe-7s-call fs-14 me-1 align-middle"></i>
                                        +01 23456789</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </nav>

            </div>
            <ShoppingCardModal shoppingShow={shoppingShow} handleShoppingClose={handleShoppingClose} />
            <SearchModal show={searchShow} handleClose={handleClose} />
            <LoginModal loginShow={loginShow} handleLoginClose={handleLoginClose} />
            <MobileHeader headerShow={headerShow}
                handleHeaderClose={handleHeaderClose}
                loginShow={loginShow}
                handleLoginClose={handleLoginClose}
                handleLoginShow={handleLoginShow} />
        </React.Fragment>
    )
}
export default KidsHeader