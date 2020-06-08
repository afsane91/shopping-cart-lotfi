import React from "react";
import { connect } from "react-redux";
import { addToBasket } from "../actions/addAction";
import banner from "../images/banner.png";
import book1 from "../images/book1.png";
import book2 from "../images/book2.png";
import book3 from "../images/book3.png";
import {productQuantity} from '../actions/productQuantity';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  
  MuiTableCell: {
    textAlign: "center",
  },
}));
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const TableCellStyled = withStyles({
  root: {
    textAlign: "center",
  },
})(TableCell);



function Cart(props) {
  const classes = useStyles();
console.log(props.basketProps);
let productsInCart = [];
Object.keys(props.basketProps.products).forEach(function (item) {
    // console.log(item)
    // console.log(props.basketProps.products[item].inCart);
    if(props.basketProps.products[item].inCart){
        productsInCart.push(props.basketProps.products[item]);
        console.log(productsInCart);
    }
});

// const productImages = [banner, book1, book2, book3];

const productImages = (product, productQuantity) => {
  if (product.tagName === "melateEshgh") {
    return banner;
  } else if (product.tagName === "bishori") {
    return book1;
  } else if (product.tagName === "maghaze") {
    return book2;
  } else if (product.tagName === "jozazkol") {
    return book3;
  }
};

// productsInCart = productsInCart.map ((product,index)=>{
//     return (
//       <div key={index}>
//         <p>{product.name} نام محصول:</p>
//         <img src={productImages[index]} />
//         <p>{product.price}قیمت :</p>
        // <button onClick={() => props.productQuantity("decrease", product.tagName)}>
        //   کاهش
        // </button>
//         <span>{product.numbers}تعداد :</span>
        // <button onClick={() => props.productQuantity("increase", product.tagName)}>
        //   افزایش
        // </button>
//         <div>{product.numbers * product.price} قیمت کل:</div>
//       </div>
//     );
// })


  return (
    // <>
    //   <h1>سبد خرید</h1>
    //   <p>{productsInCart}</p>
    //   <p>{props.basketProps.cardCost} قیمت نهایی:</p>
    // </>
    <Container maxWidth="lg" style={{ marginTop: "1rem" }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead className={classes.thead}>
            <TableRow>
              <TableCell align="center">نام محصول</TableCell>
              <TableCell align="center">تعداد</TableCell>
              <TableCell align="center">قیمت واحد</TableCell>
              <TableCell align="center">قیمت کل</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsInCart.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  
                  <ArrowBackIosIcon
                    onClick={() =>
                      props.productQuantity("decrease", row.tagName)
                    }
                  />
                  {row.numbers}
                  <ArrowForwardIosIcon
                    onClick={() =>
                      props.productQuantity("increase", row.tagName)
                    }
                  />
                </TableCell>
                <TableCell align="center"> {row.price}</TableCell>
                <TableCell align="center">{row.numbers * row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>قیمت کل : {props.basketProps.cardCost}</p>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps, { productQuantity })(Cart);