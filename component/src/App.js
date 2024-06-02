//Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import {  Route, Routes, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/ 
  @media all and (min-width:1024px) and (max-width:1279px) { 
    /* 스타일 입력 */
    background-color: pink;
  } 

  /* 테블릿 가로 (해상도 769px ~ 1023px)*/ 
  @media all and (min-width:769px) and (max-width:1023px) { 
    /* 스타일 입력 */
    background-color: mediumaquamarine;
  } 

  /* 모바일 가로 & 테블릿 세로 (해상도 481px ~ 768px)*/ 
  @media all and (min-width:481px) and (max-width:768px) {
    /* 스타일 입력 */
    background-color: steelblue;
  } 

  /* 모바일 세로 (해상도 ~ 480px)*/ 
  @media all and (max-width:480px) {
    /* 스타일 입력 */
    background-color: bisque;
  }
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
    /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/ 
    @media all and (min-width:1024px) and (max-width:1279px) { 
    /* 스타일 입력 */
    color: darkmagenta;
  } 
  /* 테블릿 가로 (해상도 769px ~ 1023px)*/ 
  @media all and (min-width:769px) and (max-width:1023px) { 
    /* 스타일 입력 */
    color: darkgreen;
  } 

  /* 모바일 가로 & 테블릿 세로 (해상도 481px ~ 768px)*/ 
  @media all and (min-width:481px) and (max-width:768px) {
    /* 스타일 입력 */
    color: midnightblue;
  } 

  /* 모바일 세로 (해상도 ~ 480px)*/ 
  @media all and (max-width:480px) {
    /* 스타일 입력 */
    color: darksalmon;
  }

`;

const Button= styled.button`
  background-color: plum;
  color: black;
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  margin: 10px;
`;



const Home=() =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <h2>로그인 페이지</h2>
      <Input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

        <Button onClick={() => navigate('/login')}>로그인</Button>
        <Button onClick={() => navigate('/register')}>회원가입</Button>
      
      {/* 버튼 만들자리 */}
    </Container>
  );
};

const Register = () => {
  const navigate = useNavigate();
  return(
    <Container>
      <h2>회원가입 페이지</h2>
        <Button onClick={() => navigate('/')}>홈화면</Button>
        <Button onClick={() => navigate('/login')}>로그인</Button>
    </Container>
  );
};

const Login = () => {
  const navigate = useNavigate();
  return(
  <Container>
    <h2>로그인 완료 후 페이지</h2>
    <Button onClick={() => navigate('/')}>홈화면</Button>
    <Button onClick={() => navigate('/register')}>회원가입</Button>
  </Container>
  );
};

function App(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}
export default App;

