import React from 'react';
import './style.css';
import Loading from '../Loading';
import { ButtonUnobtrusive } from '../Button';

const FetchMore = ({
  variables,
  updateQuery,
  fetchMore,
  children,
  loading,
  hasNextPage
}) => (
  <div className="FetchMore">
    {loading ? (
      <Loading />
    ) : (
      hasNextPage && (
        <ButtonUnobtrusive
          className="FetchMore-button"
          onClick={() => fetchMore({ variables, updateQuery })}
        >
          More {children}
        </ButtonUnobtrusive>
      )
    )}
  </div>
);

export default FetchMore;
