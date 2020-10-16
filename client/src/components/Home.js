import React from 'react'
import {useQuery, gql} from '@apollo/client'
import {Jumbotron,Container, Col, Row} from 'reactstrap'
import PlayersList from './PlayersList'

const GetChampionInfo = gql `query GetChampionInfo {
  champion{
    id
    name
    championshipWinCount
    nickname
  }
}`;

const Home = () => {
  
  const {data, loading} = useQuery(GetChampionInfo);


  return(
    <div>
      {loading ? (<span>loading</span>): (
      <>
      <Row>
        <Col>
          <Jumbotron>
          <h1>Post-Grad Degenerates</h1>
          <h3>{data.champion.nickname}</h3>
        </Jumbotron>
        </Col>
      </Row>
      <PlayersList></PlayersList>
      </>
      )}
    </div>
  )
}

export default Home