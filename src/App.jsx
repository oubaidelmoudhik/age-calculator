import './App.css';
import Form from './components/Form';
import Results from './components/resutls';
import arrow from '../assets/images/icon-arrow.svg';
import { useState } from 'react';
import { calculateAge } from './helpers/calculateAge';
import { validateDate } from './helpers/validateDate';

function App() {
  const [day, setDay] = useState({
    empty: true,
    value: '',
  });
  const [month, setMonth] = useState({
    empty: true,
    value: '',
  });
  const [year, setYear] = useState({
    empty: true,
    value: '',
  });
  const [age, setAge] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const birthdate = `${year.value}-${month.value}-${day.value}`;
    const dateValidation = validateDate(day.value, month.value, year.value);
    setAge(calculateAge(birthdate));
    setFormSubmitted(true);
  }
  return (
    <>
      <div className='container'>
        <form action='/' className='mainForm' onSubmit={handleSubmit}>
          <div
            className={`inputContainer ${
              day.empty && formSubmitted ? 'empty' : undefined
            }`}
          >
            <label htmlFor='day'>Day</label>
            <input
              id='day'
              type='number'
              min={1}
              max={31}
              placeholder='DD'
              pattern='\d{1,2}'
              value={day.value}
              onChange={(e) =>
                setDay({
                  empty: e.target.value === '',
                  value: e.target.value,
                })
              }
            />
          </div>
          <div
            className={`inputContainer ${
              month.empty && formSubmitted ? 'empty' : undefined
            }`}
          >
            <label htmlFor='month'>Month</label>
            <input
              id='month'
              type='number'
              min={1}
              max={12}
              placeholder='MM'
              pattern='\d{1,2}'
              value={month.value}
              onChange={(e) =>
                setMonth({
                  empty: e.target.value === '',
                  value: e.target.value,
                })
              }
            />
          </div>
          <div
            className={`inputContainer ${
              year.empty && formSubmitted ? 'empty' : undefined
            }`}
          >
            <label htmlFor='year'>Year</label>
            <input
              id='year'
              type='number'
              min={1950}
              max={2024}
              placeholder='YYYY'
              pattern='\d{1,4}'
              value={year.value}
              onChange={(e) =>
                setYear({
                  empty: e.target.value === '',
                  value: e.target.value,
                })
              }
            />
          </div>

          <button>
            <img src={arrow} />
          </button>
        </form>
        <div className='results'>
          <div className='years'>
            <span>{age.years >= 0 ? age.years : '- -'}</span> years
          </div>
          <div className='months'>
            <span>{age.months >= 0 ? age.months : '- -'}</span>{' '}
            {age.months == 1 ? 'month' : 'months'}
          </div>
          <div className='days'>
            <span>{age.days >= 0 ? age.days : '- -'}</span>{' '}
            {age.days == 1 ? 'day' : 'days'}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
