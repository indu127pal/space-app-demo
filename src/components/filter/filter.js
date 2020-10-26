import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { styles } from "./filterStyles";
import { Button, withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { useRouteMatch } from "react-router-dom";
import { fetchData } from '../../action';
import { filterOptions } from "../../contants/filterContants";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    borderRadius: 5,
    width: 75,
    margin: "10px auto",
    "&:hover": {
      backgroundColor: green[700],
    },
    "&.active": {
      backgroundColor: green[900],
      color: `${theme.palette.secondary.contrastText}!important`,
      transition: "border-radius .15s cubic-bezier(0.4,0.0,0.2,1)",
    },
  },
}))(Button);

const url = `https://api.spacexdata.com/v3/launches`;

function Filter(props) {
  const { fetchData } = props;
  const classes = styles();
  const { years, boolOptions } = filterOptions;
  const [year, setYear] = useState(null);
  const [launch, setLaunch] = useState(null);
  const [landing, setLanding] = useState(null);

  const match = useRouteMatch();
  
  const handleFilterYearCLick = (selected, type) => () => {
    const paramVal = { ...match.params };
    if (type === "year") {
      setYear(selected);
      paramVal.year = selected;
    }
    if (type === "land") {
      setLanding(selected);
      paramVal.land = selected;
    }
    if (type === "luanch") {
      setLaunch(selected);
      paramVal.luanch = selected;
    }
  };

  useEffect(() => {
    let params = { limit: 100 };
    if (year) {
      params = { ...params, launch_year: year };
    }
    if (launch !== null) {
      params = { ...params, launch_success: launch };
    }
    if (landing !== null) {
      params = { ...params, land_success: landing };
    }
    fetchData(url, params);
  }, [fetchData, landing, launch, year]);

  return (
    <div className={classes.filterList}>
      Filters
      <section className={classes.filterListWrapper}>
        <label className={classes.filterListHeader}>Launch Year</label>
        <aside className={classes.filterListContent}>
          {years &&
            years.map((yea) => {
              return (
                <div key={yea} className={classes.yearButton}>
                  <ColorButton
                    variant="contained"
                    color="primary"
                    key={yea}
                    className={year === yea ? "active" : false}
                    onClick={handleFilterYearCLick(yea, "year")}
                  >
                    {yea}
                  </ColorButton>
                </div>
              );
            })}
        </aside>
      </section>
      <section className={classes.filterListWrapper}>
        <label className={classes.filterListHeader}>Successful Launch</label>
        <aside className={classes.filterListContent}>
          {boolOptions &&
            boolOptions.map((option) => (
              <div key={option} className={classes.yearButton}>
                <ColorButton
                  variant="contained"
                  color="primary"
                  key={option}
                  className={launch === option ? "active" : false}
                  onClick={handleFilterYearCLick(option, "luanch")}
                >
                  {option}
                </ColorButton>
              </div>
            ))}
        </aside>
      </section>
      <section className={classes.filterListWrapper}>
        <label className={classes.filterListHeader}>Successful Landing</label>
        <aside className={classes.filterListContent}>
          {boolOptions &&
            boolOptions.map((option) => (
              <div key={option} className={classes.yearButton}>
                <ColorButton
                  variant="contained"
                  color="primary"
                  key={option}
                  className={landing === option ? "active" : false}
                  onClick={handleFilterYearCLick(option, "land")}
                >
                  {option}
                </ColorButton>
              </div>
            ))}
        </aside>
      </section>
    </div>
  );
}

const mapDispatchToProps = {
  fetchData
}
export default connect(null, mapDispatchToProps)(Filter);
