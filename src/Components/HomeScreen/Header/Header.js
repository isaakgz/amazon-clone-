import React from "react";
// import logo from "../../../assets/amazon-png-logo-vector-6695.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../StateProvider/StateProvider";
import { auth } from "../../../firbase";

function Header() { 
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthetication = ()=>{
    if (user) {
      auth.signOut()
    }

  }
  return (
    <div className="header ">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amzon-logo"
        />
      </Link>
      <div className="header__serach">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__Serchicon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthetication} className="header__option">
            <span className="header__optionLineOne"> Hello {user ? user.email : "Guest"} </span>
            <span className="header__optionLinetwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne"> Returns</span>
            <span className="header__optionLinetwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionbasket">
              <ShoppingBasketIcon  />  <span className="header__optionLinetwo header__basketcount">{basket?.length}</span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
