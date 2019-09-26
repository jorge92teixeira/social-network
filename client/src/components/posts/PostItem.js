import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  auth,
  post,
  addLikeConnect,
  removeLikeConnect,
  deletePostConnect,
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <a href="profile.html">
        <img className="round-img" src={post.avatar} alt=""/>
        <h4>{post.name}</h4>
      </a>
    </div>
    <div>
      <p className="my-1">
        {post.text}
      </p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{post.date}</Moment>
      </p>
      <button onClick={() => addLikeConnect(post._id)} type="button" className="btn btn-light">
        <i className="fas fa-thumbs-up"></i> {' '}
        <span>
        {
          post.likes.length > 0 && (
            <span>{post.likes.length}</span>
          )
        }
        </span>
      </button>
      <button onClick={() => removeLikeConnect(post._id)} type="button" className="btn btn-light">
        <i className="fas fa-thumbs-down"></i>
      </button>
      <Link to={`/post/${post._id}`} className="btn btn-primary">
        Discussion {
          post.comments.length > 0 && (
            <span className='comment-count'>{post.comments.length}</span>
          )
        }
      </Link>
      {!auth.loading && post.user === auth.user._id && (
        <button onClick={() => deletePostConnect(post._id)} type="button" className="btn btn-danger">
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  </div>
);

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLikeConnect: PropTypes.func.isRequired,
  removeLikeConnect: PropTypes.func.isRequired,
  deletePostConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    auth: state.auth,
  }
);

export default connect(
  mapStateToProps,
  {
    addLikeConnect: addLike,
    removeLikeConnect: removeLike,
    deletePostConnect: deletePost,
  },
)(PostItem);