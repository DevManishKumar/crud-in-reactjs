import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateContact } from "../reducer/ContactReducer";
import "./form.css";

const Edit = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state.contacts);
  const existingContact = contacts.filter((f) => f.id == id);
  const { name, phone } = existingContact[0];
  const [uname, setName] = useState(name);
  const [uphone, setPhone] = useState(phone);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateContact({
        id: id,
        name: uname,
        phone: uphone,
      })
    );

    navigate("/");
  };
  return (
    <div className="container">
      <h1>Edit Contact</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={uphone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <ul className="contact-list">
        {/* List items will be dynamically added using JavaScript */}
      </ul>
    </div>
  );
};
export default Edit;
