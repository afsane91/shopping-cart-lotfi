import React from 'react';
import banner from '../images/banner.png'
import book1 from "../images/book1.png";
import book2 from "../images/book2.png";
import book3 from "../images/book3.png";
import { connect } from "react-redux";
import { addToBasket } from "../actions/addAction";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
}));

const Home = (props) =>{
  const classes = useStyles();
    return (
      // <div className="row">
      //   <div className="image">
      //     <img src={book1} alt="" />
      //     <h3>بیشعوری</h3>
      //     <h3>15000</h3>
      //     <a href="#" onClick={() => props.addToBasket("bishori")}>
      //       اضافه به سبد خرید
      //     </a>
      //   </div>
      //   <div className="image">
      //     <img src={book2} alt="" />
      //     <h3>مغازه خودکشی</h3>
      //     <h3>17000</h3>
      //     <a href="#" onClick={() => props.addToBasket("maghaze")}>
      //       اضافه به سبد خرید
      //     </a>
      //   </div>
      //   <div className="image">
      //     <img src={book3} alt="" />
      //     <h3>جزء از کل</h3>
      //     <h3>12000</h3>
      //     <a href="#" onClick={() => props.addToBasket("jozazkol")}>
      //       اضافه به سبد خرید
      //     </a>
      //   </div>

      <Container maxWidth="lg" style={{ marginTop: "1rem" }}>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={banner}
                  title="ملت عشق"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ملت عشق
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    8000
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => props.addToBasket("bishori")}
                >
                  اضافه به سبد خرید
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={book1}
                  title="ملت عشق"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   جزء از کل
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    15000
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => props.addToBasket("bishori")}
                >
                  اضافه به سبد خرید
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={book2}
                  title="ملت عشق"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    مغازه خودکشی  
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    17000
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => props.addToBasket("maghaze")}
                >
                  اضافه به سبد خرید
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={book3}
                  title="ملت عشق"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    بیشعوری
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    12000
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => props.addToBasket("jozazkol")}
                >
                  اضافه به سبد خرید
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
    
}
export default connect(null, {addToBasket})(Home);
