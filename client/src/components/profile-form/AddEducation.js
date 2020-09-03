import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from './../../actions/profile';
import { Link, withRouter } from 'react-router-dom';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setformData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 class='large text-primary'>Add Your Education</h1>
      <p class='lead'>
        <i class='fas fa-code-branch'></i> Add any school or bootcamp you have
        attended
      </p>
      <small>* = required field</small>
      <form
        class='form'
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div class='form-group'>
          <input
            value={degree}
            onChange={(e) => onChange(e)}
            type='text'
            placeholder='* Degree'
            name='degree'
            required
          />
        </div>
        <div class='form-group'>
          <input
            value={school}
            onChange={(e) => onChange(e)}
            type='text'
            placeholder='School'
            name='school'
            required
          />
        </div>
        <div class='form-group'>
          <input
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
            type='text'
            placeholder='Field Of Study'
            name='fieldofstudy'
          />
        </div>
        <div class='form-group'>
          <h4>From Date</h4>
          <input
            value={from}
            onChange={(e) => onChange(e)}
            type='date'
            name='from'
          />
        </div>
        <div class='form-group'>
          <p>
            <input
              checked={current}
              value={current}
              onChange={(e) => {
                setformData({
                  ...formData,
                  current: !current,
                });
                toggleDisabled(!toDateDisabled);
              }}
              type='checkbox'
              name='current'
              value=''
            />{' '}
            Current Education
          </p>
        </div>
        <div class='form-group'>
          <h4>To Date</h4>
          <input
            value={to}
            onChange={(e) => onChange(e)}
            type='date'
            name='to'
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div class='form-group'>
          <textarea
            value={description}
            onChange={(e) => onChange(e)}
            name='description'
            cols='30'
            rows='5'
            placeholder='Program Description'
          ></textarea>
        </div>
        <input type='submit' class='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
