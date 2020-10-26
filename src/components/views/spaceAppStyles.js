import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cad0d6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#cad0d6",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
    },
  },
  header: {
    fontWeight: "bold",
    fontSize: "xx-large",
    backgroundColor: "#cad0d6",
    paddingLeft: "30px",
  },
  footer: {
    position: "relative",
    display: "flex",
    fontSize: "medium",
    justifyContent: "center",
    width: "100%",
    borderTop: "1px solid hsla(0, 0%, 100%, 0.35)",
    zIndex: 10,
    height: "50px",
    alignItems: "center"
  },
}));
