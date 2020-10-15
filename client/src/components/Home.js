import React from 'react'
import {Jumbotron,Container, Col, Row} from 'reactstrap'
import PlayersList from './PlayersList'

const Home = () => {

  return(
    <div>
      <Row>
        <Col>
          <Jumbotron>
          <h1>Post-Grad Degenerates</h1>
          <h3>Current Champion Yea</h3>
        </Jumbotron>
        </Col>
      </Row>
      <PlayersList></PlayersList>
    </div>
  )
}

export default Home