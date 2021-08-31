import React from 'react';
import User from '../User/User';
import './Users.css';
import SearchForm from '../SearchForm/SearchForm';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

const users = (props) => {

  const { loading, results, handleSearch } = props;

  return (
    <div className='users'>
      <div className='users__top'>
        <div className='users__header'>
          <h2 className='users__name'>Список пользователей</h2>
        </div>
        <SearchForm results={results} handleSearch={handleSearch} />
        {(loading)
          ? <Preloader />
          : (results.length === 0)
            ? <NotFound />
            : <table className='users__table'>
              <tbody>
                <tr>
                  <th className='users__head_slot'>Name</th>
                  <th className='users__head_slot'>Picture</th>
                  <th className='users__head_slot'>Location</th>
                  <th className='users__head_slot'>Email</th>
                  <th className='users__head_slot'>Phone</th>
                  <th className='users__head_slot'>Registered data</th>
                </tr>
                {results.map((result, i) => (
                  <User key={i} result={result} results={results.results} />
                ))}
              </tbody>
            </table>
        }
      </div>
    </div>

  );
}

export default users;