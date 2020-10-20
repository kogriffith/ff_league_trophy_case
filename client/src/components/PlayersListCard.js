import React from 'react'
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import {Card, CardText, CardBody} from 'reactstrap'
import PlayerCard from './PlayerCard'
import Crown from '../assets/crown.png'

const PlayersListCard = ({player}) => {
  const {path, url} = useRouteMatch();
  return(
    <div className="players-list-card">
      <Link to= {`/players/${player.id}`}>
        <Card>
          <CardBody>
            <div>
            <h3>{player.nickname}</h3>
            <h4 className = "player-record">{player.regularWinCount} - {player.regularDrawCount} - {player.regularLossCount} </h4>
            </div>
            <span>{Array(player.championshipWinCount).fill(<img src={Crown} className="crown-icon"></img>)}</span>
          </CardBody>
        </Card>
      </Link>
      
    </div>
  )
}

export default PlayersListCard