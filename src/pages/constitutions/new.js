import React, { useState } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { Link } from '../../routes';
import Layout from '../../components/Layout';

const NewConstitution = () => {
  const [patientName, setPatientName] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [treatment, setTreatment] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hier kannst du den Code zum Erstellen eines neuen HealthGuard implementieren
    // Verwende die eingegebenen Werte aus den Formularfeldern

    // Beispiel-Code zum Erstellen eines neuen HealthGuard
    const newHealthGuard = {
      patientName,
      medicalCondition,
      treatment,
      doctorName
    };

    console.log('New HealthGuard:', newHealthGuard);

    // Hier kannst du den Code zum Weiterleiten zur Übersichtsseite implementieren
    // nachdem der HealthGuard erfolgreich erstellt wurde

    // Beispiel-Code zum Weiterleiten zur Übersichtsseite
    // Router.push('/constitution');
  };

  return (
    <Layout>
      <Container>
        <h3>Create a New HealthGuard</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Patient Name</label>
            <input
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Medical Condition</label>
            <input
              value={medicalCondition}
              onChange={(e) => setMedicalCondition(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Treatment</label>
            <input
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Doctor Name</label>
            <input
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
          </Form.Field>

          <Link route="/yourConstitution_Demo">
          <Button type="submit" primary>Create</Button>          
          </Link>
        </Form>

        <Link route="/yourConstitution">
          <Button secondary>Cancel</Button>
        </Link>
      </Container>
    </Layout>
  );
};

export default NewConstitution;
