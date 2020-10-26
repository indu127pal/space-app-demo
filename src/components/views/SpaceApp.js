import React,{ Suspense } from 'react';
import { connect } from 'react-redux';
import {styles} from './spaceAppStyles';

const SpaceList = React.lazy(() => import("../list/spaceList"));
const Filter = React.lazy(()=> import("../filter/filter"))

function SpaceApp(props){
  const { spaceData = {}, loading } = props;
  const classes = styles()
  return (
    <>
      <header className={classes.header}>SpaceEX Launch Programs</header>
      <main className={classes.root}>
           <Suspense fallback={<div>Loading...</div>}>
        <Filter />
        <SpaceList launchData={spaceData} loading={loading} />
          </Suspense>
      </main>
      <footer className={classes.footer}>Developed by: Indu Pal</footer>
    </>
  );
}

const mapStateToProps = (state) => {
  const { spaceData = {}, loading } = state;
  return {
    spaceData,
    loading
  };
};

export default connect(mapStateToProps, null)(SpaceApp);