import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { Blog, Features, HeaderLayout, HomePage1, HomePage2, Lookbook, Portfolio, HomeFashionShopSwiper, ProductLayout, ProductSwatch, sale, salesSwiper } from '@src/common/Header/header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ProductDetail2, ProductFeatures2, ShopFeatures2, ShopPage2 } from '@src/common/Header/header2'
import LoginModal from '@src/components/Headers/LoginModal'
import ShoppingCardModal from '@src/commonsections/ShoppingCardModal'
import MobileHeader from '@src/components/Headers/MobileHeader'
import SearchModal2 from '@src/components/SearchModal2'
import MainModel from '@src/commonsections/MainModel'

import logo from '@assets/images/svg/kalles.svg'
import bannner from '@assets/images/home-classic/mega-banner-01.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
const HeaderCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageUrl, setImageUrl] = useState(product.imageUrl);
    return (
        <>
            <div className="topbar-product-card pb-3">
                <div className="position-relative">
                    {product.label && (
                        <span className={`new-label text-white rounded-circle ${product.labelClass}`}>
                            {product.label}
                        </span>
                    )}
                    {
                        product.hoverImageUrl ?
                            <Image
                                src={isHovered ? product.hoverImageUrl : imageUrl}
                                alt=""
                                className="img-fluid"
                            />
                            :
                            <Image
                                src={imageUrl}
                                alt=""
                                className="img-fluid"
                            />
                    }

                    <Link href="#" className="wishlistadd position-absolute" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add to Wishlist">
                    <svg width="53" height="36" viewBox="0 0 53 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.6029 10.0481C51.7021 6.61116 49.4577 3.71519 46.2785 1.89394C43.0993 0.0726913 39.3712 -0.457455 35.7719 0.400877C31.2226 1.48641 28.1002 4.92695 26.4992 8.90125C24.8982 4.93056 21.7758 1.49002 17.2265 0.400877C9.80452 -1.37349 2.25387 2.95423 0.399328 10.0481C-0.656627 14.0837 0.410682 18.4439 3.25684 21.7113C6.43606 25.361 10.4328 26.1112 14.5961 26.6124C19.8115 27.24 24.1753 31.0664 25.2048 35.9207C25.2086 35.9495 25.2199 35.9711 25.2275 36H27.7671C27.7747 35.9748 27.786 35.9495 27.7898 35.9243C28.8231 31.0736 33.1869 27.2436 38.4023 26.6161C42.5618 26.1148 46.5623 25.3646 49.7416 21.7149C52.5877 18.4475 53.6588 14.0873 52.5991 10.0517L52.6029 10.0481ZM47.8151 20.1786C45.2112 23.1683 42.0092 23.7634 38.0882 24.2358C33.0469 24.8417 28.6641 27.9468 26.4954 32.1808C24.3305 27.9468 19.9477 24.8417 14.9026 24.2358C10.9854 23.7634 7.77966 23.1647 5.17573 20.1786C2.83673 17.4954 1.95866 13.925 2.82159 10.6287C4.1122 5.69873 8.75992 2.39884 13.8542 2.39884C14.7664 2.39884 15.6899 2.50343 16.6133 2.72342C20.8258 3.72962 25.095 8.23405 25.2313 14.9204H27.7557C27.892 8.23045 32.1612 3.72962 36.3737 2.72342C39.3183 2.02017 42.3764 2.45294 44.9803 3.946C47.5842 5.43907 49.4236 7.8121 50.1617 10.6251C51.0246 13.9214 50.1465 17.4918 47.8075 20.175L47.8151 20.1786Z" fill="#171440"></path>
</svg>                    </Link>
                    <div className="product-button d-flex flex-column gap-2">
                        <Link href="#!" className="btn rounded-pill fs-14">
                            <span>Quick View</span> <i className="icon-magic iccl iccl-eye"></i>
                        </Link>
                        <Link href="#!" className="btn rounded-pill fs-14">
                            <span>Quick Shop</span> <i className="icon-magic iccl iccl-cart"></i>
                        </Link>
                    </div>
                    <p className="product-size mb-0 text-center text-white fw-medium">
                        {product.size}
                    </p>
                </div>
                <div className="mt-3">
                    <h6 className="mb-1">
                        <Link href="#!" className="product-title">{product.title}</Link>
                    </h6>
                    {
                        product.del ?
                            <p className="mb-0 fs-14 text-muted">
                                <del>{product.del}</del>
                                <span className="text-danger"> {product.price}</span>
                            </p>
                            :
                            <p className="mb-0 fs-14 text-muted"> {product.price}</p>
                    }

                    {product.colors ?
                        <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                            {product.colors && product.colors.map((color, index) => (
                                <Link
                                    key={index}
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setImageUrl(color.imageUrl);
                                    }}
                                    style={{
                                        background: `url('${color.imageUrl.src}')`,
                                        backgroundSize: 'cover'
                                    }}
                                    className={`d-inline-block ${color.color} rounded-circle`}
                                ></Link>
                            ))}
                        </div>
                        :
                        <div className="product-color-list mt-2 gap-2 d-flex align-items-center">

                            {product.color && product.color.map((color, index) => {
                                return (
                                    <Link
                                        href="#!"
                                        key={index}
                                        onMouseOver={(e) => {
                                            e.preventDefault();
                                            setImageUrl(color.imageUrl);
                                            setIsHovered(false);
                                        }}
                                        className={`d-inline-block ${color.color} rounded-circle`}
                                    />
                                )
                            })}
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

const ProductCard = ({ product }) => {
    const [imageUrl, setImageUrl] = useState(product.imageUrl);

    return (
        <div className="swiper-slide">
            <div className="topbar-product-card pb-3">
                <div
                    className="position-relative overflow-hidden"
                    onMouseEnter={() => product.hoverImageUrl && setImageUrl(product.hoverImageUrl)}
                    onMouseLeave={() => setImageUrl(product.imageUrl)}
                >
                    <Image src={imageUrl} alt={product.title} className="img-fluid" />
                    <Link href="#" className="wishlistadd position-absolute" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                        <i className="facl facl-heart-o"></i>
                    </Link>
                    <div className="product-button d-flex flex-column gap-2">
                        <Link href="#!" className="btn rounded-pill fs-14"><span>Quick View</span> <i className="iccl iccl-eye"></i></Link>
                        <Link href="#!" className="btn rounded-pill fs-14"><span>Quick Shop</span> <i className="iccl iccl-cart"></i></Link>
                    </div>
                </div>
                <div className="mt-3 text-center">
                    <h6 className="mb-1"><Link href="#!" className="product-title">{product.title}</Link></h6>
                    <p className="mb-0 fs-14 text-muted">{product.price}</p>
                </div>
                {product.colors && (
                    <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                        {product.colors.map((color, index) => (
                            <Link
                                key={index}
                                href="#!"
                                onMouseOver={() => setImageUrl(color.imageUrl)}
                                onClick={(e) => { e.preventDefault(); setImageUrl(color.imageUrl); }}
                                className={`d-inline-block bg_color_${color.color} rounded-circle`}
                            ></Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};



const Header2 = () => {

    const headerRef = useRef(null)
    const [headerShow, setHeaderShow] = useState(false)
    const [show, setShow] = useState(null)
    const [isStickyActive, setIsStickyActive] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [searchShow, setSearchShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);
    const [shoppingShow, setShoppingShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop < lastScrollTop && scrollTop > 400) {
                setIsStickyActive(true);
            } else {
                setIsStickyActive(false);
            }

            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const handleClick = (id) => {
        if (show === id) {
            setShow(null)
        } else {
            setShow(id)
        }
    }

    const handleClickOutside = (event) => {
        if (
            headerRef.current &&
            !event.target.closest('.demo')
        ) {
            setShow(null)

        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

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
    const handleShoppingClose = () => setShoppingShow(false);
    const handleShoppingShow = () => setShoppingShow(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Trigger when scrolled more than 50px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <React.Fragment>
            <MainModel />
            <div id="kalles-section-header_top" className='demo' ref={headerRef} style={{position: 'absolute',
    width: '100%'}}>
                {/* <div className="h__top d-flex align-items-center">
                    <Container fluid>
                        <Row className="py-2">
                            <Col md={6} lg={4}>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <p className="mb-0">
                                        <i className="pegk pe-7s-call fs-14 me-1 align-middle"></i> +01 23456789
                                    </p>
                                    <p className="mb-0 ms-2">
                                        <i className="pe-7s-mail pegk fs-14 me-1 align-middle"></i> Kalles@domain.com
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='header-text text-center fs-12 py-1 py-md-0'>
                                Summer sale discount off <span className="cr">50%</span>! <Link href="/shop" className="text-reset">Shop Now</Link>

                            </Col>
                        </Row>
                    </Container>
                </div> */}

                <nav className='navbar navbar-expand-lg navbar-custom py-0 d-flex align-items-center sticky' style={{position:'fixed',width:'100%'}}>
                    <div className="container-fluid">
                        <Link className="d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={handleHeader}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                <rect width="30" height="1.5"></rect>
                                <rect y="7" width="20" height="1.5"></rect>
                                <rect y="14" width="30" height="1.5"></rect>
                            </svg>
                        </Link>

                        <Link className="navbar-brand nav-link mt-2" href="/home-static-image">
                       
                        {scrolled ? 
                       <svg  width="55" height="36" viewBox="0 0 55 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M44.1826 30.7082H54.8381V35.0002H20.0895V30.7082H39.8418V0H44.1826V30.7082ZM0 4.32376H10.6554V35.0198H14.9963V4.32376H34.7486V0.0146855H0V4.32376ZM38.7768 17.527C32.8481 18.5529 28.2142 23.4507 27.4569 29.5797C26.6996 23.4483 22.0657 18.5529 16.137 17.527C22.0657 16.501 26.6996 11.6032 27.4569 5.47427C28.2142 11.6057 32.8481 16.501 38.7768 17.527Z" fill="white"></path>
                     </svg>:
                      <svg width="136" height="40" viewBox="0 0 136 40" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M47.577 10.8404H54.2095V8.13027H47.577V2.70855H58.6086V0H44.8345V22H58.6086V19.2915H47.577V10.8404Z" fill="white"></path>
            <path d="M97.6077 10.8404H104.239V8.13027H97.6077V2.70855H108.639V0H94.8652V22H108.639V19.2915H97.6077V10.8404Z" fill="white"></path>
            <path d="M64.4236 0H61.6812V22H75.392V19.2699H64.4236V0Z" fill="white"></path>
            <path d="M122.15 13.7679C121.863 13.066 121.422 12.392 120.826 11.7426C120.231 11.0948 119.444 10.4454 118.466 9.79604L116.808 8.72866C115.894 8.12248 115.261 7.57799 114.911 7.0952C114.561 6.61396 114.385 6.05868 114.385 5.4309C114.385 4.51005 114.761 3.79281 115.517 3.28072C116.271 2.76862 117.308 2.51103 118.625 2.51103C119.071 2.51103 119.512 2.53263 119.949 2.57428C120.384 2.61592 120.751 2.66837 121.048 2.73161V0.220493C120.879 0.178847 120.66 0.141828 120.394 0.110979C120.128 0.0801299 119.847 0.0539082 119.549 0.0323139C119.251 0.012262 118.954 0.00146484 118.656 0.00146484C116.446 0.00146484 114.692 0.487337 113.395 1.46217C112.098 2.43545 111.45 3.76968 111.45 5.46483C111.45 6.51216 111.71 7.45305 112.23 8.2906C112.752 9.12816 113.595 9.92406 114.764 10.6768L116.39 11.7765C117.581 12.5509 118.42 13.2573 118.909 13.8959C119.398 14.5345 119.642 15.2609 119.642 16.0784C119.642 17.1458 119.227 17.9772 118.398 18.5741C117.57 19.1711 116.443 19.4688 115.019 19.4688C114.508 19.4688 113.945 19.4317 113.328 19.3592C112.711 19.2867 112.181 19.1973 111.734 19.0924V21.6051C112.138 21.7099 112.664 21.7994 113.311 21.8719C113.959 21.9444 114.57 21.9814 115.145 21.9814C117.462 21.9814 119.279 21.4524 120.598 20.3958C121.915 19.3392 122.575 17.8893 122.575 16.0476C122.575 15.2316 122.432 14.4728 122.145 13.7709L122.15 13.7679Z" fill="white"></path>
            <path d="M81.1563 13.7371C79.2097 6.3549 75.5603 1.14758 71.189 0L70.5195 2.67153C72.6697 3.23607 74.7736 5.38316 76.441 8.71794C78.204 12.244 79.4025 16.9608 79.8128 22H82.4982C82.9085 16.9608 84.107 12.244 85.87 8.71794C87.539 5.38316 89.6413 3.23607 91.7915 2.67153L91.1221 0C86.7508 1.14604 83.1013 6.3549 81.1547 13.7371H81.1563Z" fill="white"></path>
            <path d="M39.0549 0V18.7809C35.2173 17.7259 32.3375 14.914 31.8347 11.5684L31.3997 8.67321H29.5935L29.1585 11.5684C28.6557 14.914 25.7759 17.7259 21.9383 18.7809V2.52962H21.9398V0H0V2.70855H6.72818V22H9.47066V2.70855H19.2344V22L20.7784 21.7794C25.0217 21.1748 28.6048 18.8318 30.4989 15.6605C32.393 18.8318 35.9762 21.1763 40.2194 21.7794L41.7634 22V0H39.0564H39.0549Z" fill="white"></path>
          
</svg>}
                        </Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-none d-lg-block mx-auto">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown dropdown-mega-xxl">
                                        <span className={`nav-link ${show === 1 ? "show" : ""}`} data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(1)}>
                                            Demo
                                        </span>
                                        <div className={`dropdown-menu ${show === 1 ? "show" : ""}`}>
                                            <Row>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="#!" className="dropdown-menu-title">Home Pages</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                HomePage1.map((item, index) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}> {item.label} <span className={item.badgeColor}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/home-default" className="dropdown-menu-title">Home
                                                            Pages</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                HomePage2.map((item, index) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}> {item.label} <span className={item.badgeColor}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/home-default" className="dropdown-menu-title">Header
                                                            Layouts</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                HeaderLayout.map((item, index) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}> {item.label} <span className={item.badgeColor}>{item.badge}</span></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="#!" className="dropdown-menu-title">FEATURES</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                Features.map((item, index) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}> {item.label} <span className={item.badgeColor} style={item.badgeStyle}>{item.badge}</span></Link>
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
                                    <li className="nav-item dropdown dropdown-mega-xxl">
                                        <span className={`nav-link position-relative ${show === 2 ? "show" : ""}`} data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(2)}>
                                            Shop <span className="badge bg-teal fw-normal">New</span>
                                        </span>
                                        <div className={`dropdown-menu p-3 ${show === 2 ? "show" : ""}`}>
                                            <Row className="g-0">
                                                <Col lg={5}>
                                                    <Row className="g-0">
                                                        <Col lg={6}>
                                                            <div className="dropdown-sub-column-item">
                                                                <Link href="/shop-filter-sidebar" className="dropdown-menu-title">SHOP PAGES</Link>
                                                                <ul className="sub-column-menu">
                                                                    {
                                                                        ShopPage2.map((item, index) => {
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
                                                    <Row className="g-6">
                                                        <Col lg={6}>
                                                            <Swiper
                                                                slidesPerView={1}
                                                                spaceBetween={30}
                                                                navigation={{
                                                                    nextEl: ".swiper-button-next",
                                                                    prevEl: ".swiper-button-prev",
                                                                }}
                                                                modules={[Navigation]}
                                                                className='saleSwiper'>
                                                                <div className='swiper-wrapper'>
                                                                    {HomeFashionShopSwiper.map((product, index) => (
                                                                        <SwiperSlide key={index}>
                                                                            <ProductCard product={product} />
                                                                        </SwiperSlide>
                                                                    ))}
                                                                </div>
                                                                <div className="swiper-button-next"></div>
                                                                <div className="swiper-button-prev"></div>
                                                            </Swiper>
                                                        </Col>
                                                        <div className="col-lg-6 cat-section ps-4 p-0">
                                                            <Link href="shop-left-sidebar.html" className="d-block position-relative cat_grid_item overflow-hidden " style={{ height: "350px" }}>
                                                                <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${bannner.src})` }}></div>
                                                                <div className="cat-grid-button text-body">
                                                                    <div className="cat_grid_item__title">Women</div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown dropdown-mega-xxl">
                                        <span className={`nav-link ${show === 3 ? "show" : ""}`}  data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(3)}>
                                            Product
                                        </span>
                                        <div className={`dropdown-menu ${show === 3 ? "show" : ""}`}>
                                            <Row className="me-4">
                                                <Col lg={3}>
                                                    <div className="dropdown-sub-column-item">
                                                        <Link href="/product-detail-layout-01" className="dropdown-menu-title">PRODUCT LAYOUT</Link>
                                                        <ul className="sub-column-menu">
                                                            {
                                                                ProductLayout.map((item, index) => {
                                                                    return (
                                                                        <li key={index}><Link className="text-muted position-relative d-inline-flex" href={item.link}>
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
                                                                ProductFeatures2.map((item, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className="text-muted position-relative d-inline-flex" href={item.link} style={item.badgeStyle}>{item.lable}<span className={item.badgeColor}>{item.badge}</span></Link>
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

                                    <li className="nav-item dropdown dropdown-mega-3xl">
                                        <span className={`nav-link position-relative text-danger ${show === 4 ? 'show' : ""}`}  data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(4)}>
                                            Sale <span className="badge bg-warning fw-normal">Sale</span>
                                        </span>
                                        <div className={`dropdown-menu ${show === 4 ? "show" : ""}`}>
                                            <Row>
                                                <Col lg={2}>
                                                    <div className="dropdown-sub-column-item">
                                                        {sale.map((item, index) => {
                                                            return (
                                                                <Link key={index} href={item.link} className="dropdown-menu-title">{item.lable}</Link>
                                                            )
                                                        })}
                                                    </div>
                                                </Col>
                                                <Col lg={10}>
                                                    <Swiper
                                                        slidesPerView={1}
                                                        spaceBetween={30}
                                                        navigation={{
                                                            nextEl: ".swiper-button-next",
                                                            prevEl: ".swiper-button-prev",
                                                        }}
                                                        breakpoints={{
                                                            640: {
                                                                slidesPerView: 2,
                                                            },
                                                            768: {
                                                                slidesPerView: 3,
                                                            },
                                                            1024: {
                                                                slidesPerView: 4,
                                                            },
                                                        }}
                                                        modules={[Navigation]}
                                                        className='mySwiper'>
                                                        <div className='swiper-wrapper'>
                                                            {salesSwiper.map((product) => (
                                                                <SwiperSlide key={product.id}>
                                                                    <HeaderCard product={product} />
                                                                </SwiperSlide>
                                                            ))}
                                                        </div>
                                                        <div className="swiper-button-next"></div>
                                                        <div className="swiper-button-prev"></div>
                                                    </Swiper>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>


                                    <li className="nav-item dropdown dropdown-mega-lg">
                                        <span className={`nav-link ${show === 5 ? "show" : ""}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(5)}>
                                            Portfolio
                                        </span>
                                        <ul className={`dropdown-menu dropdown-sub-column ${show === 5 ? "show" : ""}`}>
                                            {
                                                Portfolio.map((item, index) => {
                                                    return (
                                                        <li key={index}><Link className="text-muted" href={item.link}>{item.label}</Link></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown dropdown-mega-lg">
                                        <span className={`nav-link ${show === 6 ? "show" : ""}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(6)}>
                                            Lookbook
                                        </span>
                                        <ul className={`dropdown-menu dropdown-sub-column ${show === 6 ? 'show' : ""}`}>
                                            {Lookbook.map((item, index) => {
                                                return (
                                                    <li key={index}><Link className="text-muted" href={item.link}>{item.lable}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega-lg">
                                        <span className={`nav-link ${show === 7 ? "show" : ""}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleClick(7)}>
                                            Blog
                                        </span>
                                        <ul className={`dropdown-menu dropdown-sub-column ${show === 7 ? 'show' : ""}`}>
                                            {Blog.map((item, index) => {
                                                return (
                                                    <li key={index}><Link className="text-muted" href={item.link}>{item.lable}</Link></li>
                                                )
                                            })}

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="topbar-toolbar d-flex align-items-center gap-3">
                            <Link data-bs-toggle="offcanvas" href="#searchOffcanvas" aria-controls="searchOffcanvas" onClick={handleShow}><i className="iccl iccl-search icon-white"></i></Link>
                            <Link className="d-md-block d-none" data-bs-toggle="offcanvas" href="#accountOffcanvas" aria-controls="accountOffcanvas" onClick={handleLoginShow}><i className="iccl iccl-user icon-white"></i></Link>
                            <Link className="d-md-block d-none" href="/wishlist"><i className="iccl iccl-heart icon-white"></i><span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">3</span></Link>
                            <Link data-bs-toggle="offcanvas" href="#shoppingCartOffcanvas" aria-controls="shoppingCartOffcanvas" onClick={handleShoppingShow}><i className="iccl iccl-cart icon-white"></i><span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">5</span></Link>
                        </div>
                    </div >
                </nav >
            </div >

            <div className="backdrop-shadow d-none"></div>
            <SearchModal2 show={searchShow} handleClose={handleClose} />
            <LoginModal loginShow={loginShow} handleLoginClose={handleLoginClose} />
            <ShoppingCardModal shoppingShow={shoppingShow} handleShoppingClose={handleShoppingClose} />
            <MobileHeader headerShow={headerShow}
                handleHeaderClose={handleHeaderClose}
                loginShow={loginShow}
                handleLoginClose={handleLoginClose}
                handleLoginShow={handleLoginShow} />
        </React.Fragment>
    )
}

export default Header2