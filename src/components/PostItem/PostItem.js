import styled from "@emotion/styled";

const MyDivEmotion = styled.div`
padding: 10px ;
margin: 10px;
border: 2px solid teal; 
border-radius: 5px;    
`;

const PostItem = ({post}) => <MyDivEmotion > {post} </MyDivEmotion>

export default PostItem;