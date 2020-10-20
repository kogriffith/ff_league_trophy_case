import React from 'react'
import {useQuery, gql} from '@apollo/client'
import {useParams, useRouteMatch} from 'react-router-dom'

import {Container, Row, Col, Spinner} from 'reactstrap'
import PlayersListCard from "./PlayersListCard"

const GetPlayersInfo = gql `query GetPlayersInfo {
  players{
    id
    name
    championshipWinCount
    currentWinner
    nickname
    playoffAppearanceCount
    playoffWinCount
    playoffLossCount
    playoffDrawCount
    lastPlaceCount
    yearsInLeague
    regularWinCount
    regularDrawCount
    regularLossCount
  }
}`;

const PlayersList = () => {
  const {data, loading, refetch} = useQuery(GetPlayersInfo);

  return(
    <div>
      {loading ? (
        <Spinner color="success"></Spinner>  
      ) : (
        <div>
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