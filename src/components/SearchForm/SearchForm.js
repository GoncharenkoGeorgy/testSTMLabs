import React from 'react';
import Input from '../Input/Input';
import './SearchForm.css';

const SearchForm = (props) => {
  const { handleSearch, results } = props;

  const [input, setInput] = React.useState('');

  function handleChangeInput(e) {
    setInput(e.target.value);
  }

  function handleClearInput(e) {
    setInput("");
  }

  React.useEffect(() => {

    // const result = results.filter((x) => ((!input || x.name.first.indexOf(input) !== -1) || (!input || x.name.last.indexOf(input) !== -1)))
    // const news = result.map((results) => ({ ...results }));
    // return news;

    handleSearch({ input });

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
          placeholder='Введите пост'
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