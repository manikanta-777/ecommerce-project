import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { AppBar, Badge, Toolbar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DrawerComponent from "../../molecules/navbarComponent/DrawerComponent";
import Logo from "../../../../Assets/Images/CognizantCheersLogo.png";
import NavbarComponent from "../../molecules/navbarComponent/NavbarComponent";
import SearchBarComponent from "../../atoms/searchBarComponent/SearchBarComponent";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./HeaderComponent.css";

const fontSizeStyle = {
  fontSize: 30,
  margin: "0 1vmax",
  "@media (min-width:850px)": {
    fontSize: 40,
  },
  "@media (min-width:1080px)": {
    fontSize: 50,
  },
};
const HeaderStyle = {
  backgroundColor: "#fff",
};

const HeaderComponent = (props) => {
  const { categories, QuantitySum } = props;
  return (
    <Fragment data-test="component-header">
      <AppBar sx={HeaderStyle} className="header">
        <Toolbar>
          <div className="logoIconComponent">
            <div>
              <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="search">
              <SearchBarComponent />
            </div>
            <div className="iconsClass">
              <div className="AccountShopping">
                <div>
                  <AccountCircleIcon sx={fontSizeStyle} />
                </div>
                <div>
                  <Badge
                    color="primary"
                    badgeContent={QuantitySum}
                    overlap="circular"
                    showZero
                  >
                    <ShoppingCartOutlinedIcon sx={fontSizeStyle} />
                  </Badge>
                </div>
              </div>
              <div className="MenuClass">
                <DrawerComponent categories={categories} />
              </div>
            </div>
          </div>
        </Toolbar>
        <div className="NavbarComponentClass ">
          <NavbarComponent categories={categories} />
        </div>
      </AppBar>
    </Fragment>
  );
};
HeaderComponent.propTypes = {
  categories: PropTypes.array,
};
HeaderComponent.defaultProps = {
  categories: [],
};
export default HeaderComponent;
