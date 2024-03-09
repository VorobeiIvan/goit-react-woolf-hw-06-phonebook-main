import { useDispatch, useSelector } from 'react-redux';
import { changeNumber } from '../store/slice';

const NumberInput = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.number);
  const handleChangeNumber = event => {
    dispatch(changeNumber(event.target.value));
  };

  return (
    <div className="wrapper">
      <label className="label">Number</label>
      <input
        className="input"
        type="tel"
        name="number"
        value={value}
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter your number ( +380(67)-000-00-00 ) "
      />
    </div>
  );
};

export default NumberInput;
