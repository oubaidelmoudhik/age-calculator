import './App.css';
import arrow from '../assets/images/icon-arrow.svg';
import Input from './components/Input';

function App() {
  return (
    <>
      <div className='container'>
        <form action='/' className='mainForm'>
          <Input type='day' />
          <Input type='month' />
          <Input type='year' />
          <button>
            <img src={arrow} />
          </button>
        </form>
        <div className='results'>
          <div className='years'>
            <span>- -</span> years
          </div>
          <div className='months'>
            <span>- -</span> months
          </div>
          <div className='days'>
            <span>- -</span> days
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
