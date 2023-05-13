
import MyInput from "../UI/MyInput/MyInput";

const QueryString = ({query, setQueryString}) => 
 <MyInput 
    placeholder='...search' 
    value={query}
    onChange={(e) => setQueryString(e.target.value)}
  />    

export default QueryString;