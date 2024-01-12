import './App.css';
import Form from './components/Form';
import Results from './components/resutls';
import arrow from '../assets/images/icon-arrow.svg';
import { useState } from 'react';
function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    const lastMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      birthDate.getDate()
    );
    days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
    months--;
  }

  if (months < 0) {
    months = 12 + months;
    years--;
  }

  return {
    years: years,
    months: months,
    days: days,
  };
}
function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    const birthdate = `${year}-${month}-${day}`;
    setAge(calculateAge(birthdate));
    console.log(age);
  }
  return (
    <>
      <div className='container'>
        <form action='/' className='mainForm' onSubmit={handleSubmit}>
          <div className='inputContainer'>
            <label htmlFor='day'>Day</label>
            <input
              id='day'
              type='number'
              min={1}
              max={31}
              placeholder='DD'
              pattern='\d{1,2}'
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor='month'>Month</label>
            <input
              id='month'
              type='number'
              min={1}
              max={12}
              placeholder='MM'
              pattern='\d{1,2}'
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor='year'>Year</label>
            <input
              id='year'
              type='number'
              min={1950}
              max={2024}
              placeholder='YYYY'
              pattern='\d{1,4}'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <button>
            <img src={arrow} />
          </button>
        </form>
        <div className='results'>
          <div className='years'>
            <span>{age.years ? age.years : '- -'}</span> years
          </div>
          <div className='months'>
            <span>{age.months ? age.months : '- -'}</span>{' '}
            {age.months == 1 ? 'month' : 'months'}
          </div>
          <div className='days'>
            <span>{age.days ? age.days : '- -'}</span>{' '}
            {age.days == 1 ? 'day' : 'days'}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
