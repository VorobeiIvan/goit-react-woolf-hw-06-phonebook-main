import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import NameInput from './NameInput';
import NumberInput from './NumberInput';
import { addContact, reset } from '../store/slice';
import { selectContactsState } from '../store/slice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContactsState);

  const formSubmitHandler = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    if (
      contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('Contact with this name or number already exists!');
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    dispatch(addContact(contact));
    dispatch(reset());
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <NameInput />
      <NumberInput />
      <button className="btn-add" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
