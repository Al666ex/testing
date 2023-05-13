import { useState } from 'react';
import './App.css';
import {usePosts} from './hooks/usePosts';
import QueryString from './components/QueryString/QueryString';
import Posts from './components/Posts/Posts';
import { debounce } from './utils';

const inputTimeout = 100
function App() {    
  const [query, setQuery] = useState('');  
  const users = usePosts(query)

  return (
    <div className="App">
      <QueryString 
        query={query} 
        setQuery={debounce(setQuery,inputTimeout)} 
      />
      <Posts 
        users={users}
        text='There are not users' 
      />
    </div>
  );
}

export default App;
