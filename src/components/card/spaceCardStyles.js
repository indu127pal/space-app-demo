import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    maxWidth: 345,
    cursor: "default",
    // height:"100%",
    margin: "10px",
    padding: "16px",
    borderRadius: 8,
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.up("lg")]: { width: "22%" },
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    }
  },
  media: {
    height: 200,
    objectFit: "scale-down",
    textAlign: "center",
    backgroundColor: "#afa6a61f"
  },
  content: {
    padding: "16px 0px"
  },
  title_text: {
    textDecoration: "none",
    cursor: "pointer"
  },
  section: {
    display: "flex",
    marginBottom: "5px",
  },
  heading: {
    fontSize: "1.0rem",
    fontWeight: "bold",
    color: "#002D62"
  },
  subheader: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    paddingRight: "2px",
  },
  resultText: {
    fontSize: "0.8rem",
    marginLeft: "2px",
    marginTop: "1px",
    color: "#034694"
  },
  listType: {
    color: "#034694",
    paddingLeft: "24px"
  },
  listStyle: {
    paddingBottom: 6,
  }
}));
