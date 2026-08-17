import { useState } from "react";

function Navbar() {
  return (
    <nav className="syber-navbar">

      {/*Left Side*/}
      <div className="syber-navbar-left">
      < div className="profile-circle">
        S
      </div>
    
      <a className="navbar-brand" href="#">
        Syber
      </a>
      </div>

      {/**Navigation buttons */}
      <div className="navbar-buttons">
        <button>Overview</button>
        <button>Accounts</button>
        <button>Transactions</button>
        <button>Transfer</button>
      </div>
    </nav>

  );
}

export default Navbar;
