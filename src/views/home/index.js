import React from "react";

const Home = ({ history }) => {
  React.useEffect(() => {
    history.replace("/repositories");
  }, [history]);

  return <div className="home-page" />;
};

export default Home;
