import {v4} from 'uuid';
import styled from '@emotion/styled';
import PostItem from '../PostItem/PostItem';

const MyH2Emotion = styled.h2`
text-align : center;
font-size: 2em;
font-family: Tahoma, Verdana, sans-serif;
color:teal;
`;

const Posts = ({users,text}) => 
users.length ?
    users.map(post => <PostItem key={v4()} post={post} /> ) : 
        <MyH2Emotion>{text}</MyH2Emotion>     

export default Posts;