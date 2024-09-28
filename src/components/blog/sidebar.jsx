import Link from "next/link";
import Slider from "react-slick";
import {
  FaStar,
  FaSearch,
  FaRegStar,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCalendarAlt,
} from "react-icons/fa";
import { productSlug, getDiscountPrice } from "@/lib/product"; // Ensure these functions exist
import FollowUs from "@/components/followUs"; // Ensure FollowUs is correctly exported
import Tags from "@/components/tags"; // Ensure Tags is correctly exported

const BlogSideBar = ({ popularProducts, topRatedProducts, latestdBlogs }) => {
  // Add a fallback in case popularProducts is undefined or empty
  if (!popularProducts || popularProducts.length === 0) {
    return <p>No popular products available.</p>;
  }

  // Access the first product safely
  const product = popularProducts[0];

  // Check if product has price and discount properties
  const discountedPrice = product.price && product.discount
    ? getDiscountPrice(product.price, product.discount).toFixed(2)
    : null;

  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };

  return (
    <>
      <aside className="sidebar-area blog-sidebar">
        {/* Author Widget */}
        <div className="widget ltn__author-widget">
          <div className="ltn__author-widget-inner text-center">
            <img
              src={`/img/team/${product.agent.img}`}
              alt={`${product.agent.fullName}`}
            />
            <h5>{product.agent.fullName}</h5>
            <small>{product.agent.designation}</small>
            <div className="product-ratting">
              <ul>
                <li>
                  <Link href="#">
                    <FaStar />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaStar />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaStar />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaStar />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaRegStar />
                  </Link>
                </li>
                <li className="review-total">
                  <Link href="#">( {product.agent.raiting} Reviews )</Link>
                </li>
              </ul>
            </div>
            <p>{product.agent.description}</p>

            <div className="ltn__social-media">
              <ul>
                <li>
                  <Link href="#" title="Facebook">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="#" title="Twitter">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#" title="Instagram">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="#" title="Dribbble">
                    <FaDribbble />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search Widget */}
        <div className="widget ltn__search-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Search Objects
          </h4>
          <form action="#">
            <input
              type="text"
              name="search"
              placeholder="Search your keyword..."
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Form Widget */}
        <div className="widget ltn__form-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Drop Message For Book
          </h4>
          <form action="#">
            <input type="text" name="yourname" placeholder="Your Name*" />
            <input type="text" name="youremail" placeholder="Your e-Mail*" />
            <textarea
              name="yourmessage"
              placeholder="Write Message..."
            ></textarea>
            <button type="submit" className="btn theme-btn-1">
              Send Message
            </button>
          </form>
        </div>

        {/* Top Rated Product Widget */}
        <div className="widget ltn__top-rated-product-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Top Rated Product
          </h4>
          <ul>
            {topRatedProducts.map((product, key) => {
              const slug = productSlug(product.title);
              return (
                <li key={product.id}>
                  <div className="top-rated-product-item clearfix">
                    <div className="top-rated-product-img">
                      <Link href={`/shop/${slug}`}>
                        <img
                          src={`/img/product/${key + 1}.png`}
                          alt={product.title}
                        />
                      </Link>
                    </div>
                    <div className="top-rated-product-info">
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h6>
                        <Link href={`/shop/${slug}`}>{product.title}</Link>
                      </h6>
                      <div className="product-price">
                        <span>₹{product.price}</span>
                        <del>₹{discountedPrice}</del>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Popular Product Widget */}
        <div className="widget ltn__popular-product-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Popular Properties
          </h4>

          <Slider
            {...popular_product}
            className="row ltn__popular-product-widget-active slick-arrow-1"
          >
            {popularProducts.map((product, key) => {
              const slug = productSlug(product.title);
              return (
                <div
                  key={key}
                  className="ltn__product-item ltn__product-item-4 ltn__product-item-5"
                >
                  <div className="product-img">
                    <Link href={`/shop/${slug}`}>
                      <img
                        src={`/img/product-3/${product.productImg}`}
                        alt={slug}
                      />
                    </Link>
                    <div className="real-estate-agent">
                      <div className="agent-img">
                        <Link href="#">
                          <img src={`/img/blog/author.jpg`} alt="#" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-price">
                      <span>
                        ₹{product.price}
                        <label>/Month</label>
                      </span>
                    </div>
                    <h2 className="product-title">
                      <Link href={`/shop/${slug}`}>{product.title}</Link>
                    </h2>
                    <div className="product-img-location">
                      <ul>
                        <li>
                          <Link href="/product-details">
                            <i className="flaticon-pin"></i>
                            {product.locantion}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                      <li>
                        <span>{product.propertyDetails.bedrooms}</span>
                        <span className="ms-1">Bedrooms</span>
                      </li>
                      <li>
                        <span>{product.propertyDetails.baths}</span>
                        <span className="ms-1">Bathrooms</span>
                      </li>
                      <li>
                        <span>{product.propertyDetails.area}</span>
                        <span className="ms-1">Square Ft</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Latest Blogs */}
        <div className="widget ltn__popular-post-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Latest Blogs
          </h4>
          <ul>
            {latestdBlogs.map((blog, key) => {
              const slug = productSlug(blog.title);
              return (
                <li key={key}>
                  <div className="popular-post-widget-item clearfix">
                    <div className="popular-post-widget-img">
                      <Link href={`/blog/${slug}`}>
                        <img src={`/img/team/${key + 1}.jpg`} alt="#" />
                      </Link>
                    </div>
                    <div className="popular-post-widget-brief">
                      <h6>
                        <Link href={`/blog/${slug}`}>{blog.title}</Link>
                      </h6>
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <Link href={`/blog/${slug}`}>
                              <span>
                                <FaCalendarAlt />
                              </span>
                              <span>{blog.date}</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Follow Us */}
        <FollowUs />

        {/* Tagcloud Widget */}
        <Tags />
      </aside>
    </>
  );
};

export default BlogSideBar;
