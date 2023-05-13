import { useState } from 'react';
import './App.css';
import {usePosts} from './hooks/usePosts';
import QueryString from './components/QueryString/QueryString';
import Posts from './components/Posts/Posts';

function App() {    
  const [query, setQuery] = useState('');
  const users = usePosts(query);

  return (
    <div className="App">
      <QueryString 
        query={query} 
        setQuery={setQuery} 
      />
      <Posts 
        users={users}
        text='There are not users' 
      />
    </div>
  );
}

export default App;
