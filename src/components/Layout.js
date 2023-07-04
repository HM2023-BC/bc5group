import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

const Layout = (props) => {
  return (
    <div>
      <style jsx global>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f8f8f8;
          color: #333;
        }
      `}</style>

      <style jsx>{`
        .header {
          background-color: #1c7ad9;
          color: #fff;
          padding: 50px;
          text-align: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header h1 {
          font-size: 48px;
          margin-bottom: 10px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .header p {
          font-size: 24px;
          margin-bottom: 30px;
          font-weight: 300;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }

        .title {
          font-size: 36px;
          margin-bottom: 20px;
          font-weight: 500;
          color: #1c7ad9;
        }

        .subtitle {
          font-size: 24px;
          margin-bottom: 20px;
          font-weight: 500;
          color: #333;
        }

        .description {
          font-size: 18px;
          margin-bottom: 30px;
          line-height: 1.5;
          color: #666;
        }

        .card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin-bottom: 20px;
          transition: box-shadow 0.3s;
        }

        .card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .card-header {
          font-size: 24px;
          margin-bottom: 10px;
          font-weight: 500;
          color: #333;
        }

        .card-description {
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }

        .card-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-button {
          padding: 10px 20px;
          background-color: #1c7ad9;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .card-button:hover {
          background-color: #135ea9;
        }

        .footer {
          background-color: #1c7ad9;
          color: #fff;
          padding: 20px;
          text-align: center;
          font-size: 14px;
        }

        .footer p {
          margin: 0;
        }

        .footer a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }

        .footer a:hover {
          color: #ccc;
        }

        .header-menu {
          display: flex;
          align-items: center;
        }

        .header-menu-item {
          margin: 0 10px;
          color: #fff !important;
          text-decoration: none !important;
          transition: color 0.3s;
        }

        .header-menu-item:hover {
          color: #000 !important;
        }
      `}</style>

      <div className="header">
        <div>
          <h1>HealthGuard</h1>
          <p>Fortschrittliche Blockchain-Lösung für sichere und private Gesundheitsdaten</p>
        </div>
        <Menu className="header-menu">
          <Link route="/login">
            <Menu.Item className="header-menu-item">Login</Menu.Item>
          </Link>
          <Link route="/signUp">
            <Menu.Item className="header-menu-item">Sign Up</Menu.Item>
          </Link>
        </Menu>
      </div>

      <div className="container">
        {props.children}
      </div>

      <div className="footer">
        <p>&copy; 2023 HealthGuard. Alle Rechte vorbehalten. | <a href="#">Impressum</a> | <a href="#">Datenschutz</a></p>
      </div>
    </div>
  );
};

export default Layout;
