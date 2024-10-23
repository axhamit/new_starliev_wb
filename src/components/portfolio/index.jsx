import Link from "next/link";
import { Col } from "react-bootstrap";
import { FaEye, FaSearch, FaSeedling, FaStreetView } from "react-icons/fa";
const Portfolioitem = ({ data, baseUrl, slug, setBasicExampleOpen }) => {
  return (
    <Col xs={12} sm={6} lg={4} className="ltn__gallery-item filter_category_3">
      <div className="ltn__gallery-item-inner">
        <div
          className="ltn__gallery-item-img"
          onClick={() => setBasicExampleOpen(true)}
        >
          <img src={`/img/photos/${data.thumbImage}`} alt="Image" />
          <span className="ltn__gallery-action-icon">
            <span>{<FaEye />}</span>
          </span>
        </div>
        <div className="ltn__gallery-item-info">
          <h4>
            {/* <Link href={`${baseUrl}/${slug}`}></Link> */}
            {data.title}
          </h4>
          <p>{data.designation}</p>
        </div>
      </div>
    </Col>
  );
};

export default Portfolioitem;
