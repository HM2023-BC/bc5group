import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Tab } from 'semantic-ui-react';
import { Link } from '../routes';
import Layout from '../components/Layout';

const YourConstitution = () => {
  const [healthGuards, setHealthGuards] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetchHealthGuards();
  }, []);

  const fetchHealthGuards = () => {
    // Dummy-Daten für HealthGuards
    const dummyHealthGuards = [
      {
        patientName: 'John Doe',
        medicalCondition: 'Hypertension',
        treatment: 'Prescription medication, diet and lifestyle changes',
        doctorName: 'Dr. Jane Smith'
      },
      {
        patientName: 'Marie Josefine',
        medicalCondition: 'Type 2 Diabetes',
        treatment: 'Insulin therapy, blood sugar monitoring',
        doctorName: 'Dr. John Johnson'
      },
      {
        patientName: 'Daniel K.',
        medicalCondition: 'Asthma',
        treatment: 'Inhaler medication, avoidance of triggers',
        doctorName: 'Dr. John Johnson'
      }
    ];
    

    setHealthGuards(dummyHealthGuards);
  };

  const renderHealthGuardData = () => {
    return healthGuards.map((healthGuard, index) => (
      <Card.Group key={index}>
        <Card fluid>
          <Card.Content>
            <Card.Header>{healthGuard.patientName}</Card.Header>
            <Card.Description>
              <p><strong>Medical Condition:</strong> {healthGuard.medicalCondition}</p>
              <p><strong>Treatment:</strong> {healthGuard.treatment}</p>
              <p><strong>Doctor Name:</strong> {healthGuard.doctorName}</p>
            </Card.Description>
          </Card.Content>
          {/* <Card.Content extra>
            <Button primary>View Details</Button>
          </Card.Content> */}
        </Card>
      </Card.Group>
    ));
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const panes = [
    {
      menuItem: '',
      render: () => (
        <Tab.Pane attached={false}>
          {healthGuards.length === 0 ? <p>No HealthGuards found.</p> : renderHealthGuardData()}
        </Tab.Pane>
      )
    },
    {
      menuItem: '',
      render: () => (
        <Tab.Pane attached={false}>
          {/* Hier kannst du das Formular zum Erstellen eines HealthGuards hinzufügen */}
        </Tab.Pane>
      )
    }
  ];

  return (
    <Layout>
      <Container>
        <h3>Your HealthGuards</h3>

        <Link route="/constitutions/new">
          <Button floated="right" content="Create HealthGuard" primary />
        </Link>

        <Tab menu={{ secondary: true, pointing: true }} panes={panes} activeIndex={activeTab} onTabChange={handleTabChange} />
      </Container>
    </Layout>
  );
};

export default YourConstitution;
// import React, { useState, useEffect } from 'react';
// import { Container, Card, Button } from 'semantic-ui-react';
// import { Link } from '../routes';
// import Layout from '../components/Layout';
// import factory from '../factory';

// const YourConstitution = () => {
//   const [constitutions, setConstitutions] = useState([]);

//   useEffect(() => {
//     const getConstitutions = async () => {
//       const constitutionAddresses = await factory.methods.getDeployedConstitutions().call();
  
//       // Setze die Konstitutionen im State
//       setConstitutions(constitutionAddresses);
//     };
  
//     getConstitutions();
//   }, []);  

//   const renderConstitutions = () => {
//     return (
//       <Card.Group>
//         {constitutions.map((address, index) => (
//           <Card fluid key={index}>
//             <Card.Content>
//               <Card.Header>{address}</Card.Header>
//               <Card.Description>
//                 {/* <Link route={`/constitutions/show/${address}`}>
//                   <a>View Constitution</a>
//                 </Link> */}
//               </Card.Description>
//             </Card.Content>
//           </Card>
//         ))}
//       </Card.Group>
//     );
//   };

//   return (
//     <Layout>
//       <Container>
//         <h3>Your Constitutions</h3>

//         <Link route="/constitutions/new">
//           <Button floated="right" content="Create Constitution" primary />
//         </Link>

//         {constitutions.length === 0 ? (
//           <p>No Constitutions found.</p>
//         ) : (
//           renderConstitutions()
//         )}
//       </Container>
//     </Layout>
//   );
// };

// export default YourConstitution;