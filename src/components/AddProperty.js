import React, { useState } from "react";
import postData from "../requests/postData";
import Alert from "./Alert";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Leeds",
      type: "Flat",
      bedrooms: "2",
      price: "0",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    postData(fields, setAlert);
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <p>
        Enter property information and click submit to add property to database.
      </p>
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleAddProperty}>
        <input
          id="title"
          name="title"
          placeholder="title"
          type="text"
          value={fields.title}
          onChange={handleFieldChange}
        />
        <div className="form-field">
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Leeds">Leeds</option>
              <option value="Manchester">Manchester</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="type">
            House Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              placeholder="Bedrooms"
              type="number"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              placeholder="100000"
              type="number"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            email
            <input
              id="email"
              name="email"
              placeholder="example@gmail.com"
              type="text"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="button-container">
          <div className="button-form-field">
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
      <p>
        This is the add property page Enter property information and click
        submit to add a porperty to the database
      </p>
    </div>
  );
};

export default AddProperty;
