import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard.jsx';
import Navbar from '../../features/nav/NavBar/NavBar.jsx';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="main">
          <h1>Reverse</h1>
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
