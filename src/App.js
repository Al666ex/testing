import { useEffect, useMemo, useState } from 'react';
import './App.css';
import {usePosts} from './hooks/usePosts';
import QueryString from './components/QueryString/QueryString';
import Posts from './components/Posts/Posts';
import { debounce, getURLParam } from './utils';

const inputTimeout = 100
function App() {    
  const [query, setQuery] = useState('');  
  const users = usePosts(query);

  const getUrlQuery = () => {
      let queryParam = getURLParam('query'); 
      queryParam && setQuery(queryParam);
  };

  useEffect(() => {
    getUrlQuery();
  },[]);

  const setURLParam = () => {
    const url = "?query="+encodeURI(query);
    window.history.pushState('', '', url);
  };

  useEffect(setURLParam,[query]);

  return (
    <div className="App">
      <QueryString 
        query={query} 
        setQueryString={debounce(setQuery,inputTimeout)} 
      />
      <Posts 
        users={users}
        text='There are not users' 
      />
    </div>
  );
}

export default App;
