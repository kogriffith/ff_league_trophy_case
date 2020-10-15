import React from 'react'
import {useQuery, gql} from '@apollo/client'
import {useParams, useRouteMatch} from 'react-router-dom'

import {Container, Row, Col, Spinner} from 'reactstrap'
import PlayersListCard from "./PlayersListCard"

const GetPlayersInfo = gql `query GetPlayersInfo {
  players{
    id
    name
    winCount
    currentWinner
  }
}`;

const PlayersList = () => {
  const {data, loading, refetch} = useQuery(GetPlayersInfo);

  //loading ? console.log("still loading") : console.log(data.players);
  return(
    <div>
      {loading ? (
        <Spinner color="success"></Spinner>  
      ) : (
        <div>
          <h1>Players</h1>
          <div className="players-list">
            {data.players.map( (player) => <PlayersListCard player = {player}></PlayersListCard>)}
          </div>
        </div>
      )
       }
    </div>
  )
}

export default PlayersList