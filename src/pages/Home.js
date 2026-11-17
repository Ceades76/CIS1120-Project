import { Link } from "react-router-dom";
import LogoBackground from "../assets/LogoBackground.jpeg";

export default function Home() {
  return (
    <>
      <header id="headBar">
        <span className="chosen">Home</span>
        <span>
          <Link to="Home/Products" className="headLinks">
            {" "}
            Products
          </Link>
        </span>
        <img src="" alt="Logo" />
        <span>
          <Link to="Home/AboutUs" className="headLinks">
            {" "}
            About Us
          </Link>
        </span>
        <span>
          <Link to="Home/Cart" className="headLinks">
            Cart
          </Link>
        </span>
      </header>
      <section id="home">
        <img src={LogoBackground} alt="backround" />
        <span>1he</span>
        <span>2he</span>
      </section>
    </>
  );
}
