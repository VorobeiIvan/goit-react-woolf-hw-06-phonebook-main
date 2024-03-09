import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => {
    const filter = state.contacts.filter.toLowerCase();
    return state.contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-item">
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
