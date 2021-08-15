import React from "react";
import { connect } from "react-redux";
import { getDevList } from "../../actions/developers";
import { List, Loader, DevItem } from "../../components";

/**
 * Developers Page
 * @param dispatch
 * @param developers
 * @return {JSX.Element}
 */
const Developers = ({ dispatch, developers }) => {
  const [list, setList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      await getRepositoriesList();
    })();
  }, []);

  React.useEffect(() => {
    setList(developers.list);
  }, [developers]);

  /**
   * Get Repositories List
   * @return {Promise<void>}
   */
  const getRepositoriesList = async () => {
    await dispatch(getDevList());
    await setIsLoading(false);
  };

  return (
    <div className="repositories-page">
      <List>
        {!!isLoading && <Loader />}
        {!isLoading &&
          list?.map((item, index) => <DevItem item={item} key={`repo-item-${index}`} />)}
      </List>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mapStateToProps = ({ developers }) => ({
  developers,
});

// page component
export default connect(mapStateToProps, mapDispatchToProps)(Developers);
