import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CardListPage.scss";
import SigninPage from "../../SigninPage/SigninPage";
import Search from "../../common/Search";
import { Button } from "@material-ui/core";
import { AiOutlineUser } from "react-icons/ai";

class CardListHeader extends Component {
  render() {
    return (
      <header className="cardList-header">
        <Search />
        <div className="header-user">
          <Link to="/myPage">
            <Button variant="contained" className="header-btn" id="myPage-btn">
              <AiOutlineUser className="btn-icon" />
            </Button>
          </Link>
          <SigninPage />
        </div>
      </header>
    );
  }
}

export default CardListHeader;
