import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {getNumbers} from '../actions/getAction';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#dfdfdf",
    height: "100px",
    padding: 0,
    margin: 0,
    textAlign: "right",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "right",
    direction: "rtl",
  },
  list: {
    padding: "10px",
  },
  link:{
    textDecoration:'none'
  }
}));


function Navbar(props) {
const classes = useStyles();
    useEffect(() => {
      getNumbers();
    },[]);

  return (
    <div className="App">
      <header className={classes.header}>
        <nav>
          <h2>فروشگاه آنلاین</h2>
          <ul className={classes.menu}>
            <li className={classes.list}>
              <Link className={classes.link} to="/">
                صفحه اصلی
              </Link>
            </li>
            <li className={classes.list}>
              <Link className={classes.link} to="/Cart">
                سبد خرید<span>{props.basketProps}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
const mapStateToProps = (state) => ({
  basketProps: state.basketState.basketNumbers,
});
export default connect(mapStateToProps, { getNumbers })(Navbar);

