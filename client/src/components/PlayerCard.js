import React from 'react'
import {useQuery, gql} from '@apollo/client'
import {useParams} from 'react-router-dom'
import { Row, Col, Spinner, Table} from 'reactstrap'
import PlayerTable from './PlayerTable.js'


const GetPlayerInfo = gql `query GetPlayerInfo($id: ID!) {
  player(id: $id){
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
        <Row>
          <Col>
            <h1>{data.player.nickname}</h1>
            <h4>{data.player.yearsInLeague} Year Degenerate</h4>
            <h4 className = "player-record">Regular Season Record: {data.player.regularWinCount} - {data.player.regularLossCount} - {data.player.regularDrawCount} (since 2019)</h4>
            <PlayerTable data={data}></PlayerTable>
          </Col>
        </Row> 
      )
       }
    </div>
  )
}

export default PlayerCard