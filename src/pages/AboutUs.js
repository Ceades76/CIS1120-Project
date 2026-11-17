import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <header id="headBar">
        <span>
          <Link to="/" className="headLinks">
            Home
          </Link>
        </span>
        <span>
          <Link to="/Home/Products" className="headLinks">
            {" "}
            Products
          </Link>
        </span>
        <img src="" alt="Logo" />
        <span className="chosen">About Us</span>
        <span>
          <Link to="/Home/Cart" className="headLinks">
            Cart
          </Link>
        </span>
      </header>
    </>
  );
}
