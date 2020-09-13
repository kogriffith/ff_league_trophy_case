import React from 'react'
import {useQuery, gql} from '@apollo/client'


const GetPlayerInfo = gql `query GetPlayerInfo($id: ID!) {
  player(id: $id){
    id
    name
    winCount
    currentWinner
  }
}`;

const PlayerCard = () => {
  
  const {data, loading} = useQuery(GetPlayerInfo, {
    variables: {
      id: "1"
    }
  });

  return(
    <div>
      {!loading &&
        <>
         <p>{data.player.name}</p>
         <p>{data.player.winCount}</p>
         <p>{data.player.id}</p>
      </>
       }
    </div>
  )
}

export default PlayerCard