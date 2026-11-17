import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <header id="headBar">
        <span>
          <Link to="/" className="headLinks">
            {" "}
            Home
          </Link>
        </span>
        <span className="chosen">Products</span>
        <img src="" alt="Logo" />
        <span>
          <Link to="/Home/AboutUs" className="headLinks">
            {" "}
            About Us
          </Link>
        </span>
        <span>
          <Link to="/Home/Cart" className="headLinks">
            Cart
          </Link>
        </span>
      </header>
    </>
  );
}
