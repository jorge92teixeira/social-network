import React, { Fragment, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../redux/actions/profile';

const AddEducation = ({ addEducationConnect, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    // fieldOfStudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });
  const [toDateDisable, toggleDisable] = useState(false);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addEducationConnect(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">
       Add You Education
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or bootcamp you have atended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="* School" name="school" value={formData.school} onChange={(e) => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Degree" name="degree" value={formData.degree} onChange={(e) => onChange(e)} required />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={formData.from} onChange={(e) => onChange(e)} />
        </div>
         <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value={formData.current}
              checked={formData.current}
              onChange={() => {
                setFormData({ ...formData, current: !formData.current });
                toggleDisable(!toDateDisable);
              }}
            />{' '} Current School
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={formData.to}
            onChange={(e) => onChange(e)}
            disabled={ toDateDisable ? 'disabled' : '' }
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={formData.description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducationConnect: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addEducationConnect: addEducation },
)(withRouter(AddEducation));
