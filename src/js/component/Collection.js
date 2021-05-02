/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CollectionItem from './CollectionItem';
import { fetchCollection } from '../thunks/book';

export const Collection = (
  {
    collection,
    fetchCollection,
    username,
  },
) => {
  useEffect(() => {
    if (collection.length === 0) fetchCollection(username);
  }, [fetchCollection, username, collection.length]);

  return (
    <div>
      {collection && collection.length > 0 ? (
        <p>
          {collection.length}
          {' '}
          book(s) found in the store
        </p>
      ) : null}
      {collection.map((item, index) => (
        <CollectionItem
          key={item.title + index}
          item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  collection: state.collection,
  username: state.currentUser.data.username,
});

Collection.propTypes = {
  collection: PropTypes.instanceOf(Object).isRequired,
  fetchCollection: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  {
    fetchCollection,
  },
)(Collection);
