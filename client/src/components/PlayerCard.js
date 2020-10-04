import React from 'react'
import {useQuery, gql} from '@apollo/client'
import {useParams} from 'react-router-dom'
import {Container, Row, Col, Spinner} from 'reactstrap'

const GetPlayerInfo = gql `query GetPlayerInfo($id: ID!) {
  player(id: $id){
    id
    name
    winCount
    currentWinner
  }
}`;

const PlayerCard = () => {
  const {id} = useParams();
  const {data, loading} = useQuery(GetPlayerInfo, {
    variables: {
      id: id
    }
  });

  return(
    <div>
      {loading ? (
        <div>
        </div>  
      ) : (
        <Container>
          <Row>
            <Col>
              <h1>{data.player.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
            <span>{data.player.winCount}</span>
            </Col>
          </Row>
        </Container>
      )
       }
    </div>
  )
}

export default PlayerCard