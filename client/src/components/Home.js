import React from 'react'
import {useQuery, gql} from '@apollo/client'
import {Jumbotron,Container, Col, Row} from 'reactstrap'
import PlayersList from './PlayersList'
import ChampCrownLogo from '../assets/champ-crown.png'
import Footer from './Footer.js'

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
          <h3>2019 Champion </h3>
         <span className="champion-span">
           <img src={ChampCrownLogo} className="champ-crown-logo"></img>
           <h3>Team {data.champion.nickname}</h3>
           <img src={ChampCrownLogo} className="champ-crown-logo"></img>
        </span> 
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