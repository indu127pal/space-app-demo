import React from "react";
import SpaceCard from "../card/spaceCard";
import SpaceCardSkeleton from "./spaceCardSkeleton";
import { makeStyles } from "@material-ui/core";
import NoData from "../views/noData";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
  },
}));

function SpaceList({ launchData, loading }) {
  const classes = useStyles();
  const spaceLaunches = launchData.length > 1 ? (
    Array.isArray(launchData) &&
    launchData.map((launch) => {
      return (
        <SpaceCard key={launch.flight_number} data={launch} loading={loading} />
      );
    })
  ) : (
    <NoData />
  );
// Skeleton Component when data is fetching
  const spaceLaunchesSkeleton = Array.from(
    { length: 25 },
    (v, i) => i
  ).map((i) => <SpaceCardSkeleton key={i} />);
  return (
    <div className={classes.root}>
      {loading ? spaceLaunchesSkeleton : spaceLaunches}
    </div>
  );
}

export default React.memo(SpaceList);
