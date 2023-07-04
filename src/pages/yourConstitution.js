import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'semantic-ui-react';
import { Link } from '../routes';
import Layout from '../components/Layout';
import factory from '../factory';

const YourConstitution = () => {
  // const [constitutions, setConstitutions] = useState([]);

  // useEffect(() => {
  //   const getConstitutions = async () => {
  //     const constitutionCount = await factory.methods.getConstitutionCount().call();
  //     const constitutionAddresses = await factory.methods.getConstitutions().call();
  
  //     // Setze die Konstitutionen im State
  //     setConstitutions(constitutionAddresses);
  //   };
  
  //   getConstitutions();
  // }, []);  

  // const renderConstitutions = () => {
  //   return (
  //     <Card.Group>
  //       {constitutions.map((address, index) => (
  //         <Card fluid key={index}>
  //           <Card.Content>
  //             <Card.Header>{address}</Card.Header>
  //             <Card.Description>
  //               <Link route={`/constitutions/show/${address}`}>
  //                 <a>View Constitution</a>
  //               </Link>
  //             </Card.Description>
  //           </Card.Content>
  //         </Card>
  //       ))}
  //     </Card.Group>
  //   );
  // };

  // return (
  //   <Layout>
  //     <Container>
  //       <h3>Your Constitutions</h3>

  //       <Link route="/constitutions/new">
  //         <Button floated="right" content="Create Constitution" primary />
  //       </Link>

  //       {constitutions.length === 0 ? (
  //         <p>No Constitutions found.</p>
  //       ) : (
  //         renderConstitutions()
  //       )}
  //     </Container>
  //   </Layout>
  // );
};

export default YourConstitution;
