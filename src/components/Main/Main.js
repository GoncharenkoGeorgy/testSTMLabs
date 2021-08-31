import React from 'react';
import Users from '../Users/Users';
import './Main.css';

const Main = (props) => {

  const { loading, results, handleSearch } = props;

  return (
    <section className='main'>
      <Users
        loading={loading}
        results={results}
        handleSearch={handleSearch}
      />
    </section>
  );
}

export default Main;