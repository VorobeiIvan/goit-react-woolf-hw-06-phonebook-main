import { useSelector, useDispatch } from 'react-redux';

const ContactList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-item">
          {contact.name}: {contact.number}
          <button
            className="btn-del"
            onClick={() => onDelete(handleDeleteContact)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
