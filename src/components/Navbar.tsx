import { Fragment } from "react";
import "../styles.css";
import Navbarimage from "../assets/navbarimage.jpg";

function Navbar() {
  const navItems = new Map<string, string>([
    ["O FIRMĚ", "index.html"],
    ["NEMOVITOSTI", "nemovitosti.html"],
    ["VIDEOPROHLÍDKY", ""],
    ["NOVINKY", ""],
    ["REFERENCE", ""],
    ["PODMÍNKY", ""],
  ]);

  return (
    <Fragment>
      <nav>
        {/*Navbar image div*/}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            height: 160,
            minWidth: 236,
          }}
        >
          <img
            src={Navbarimage}
            alt="Background Image"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
          {/* Text over navbar image */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#8a0707",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            garance - solidnost - jistota Váš partner již 30 let
          </div>
        </div>
        {/* Navbar items generated using Navbar Map*/}
        <ul className="menulist">
          {Array.from(navItems, ([item, link]) => (
            <li key={item} className="menulist">
              <a href={link}>{item}</a>
            </li>
          ))}

          {/*Start if search bar end of menu list*/}
          <li id="search">
            <form
              method="get"
              action="http://www.google.com/search"
              target="_blank"
            >
              <div>
                <input
                  type="text"
                  name="q"
                  size={20}
                  maxLength={150}
                  defaultValue=""
                />
                <input type="submit" defaultValue="Search" />
              </div>
            </form>
          </li>
          {/*End of search bar and end of menu list*/}
        </ul>
      </nav>
      {/*End of navigation bar*/}
    </Fragment>
  );
}

export default Navbar;
