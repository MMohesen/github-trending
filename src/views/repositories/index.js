import React from "react";
import { connect } from "react-redux";
import { getList } from "../../actions/repositories";
import { List, Loader, RepoItem } from "../../components";

/**
 * Repositories Page
 * @param dispatch
 * @param repositories
 * @return {JSX.Element}
 */
const Repositories = ({ dispatch, repositories }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      await getRepositoriesList();
    })();
  }, []);

  React.useEffect(() => {
    setList(repositories.list);
  }, [repositories]);

  /**
   * Get Repositories List
   * @return {Promise<void>}
   */
  const getRepositoriesList = async () => {
    await dispatch(getList());
    await setIsLoading(false);
  };

  return (
    <div className="repositories-page">
      <List>
        {!!isLoading && <Loader />}
        {!isLoading &&
          list?.map((item, index) => <RepoItem item={item} key={`repo-item-${index}`} />)}
      </List>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mapStateToProps = ({ repositories }) => ({
  repositories,
});

// page component
export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
