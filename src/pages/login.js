import React, { useState } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { Link } from '../routes';
import Layout from '../components/Layout';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Login-Logik implementieren, z. B. API-Anfragen an den Server senden, um das Passwort zu überprüfen.
    console.log('Benutzername:', username);
    console.log('Passwort:', password);
  };

  return (
    <Layout>
      <div className="login-container">
        <style jsx>{`
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .login-form {
            max-width: 400px;
            padding: 40px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          }

          .login-title {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 20px;
            text-align: center;
          }

          .login-input {
            margin-bottom: 20px;
          }

          .login-button {
            background-color: #1c7ad9;
            color: #fff;
          }

          .back-button {
            margin-top: 10px;
          }
        `}</style>

        <Container>
          <Form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-title">Login</h2>
            <Form.Input
              className="login-input"
              label="Benutzername"
              placeholder="Benutzername"
              value={username}
              onChange={handleUsernameChange}
            />
            <Form.Input
              className="login-input"
              label="Passwort"
              placeholder="Passwort"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Link route={'/yourConstitution'}>
            <Button className="login-button" type="submit">Anmelden</Button>
            </Link>
          </Form>
        </Container>
      </div>
    </Layout>
  );
};

export default Login;
