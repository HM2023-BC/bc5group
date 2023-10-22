import React, { Component } from 'react';
import { Card, Button, Form, Message } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class HealthGuardIndex extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <h3 className="title">HealthGuard: Fortschrittliche Blockchain-Lösung für sichere und private Gesundheitsdaten</h3>
          <p className="description">
            Im Gesundheitswesen bietet die Blockchain zahlreiche Vorteile. Eine konfigurierte Blockchain ermöglicht ausgewählten Nutzern den Zugriff auf gespeicherte Daten, während die Daten gleichzeitig in einem verteilten Netzwerk abgelegt werden. Dadurch kann eine sichere Speicherung sensibler Informationen erfolgen. Insbesondere persönliche Unterlagen wie Patientenakten, medizinische Befunde und Krankheitsverläufe können in einer Blockchain gespeichert werden. Der Zugriff auf diese Daten ist dabei auf vorher vom Eigentümer der Daten autorisierte Nutzer beschränkt.
          </p>
        </div>
      </Layout>
    );
  }
}

export default HealthGuardIndex;