import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
    },
  };

  const [fields, setFields] = useState(initalState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <input
          id="title"
          name="title"
          placeholder="title"
          type="text"
          value={fields.title}
          onChange={handleFieldChange}
        />
        <button type="submit">Add</button>
      </form>
      <p>
        This is the add property page Enter property information and click
        submit to add a porperty to the database
      </p>
    </div>
  );
};

export default AddProperty;
