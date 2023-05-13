import styled from '@emotion/styled';
const MyInputEmotion = styled.input`
    font-size: large;
    padding: 10px 15px;
    border: 1px solid teal;
    color: teal;
    border-radius: 5px;
    width: 600px;
    margin-top: 10%;
`;

const MyInput = (props) => <MyInputEmotion  {...props} />

export default MyInput;