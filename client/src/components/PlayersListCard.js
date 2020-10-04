import React from 'react'
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import {Container, Row, Col, Spinner} from 'reactstrap'
import PlayerCard from './PlayerCard'

const PlayersListCard = ({player}) => {
  const {path, url} = useRouteMatch();
  return(
    <div>
     <ul>
       <li>{player.name}</li>
       <li><Link to= {`${url}/${player.id}`}>link to player</Link></li>
     </ul>
    
    </div>
  )
}

export default PlayersListCard