import React from "react";

const Navbar = ({setSearch, search}) => {
  const handlesearch=(e)=>setSearch(e.target.value)
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <form className="form-inline">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                @...
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={search}
              onChange={handlesearch}
            />
          </div>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;