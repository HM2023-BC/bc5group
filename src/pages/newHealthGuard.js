import React, { useState } from 'react';
import Layout from '../components/Layout';

const NewHealthGuard = () => {
  const [patientName, setPatientName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [treatment, setTreatment] = useState('');
  const [treatmentDate, setTreatmentDate] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [labResults, setLabResults] = useState('');
  const [medicationDosage, setMedicationDosage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Implement the logic to save the HealthGuard object
    // You can use the state variables (patientName, dob, gender, etc.) to create the HealthGuard object
    // and save it to the blockchain or perform any other required actions

    // Reset the form fields
    setPatientName('');
    setDob('');
    setGender('');
    setMedicalCondition('');
    setTreatment('');
    setTreatmentDate('');
    setDoctorName('');
    setLabResults('');
    setMedicationDosage('');
  };

  return (
    <Layout>
      <div>
        <h3>Neuer HealthGuard</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Patientenname:</label>
            <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
          </div>
          <div>
            <label>Geburtsdatum:</label>
            <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>
          <div>
            <label>Geschlecht:</label>
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
          </div>
          <div>
            <label>Medizinischer Zustand:</label>
            <input type="text" value={medicalCondition} onChange={(e) => setMedicalCondition(e.target.value)} required />
          </div>
          <div>
            <label>Behandlung:</label>
            <input type="text" value={treatment} onChange={(e) => setTreatment(e.target.value)} required />
          </div>
          <div>
            <label>Behandlungsdatum:</label>
            <input type="text" value={treatmentDate} onChange={(e) => setTreatmentDate(e.target.value)} required />
          </div>
          <div>
            <label>Arztname:</label>
            <input type="text" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} required />
          </div>
          <div>
            <label>Laborergebnisse:</label>
            <input type="text" value={labResults} onChange={(e) => setLabResults(e.target.value)} required />
          </div>
          <div>
            <label>Medikamentendosierung:</label>
            <input type="text" value={medicationDosage} onChange={(e) => setMedicationDosage(e.target.value)} required />
          </div>
          <button type="submit">HealthGuard speichern</button>
        </form>
      </div>
    </Layout>
  );
};

export default NewHealthGuard;
