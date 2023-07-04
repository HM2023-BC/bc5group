import React, { useState } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { Link } from '../routes';
import Layout from '../components/Layout';
import factory from '../factory';
import web3 from '../web3';

const SignUp = () => {
  const [medicalFacilityName, setMedicalFacilityName] = useState('');
  const [medicalFacilityAddress, setMedicalFacilityAddress] = useState('');
  const [medicalFacilityContact, setMedicalFacilityContact] = useState('');
  const [medicalProfessionalName, setMedicalProfessionalName] = useState('');
  const [medicalProfessionalLicense, setMedicalProfessionalLicense] = useState('');

  const handleMedicalFacilityNameChange = (e) => {
    setMedicalFacilityName(e.target.value);
  };

  const handleMedicalFacilityAddressChange = (e) => {
    setMedicalFacilityAddress(e.target.value);
  };

  const handleMedicalFacilityContactChange = (e) => {
    setMedicalFacilityContact(e.target.value);
  };

  const handleMedicalProfessionalNameChange = (e) => {
    setMedicalProfessionalName(e.target.value);
  };

  const handleMedicalProfessionalLicenseChange = (e) => {
    setMedicalProfessionalLicense(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await factory.methods.createConstitution(
  //       medicalFacilityName,
  //       medicalFacilityAddress,
  //       medicalFacilityContact,
  //       medicalProfessionalName,
  //       parseInt(medicalProfessionalLicense)
  //     ).send({ from: web3.eth.defaultAccount });

  //     console.log('Registration and Constitution creation successful');
  //   } catch (error) {
  //     console.log('Error during registration and Constitution creation:', error);
  //   }
  // };

  return (
    <Layout>
      <div className="signup-container">
        <style jsx>{`
          .signup-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .signup-form {
            max-width: 400px;
            padding: 40px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          }

          .signup-title {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 20px;
            text-align: center;
          }

          .signup-input {
            margin-bottom: 20px;
          }

          .signup-button {
            background-color: #1c7ad9;
            color: #fff;
          }

          .back-button {
            margin-top: 10px;
          }
        `}</style>

        <Container>
          <Form className="signup-form" onSubmit={handleSubmit}>
            <h2 className="signup-title">Registration and Constitution Creation</h2>
            <Form.Input
              className="signup-input"
              label="Name of the Medical Facility"
              placeholder="Name of the Medical Facility"
              value={medicalFacilityName}
              onChange={handleMedicalFacilityNameChange}
            />
            <Form.Input
              className="signup-input"
              label="Address of the Medical Facility"
              placeholder="Address of the Medical Facility"
              value={medicalFacilityAddress}
              onChange={handleMedicalFacilityAddressChange}
            />
            <Form.Input
              className="signup-input"
              label="Contact of the Medical Facility"
              placeholder="Contact of the Medical Facility"
              value={medicalFacilityContact}
              onChange={handleMedicalFacilityContactChange}
            />
            <Form.Input
              className="signup-input"
              label="Name of the Medical Professional"
              placeholder="Name of the Medical Professional"
              value={medicalProfessionalName}
              onChange={handleMedicalProfessionalNameChange}
            />
            <Form.Input
              className="signup-input"
              label="License of the Medical Professional"
              placeholder="License of the Medical Professional"
              value={medicalProfessionalLicense}
              onChange={handleMedicalProfessionalLicenseChange}
            />
            <Button className="signup-button" type="submit">
              Register and Create Constitution
            </Button>
          </Form>
          <Link route="/">
            <Button className="back-button" basic color="blue">
              Back to Homepage
            </Button>
          </Link>
        </Container>
      </div>
    </Layout>
  );
};

export default SignUp;
