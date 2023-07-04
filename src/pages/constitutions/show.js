import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import { Link } from '../../routes';
import Layout from '../../components/Layout';
import factory from '../../factory';

const ShowConstitution = ({ address }) => {
  // Hier kannst du den Code zum Abrufen der Konstitution mit der Adresse `address` implementieren
  // Verwende die factory-Methode und die Adresse der Konstitution, um die benötigten Informationen abzurufen

  return (
    <Layout>
      <Container>
        <h2>Constitution Details</h2>
        {/* Zeige die Details der Konstitution an */}
        {/* Verwende die abgerufenen Informationen, um die entsprechenden Daten anzuzeigen */}
      </Container>
    </Layout>
  );
};

ShowConstitution.getInitialProps = async (props) => {
  const { address } = props.query;
  return { address };
};

export default ShowConstitution;
