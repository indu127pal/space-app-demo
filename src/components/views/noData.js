import React from 'react'
import nodata from '../img/404.jpg';
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: "10px",
    margin: "10px",
    borderRadius: 5,
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.up("lg")]: { width: "22%" },
  },
  media: {
    // height: 200,
    backgroundSize: "cover",
    width:"85%",
    // objectFit: "contain",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: { width: "80vw" },
  },
}));

 export default function NoData(){
  const classes = useStyles()
 return (
   <div className={classes.root}>
     <img className={classes.media} src={nodata} alt="no data" />
   </div>
 );
}