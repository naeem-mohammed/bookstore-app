/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const CollectionItem = props => {
  const { item } = props;
  const {
    title, authors, categories, description, imageLinks, previewLink,
  } = item;

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Modal
        ariaHideApp={false}
        className="modal"
        overlayClassName="overlay-modal"
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Book Details">
        <div className="book-image">
          <img src={imageLinks.thumbnail} alt="Thumbnail not found" />
        </div>
        <h4 className="genre">{categories ? [...categories].join(' , ') : null}</h4>
        <h3 className="title">{title}</h3>
        <h4 className="description">{description}</h4>
        {authors ? (
          <p>
            Authored by:&nbsp;
            {' '}
            {[...authors].join(' , ')}
            {' '}
          </p>
        ) : null}
        {previewLink ? (
          <a href={previewLink} target="_blank" rel="noopener noreferrer">
            Click here to view the book
          </a>
        ) : null}
      </Modal>
      <span onClick={toggleModal}>
        <div className="card">
          <div className="card-body">
            <div className="columns">
              <div className="book-image">
                <img src={imageLinks.thumbnail} alt="Thumbnail not found" />
              </div>
              <div className="book-info">
                <h4 className="genre">{categories ? [...categories].join(' , ') : null}</h4>
                <h3 className="title">{title}</h3>
                {authors ? (
                  <p>
                    Authored by:&nbsp;
                    {' '}
                    {[...authors].join(' , ')}
                    {' '}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default CollectionItem;
