import React, { useState } from 'react';
import NameInput from './NameInput';
import NumberInput from './NumberInput';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formSubmitHandler = (event, data) => {
    event.preventDefault();

    onSubmit({ name, number });
    reset();

    const { name } = data;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { ...data, id: nanoid() };
    dispatch(addContact(newContact));
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <NameInput value={name} onChange={handleChange} />
      <NumberInput value={number} onChange={handleChange} />
      <button className="btn-add" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
