import { useDispatch, useSelector } from 'react-redux';
import { setDay } from '../rtk/slices/daySlice';
import { setMonth } from '../rtk/slices/monthSlice';
import { setYear } from '../rtk/slices/yearSlice';
import { useEffect, useRef } from 'react';

function Input({ type }) {
  let state;
  const dispatch = useDispatch();
  let id, min, max, placeholder, changeVal;
  switch (type) {
    case 'day':
      state = useSelector((state) => state.day);
      changeVal = (value) => {
        dispatch(setDay(+value.nativeEvent.data));
      };
      id = 'day';
      [min, max] = [1, 31];
      placeholder = 'DD';
      break;
    case 'month':
      state = useSelector((state) => state.month);
      changeVal = (value) => {
        dispatch(setMonth(+value.nativeEvent.data));
      };
      id = 'month';
      [min, max] = [1, 12];
      placeholder = 'MM';
      break;
    case 'year':
      state = useSelector((state) => state.year);
      changeVal = (value) => {
        dispatch(setYear(+value.nativeEvent.data));
      };
      id = 'year';
      [min, max] = [1950, 2024];
      placeholder = 'YYYY';
      break;

    default:
      break;
  }

  return (
    <>
      <div className='inputContainer'>
        <label htmlFor={id}>Day</label>
        <input
          id={id}
          type='number'
          min={min}
          max={max}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Input;
