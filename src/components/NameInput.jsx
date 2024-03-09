import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store/slice';
import { selectContactsState } from '../store/slice';

const NameInput = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectContactsState);
  const handleChangeName = event => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className="wrapper">
      <label className="label">Name</label>
      <input
        className="input"
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter your name (Alex)"
      />
    </div>
  );
};

export default NameInput;
