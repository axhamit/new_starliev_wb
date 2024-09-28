import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice, productSlug } from "@/lib/product";
import Link from "next/link";
import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clsx from "clsx";
import { FaSearch, FaPhoneAlt, FaCartArrowDown } from "react-icons/fa";
import MenuList from "@/components/header/elements/menuList";
const HeaderStyleFive = function ({ SetToggleClassName }) {
  const [cartMenuOpener, cartMenuOpenerSet] = useState(false);
  const [overlayBtn, SetoverlayBtn] = useState(false);
  const [offCanVastoggleBtn, SetOffCanVastoggleBtn] = useState(false);
  const [searchFormOpener, searchFormOpenerSet] = useState(false);

  function offcanVasToggler() {
    SetToggleClassName(true);
    SetoverlayBtn(true);
    SetOffCanVastoggleBtn((offCanVastoggleBtn) => !offCanVastoggleBtn);
  }

  function cartMenu() {
    SetoverlayBtn(true);
    cartMenuOpenerSet((cartMenuOpener) => !cartMenuOpener);
    SetToggleClassName(false);
  }

  function closeSideBar() {
    SetoverlayBtn(false);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
  }

  function overlay() {
    SetoverlayBtn((overlayBtn) => !overlayBtn);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
    SetToggleClassName(false);
  }

  function searchForm() {
    searchFormOpenerSet((searchFormOpener) => !searchFormOpener);
  }

  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.querySelector(".ltn__header-sticky");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const { products } = useSelector((state) => state.product);
  const [currentItems, setCurrentItems] = useState([]);

  const [query, setQuery] = useState("");
  const keys = ["title"];
  const SearchProduct = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const updatedProducts = query.length ? SearchProduct(products) : [];

  useEffect(() => {
    setCurrentItems(updatedProducts);
  }, [products, query]);

  let cartTotalPrice = 0;
  const { cartItems } = useSelector((state) => state.cart);

  cartItems.map((product, key) => {
    const discountedPrice = getDiscountPrice(
      product.price,
      product.discount
    ).toFixed(2);
    cartTotalPrice += discountedPrice * product.quantity;
  });

  return (
    <>
      <header className="ltn__header-area ltn__header-3">
        {/* <!-- ltn__header-middle-area start --> */}
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
          <Container>
            <Row>
              <Col>
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link href="/">
                      {/* <img src="" alt="Logo" /> */}
                      <h2>STARLIVE</h2>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col className="header-contact-serarch-column d-none d-xl-block">
                <div className="header-contact-search">
               
                  <div className="header-feature-item">
                    <div className="header-feature-icon">
                      <FaPhoneAlt className="icon-phone" />
                    </div>
                    <div className="header-feature-info">
                      <h6>Phone</h6>
                      <p>
                        <Link href="tel:0123456789">+0123-456-789</Link>
                      </p>
                    </div>
                  </div>
                
                  <div
                    className={`header-search-2 position-relative ${
                      searchFormOpener ? "search-open" : ""
                    }`}
                  >
                    <form id="#123" method="get" action="#">
                      <input
                        onChange={(e) => {
                          setQuery(e.target.value.toLowerCase());
                          searchForm();
                        }}
                        type="text"
                        name="search"
                        placeholder="Search here..."
                      />
                      <button type="submit">
                        <span>
                          <FaSearch className="icon-search" />
                        </span>
                      </button>
                    </form>
                    <div className="header-search-form-box11">
                      <ul className="searched-product-lists list-group">
                        {currentItems && currentItems ? (
                          currentItems.map((product, key) => {
                            const slug = productSlug(product.title);
                            return (
                              <li key={key} className="list-group-item">
                                <Link href={`/shop/${slug}`}>
                                  {product.title}
                                </Link>
                              </li>
                            );
                          })
                        ) : (
                          <li>NO Products Found</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>

            
      
            </Row>
          </Container>
        </div>
        {/* <!-- ltn__header-middle-area end --> */}

        {/* header-bottom-area start */}
        <div
          className={clsx(
            "header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-white d-none d-lg-block",
            scroll > headerHeight && "sticky-active"
          )}
        >
          <Container>
            <Row>
              <Col className="header-menu-column justify-content-center">
                <div className="sticky-logo">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="header-menu header-menu-2">
                  <nav>
                    <div className="ltn__main-menu">
                    <MenuList addListing={true} />
                    </div>
                  </nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* header-bottom-area end */}
      </header>

      {/* <!-- Utilize Cart Menu Start --> */}

      {/* <HeaderCartMenu
        cartMenu={cartMenu}
        cartMenuOpener={cartMenuOpener}
        closeSideBar={closeSideBar}
      /> */}

      {/* hello */}

      {/* <!-- Utilize Cart Menu End --> */}

      {/* <!-- Utilize Mobile Menu Start --> */}
      <MobileMenu
        offCanVastoggleBtn={offCanVastoggleBtn}
        offcanVasToggler={offcanVasToggler}
        closeSideBar={closeSideBar}
      />

      {/* <!-- Utilize Mobile Menu End --> */}
      <div
        className="ltn__utilize-overlay"
        style={{
          display: overlayBtn ? "block" : "none",
          opacity: overlayBtn ? "1" : "0",
        }}
        onClick={overlay}
      ></div>
    </>
  );
};

export default HeaderStyleFive;
