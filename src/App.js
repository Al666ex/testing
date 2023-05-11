import { useState } from 'react';
import {v4} from 'uuid'
import './App.css';
import {  useSelector } from 'react-redux';
import MyInput from './components/UI/MyInput/MyInput'
import {usePosts} from './hooks/usePosts'

function App() {  
  const customers = useSelector(state => state.customers)  
  const [query, setQuery] = useState('')
  const users = usePosts(query, customers) 

  return (
    <div className="App">
      <MyInput 
        placeholder='...search' 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {users.length ?
        users.map(item => 
          <div 
            key={v4()}
            className='post'
          >
            {item}
          </div>
        ) : <h2 style={{textAlign : 'center'}}>There are not users</h2>        
      }
    </div>
  );
}

export default App;
