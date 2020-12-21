import { useQuery } from "@apollo/client";
import { withRouter } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { SEARCH } from "./SearchQueries";

export default withRouter(({ location }) => {
  const { search } = location;
  const term = search.split("=")[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: !term,
    variables: { term },
  });
  return (
    <SearchPresenter
      loading={loading}
      posts={data?.searchPost}
      users={data?.searchUser}
      term={term}
    />
  );
});
