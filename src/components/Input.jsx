function Input({ type }) {
  let id, min, max, placeholder;
  switch (type) {
    case 'day':
      id = 'day';
      [min, max] = [1, 31];
      placeholder = 'DD';
      break;
    case 'month':
      id = 'month';
      [min, max] = [1, 12];
      placeholder = 'MM';
      break;
    case 'year':
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
