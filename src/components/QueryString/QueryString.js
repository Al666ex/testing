
import MyInput from "../UI/MyInput/MyInput";

const QueryString = ({query, setQuery}) => 
 <MyInput 
    placeholder='...search' 
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />    

export default QueryString;