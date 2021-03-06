import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../redux/actions/profile';

const Experience = ({ experience, deleteExperienceConnect }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td className="hide-sm">
        {moment(exp.from).format('YYYY/MM/DD')} - {' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          moment(exp.from).format('YYYY/MM/DD')
        )}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteExperienceConnect(exp._id)}
        >Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { experiences }
        </tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperienceConnect: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteExperienceConnect: deleteExperience },
)(Experience);
