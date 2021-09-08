import React from 'react';
import './App.css';
import Main from '../Main/Main';
import * as api from '../../utils/Api';

function App() {

  const [isSearch, setIsSearch] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [newUsers, setNewUsers] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    api.getInfo()
      .then((res) => {
        setResults(res.results);
        setNewUsers(res.results);
        console.log(res.results);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      })
  }, []);

  function debounce(f, ms) {
    let isCooldown = false;
    return function() {
      if (isCooldown) return;
      f.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
    };
  }
  // debounce(handlePostsSearch, 100000);

  // function debounce(callback, delay) {
  //   let timeout;
  //   return function () {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(callback, delay);
  //   }
  // }

  function handlePostsSearch(parametrs) {
    setIsSearch(false);
    const { input } = parametrs;
    const result = results.filter((x) => ((!input || (x.name.first.toLowerCase() + " " + x.name.last.toLowerCase()).indexOf(input.toLowerCase()) !== -1)));
    const news = result.map((results) => ({ ...results }));
    debounce(setNewUsers(news), 100000);
  };

  return (
    <div className="page">
      <Main
        loading={loading}
        results={newUsers}
        handleSearch={handlePostsSearch}
      />
    </div>
  );
}

export default App;