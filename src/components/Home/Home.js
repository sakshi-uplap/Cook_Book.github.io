import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
import "../Home/Home.css";
import { myContext } from "../Context/Context";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h2> COOK-BOOK</h2>
               <p>Cook awesome recipes</p>
               <p>without hesitation! </p>
                <Link to="/recipes">
                    <button>Recipes</button>
                </Link>
               <Link to="/categories">
                    <button>Category</button>
               </Link>
      </div>
    </div>
  );
}

export default Home;
