import { makeStyles } from "@material-ui/styles";

export const styles = makeStyles(theme=>({
         filterList: {
           backgroundColor: "rgb(253, 249, 244)",
           border: "1px solid #c2c3c4",
           borderRadius: "8px",
           width: "80%",
           padding: "20px",
           fontSize: "18px",
           fontWeight: "bold",
           margin: "10px",
            [theme.breakpoints.up("sm")]:{
              width:"auto"
            }
         },
         filterListWrapper: {
           display: "flex",
           justifyContent: "space-around",
           flexDirection: "column",
           alignItems: "center",
         },
         filterListContent: {
           display: "flex",
           flexDirection: "row",
           flexWrap: "wrap",
           width: "200px",
           justifyContent: "space-between",
         },
         filterListHeader: {
           fontSize: "14px",
           fontWeight: "normal",
           margin: "5px",
           width: "80%",
          //  backgroundColor: "#cad0d6",
           borderBottom: "2px solid #cad0d6",
           display: "flex",
           justifyContent: "center"
         },
         yearButton:{
           display:"flex",
           width:100
         },
       }));