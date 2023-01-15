import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const onSearchChange = (e) => {
    props.onSearchFilter(
      e.target.value, (page) =>
        agent.Items.byTitle(e.target.value),
        agent.Items.byTitle(e.target.value)
    );
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          
          <form class="d-inline-flex justify-content-between">
            <span>A place to </span>
            <div class="col-6">
              <input id="search-box" name="search-box" type="search" placeholder="What is it that you truly desire?" class="form-control input-md" onChange={onSearchChange}></input>
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
