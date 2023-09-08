import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducer/UserReducer";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name, email })
    );
    navigate("/");
  };
  return (
    <div className="container">
      <h1>Add New User</h1>
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
          <label htmlFor="email">Email</label>
          <input
            type="tel"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
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
