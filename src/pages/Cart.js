import { Link } from "react-router-dom";

export default function Cart() {
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
        <span>
          <Link to="/Home/AboutUs" className="headLinks">
            {" "}
            About Us
          </Link>
        </span>
        <span className="chosen">Cart</span>
      </header>
    </>
  );
}
