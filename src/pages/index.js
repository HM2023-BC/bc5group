import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class HealthGuardIndex extends Component {
  static async getInitialProps() {
    const healthGuards = await factory.methods.createTask().call(); // Ändern Sie "createHealthGuardContract()" zu "getHealthGuards()"

    return { healthGuards };
  }

  renderHealthGuards() {
    const items = this.props.healthGuards.map(address => {
      return {
        header: address,
        description: (
          <Link route="/">
            <a>View Tasks</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Tasks</h3>

          <Link route="healthRecords/new">
            <a>
              <Button 
                floated="right"
                content="Create Task"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderHealthGuards()}
        </div>
      </Layout>
    );
  }
}

export default HealthGuardIndex;
