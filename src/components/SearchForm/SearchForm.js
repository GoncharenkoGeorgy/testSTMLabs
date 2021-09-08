import React from 'react';
import Input from '../Input/Input';
import './SearchForm.css';

const SearchForm = (props) => {
  const { handleSearch } = props;

  const [input, setInput] = React.useState('');

  function handleChangeInput(e) {
    setInput(e.target.value);
  }

  function handleClearInput(e) {
    setInput("");
  }

  // function debounce(f, ms) {
  //   let isCooldown = false;
  //   return function() {
  //     if (isCooldown) return;
  //     f.apply(this, arguments);
  //     isCooldown = true;
  //     setTimeout(() => isCooldown = false, ms);
  //   };
  // }

  function debounce(callback, delay) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
    }
  }

  React.useEffect(() => {

    handleSearch({ input });

    //debounce(handleSearch({ input }), 10000);
    
  }, [input]);

  function handleSubmitInput(e) {
    e.preventDefault();
    setInput(input);
  }

  return (
    <div className='search'>
      <h3 className='search__title'>Поиск пользователей</h3>
      <form onSubmit={handleSubmitInput} className='search__form' noValidate>
        <Input
          inputFieldClassName='search__input'
          placeholder='Введите имя пользователя'
          name='search'
          type='text'
          onChange={handleChangeInput}
          value={input}
        />
        <button className="search__clear" onClick={handleClearInput}>Очистить поле ввода</button>
      </form>
    </div>
  );
}

export default SearchForm;