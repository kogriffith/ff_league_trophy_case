import React from 'react'
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import {Card, CardText, CardBody} from 'reactstrap'
import PlayerCard from './PlayerCard'

const PlayersListCard = ({player}) => {
  const {path, url} = useRouteMatch();
  return(
    <div>
      <Card>
        <CardBody>
          <CardText>
            <h2><Link to= {`${url}/${player.id}`}>{player.name}</Link></h2>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default PlayersListCard