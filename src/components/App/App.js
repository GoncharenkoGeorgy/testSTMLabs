import React from 'react';
import './App.css';
import Main from '../Main/Main';
import * as api from '../../utils/Api';

function App() {

  const [isSearch, setIsSearch] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // function handlePostsSearch(parametrs) {
  //   setIsSearch(false);

  //   api
  //     .getSearchPosts({ parametrs })
  //     .then((res) => {
  //       console.log(res);
  //       const news = res.map((results) => ({ ...results }));
  //      setResults(news);
  //       localStorage.setItem('news', JSON.stringify(news));
  //       setIsSearch(true);
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка при загрузке новостей: ${err}`);
  //     })
  // };
  
  React.useEffect(() => {
    setLoading(true);
    api.getInfo()
      .then((res) => {
        console.log(res.results);
        setResults(res.results);
      })
      .catch((err) => console.log(err))
      .finally(()=> {
        setLoading(false);
      })
  }, []);

  function handlePostsSearch(parametrs) {
    setIsSearch(false);
    const {input} = parametrs;

    console.log(results);
    console.log(input);
    //const result = results.filter((x) => ((!input || x.name.first.indexOf(input) !== -1) || (!input || x.name.last.indexOf(input) !== -1)));
    //console.log(result);
    const result = results.filter(function (x) {
      return x.name.first.toLowerCase().search(input.toLowerCase()) !== -1;
    });
    if (input === 0) {
      return results;
    }
    const news = result.map((results) => ({ ...results }));
    console.log(news);
    setResults(news);
  };

  return (
    <div className="page">

      <Main
        loading={loading}
        results={results}
        handleSearch={handlePostsSearch}
      />

    </div>
  );
}

export default App;