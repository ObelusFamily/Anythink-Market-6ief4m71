import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          
          <form class="d-inline-flex justify-content-between">
            <span>A place to </span>
            <div class="col-6">
              <input id="search-box" name="search-box" type="search" placeholder="What is it that you truly desire?" class="form-control input-md"></input>
            </div>
            <span id="get-part">get</span>
            <span> the cool stuff.</span>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
