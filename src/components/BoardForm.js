import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './BoardForm.css';

const kDefaultFormData = {
  title: '',
  owner: '',
};

const BoardForm = function (props) {
  const [formState, setFormState] = useState(kDefaultFormData);

  /* handleNewData: update formState as user types. 
  Args: event: onChange event.
  Sets: formState */
  const handleNewData = function (event) {
    const dataValue = event.target.value;
    const dataField = event.target.name;

    const newFormData = { ...formState, [dataField]: dataValue };
    setFormState(newFormData);
  };

  /* handleSubmit: pass data back to App and reset form
  Args: event
  Sets: formState
  Calls: props.handleNewBoard */
  const handleSubmit = function (event) {
    event.preventDefault();
    props.handleNewBoard(formState);
    setFormState(kDefaultFormData);
  };

  return (
    <div id="board-form-component">
      <h2>Create a New Board</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Board Title</label>
          <input
            type="type"
            id="title"
            name="title"
            value={formState.title}
            onChange={handleNewData}
          />
        </div>
        <div>
          <label htmlFor="owner">Owner's Name</label>
          <input
            type="type"
            id="owner"
            name="owner"
            value={formState.owner}
            onChange={handleNewData}
          />
        </div>
        <div>
          <input type="submit" value="Add New Board"></input>
        </div>
      </form>
      <button>Hide New Board Form</button>
    </div>
  );
};

export default BoardForm;