// src/components/Contact/Contact.jsx
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteContact(contact.id));
  }

  return (
    <div className={css.card}>
      <div className={css.item}>
        <div className={css.name}>👤 {contact.name}</div>
        <div className={css.number}>📞 {contact.number}</div>
      </div>
      <button type="button" className={css.delete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
