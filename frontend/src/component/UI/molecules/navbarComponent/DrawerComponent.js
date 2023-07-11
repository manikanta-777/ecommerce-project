import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import "./NavbarComponent.css";
import { Drawer, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryComponent from "../../atoms/categoryComponent/CategoryComponent";

const menuIconStyle = {
  color: " #000048",
  fontSize: "30px",
};

const DrawerComponent = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { categories } = props;
  const handlingDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment data-test="component-sideDrawer">
      <Drawer
        open={openDrawer}
        onClick={handlingDrawer}
        data-test="component-toggleDrawer"
      >
        <List>
          <CategoryComponent categories={categories} />
        </List>
      </Drawer>
      <IconButton onClick={handlingDrawer}>
        <MenuIcon sx={menuIconStyle} />
      </IconButton>
    </Fragment>
  );
};
DrawerComponent.propTypes = {
  categories: PropTypes.array,
};
DrawerComponent.defaultProps = {
  categories: [],
};

export default DrawerComponent;
