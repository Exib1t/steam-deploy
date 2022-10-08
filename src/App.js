import React from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import JoinSteam from './components/JoinSteam/JoinSteam';
import SignInForm from './components/SignInForm/SignInForm';
import Title from './components/UI/Title/Title';

const App = () => {
  return (
    <div className={'App'}>
      <Header />
      <Container>
        <Title>Sign in</Title>
        <SignInForm />
      </Container>
      <JoinSteam />
      <Footer />
    </div>
  );
};

export default App;