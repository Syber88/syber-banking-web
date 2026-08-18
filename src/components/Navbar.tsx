import { useState } from "react";

function Navbar() {
  const [underline, setUnderline] = useState("Overview");

  return (
    <nav className="syber-navbar">
      {/*Left Side*/}
      <div className="syber-navbar-left">
        <div className="profile-circle">S</div>

        <a className="navbar-brand" href="#">
          Syber
        </a>
      </div>

      {/**Right Side */}
      <div className="syber-navbar-right">
        <div className="profile-circle-right">
          SM
        </div>
      </div>

      {/**Navigation buttons */}
      <div className="navbar-buttons">
        <button 
        className={underline === "Overview" ? "active" : ""}
        onClick={() =>setUnderline("Overview")}
        >
          Overview
        </button>

        <button 
        className={underline === "Accounts" ? "active" : ""}
        onClick={() =>setUnderline("Accounts")}
        >
          Accounts
        </button>

        <button 
        className={underline === "Transactions" ? "active" : ""}
        onClick={() =>setUnderline("Transactions")}
          >
          Transactions
        </button>

        <button 
        className={underline === "Transfer" ? "active" : ""}
        onClick={() =>setUnderline("Transfer")}
          >
          Transfer
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
