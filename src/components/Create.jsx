import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../reducer/ContactReducer";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Create = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addContact({ id: contacts[contacts.length - 1].id + 1, name, phone })
    );
    navigate("/");
  };
  return (
    <div className="container">
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
      <ul className="contact-list">
        {/* List items will be dynamically added using JavaScript */}
      </ul>
    </div>
  );
};
export default Create;
