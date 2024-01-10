import arrow from '../../assets/images/icon-arrow.svg';
import Input from './Input';
const Form = () => {
  return (
    <form action='/' className='mainForm'>
      <Input type='day' />
      <Input type='month' />
      <Input type='year' />

      <button>
        <img src={arrow} />
      </button>
    </form>
  );
};

export default Form;
