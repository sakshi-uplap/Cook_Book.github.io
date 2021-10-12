import React, { useState, useCallback, useContext } from "react";
import "./Home.scss";
import { myContext } from "../Context/Context";
import Banner from "../assets/banner.jpg";
import{Link} from "react-router-dom";


function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${Banner})`}}>
           <div className="headerConatiner">
               <h2> COOK-BOOK</h2>
               <p>Cook awesome recipes without hesitation! </p>
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
