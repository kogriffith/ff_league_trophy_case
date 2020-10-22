import React from 'react'
import {Table} from 'reactstrap'
import Crown from '../assets/crown.png'
import Star from '../assets/favorite.png'
import Poo from '../assets/poo.png'
import X from '../assets/close.png'
import Ball from '../assets/ball.png'
import Zero from '../assets/zero.png'

const PlayerTable = ({data}) => {
  
  console.log(data.player.lastPlaceCount)
  return(
   <Table className="player-table">
    <tbody>
      <tr>
        <td>
          <h4>Championships</h4>
        </td>
        <td>
          { data.player.championshipWinCount === 0 ? 
          (<span className="icon-span"><img src={Zero} className="crown-icon"></img></span>)  : 
          (<span className="icon-span">{Array(data.player.championshipWinCount).fill(<img src={Crown} className="crown-icon"></img>)}</span>)}
        </td>
      </tr>
      <tr>
        <td>
          <h4>Playoff Appearances</h4>
        </td>
        <td>
          { data.player.playoffAppearanceCount === 0 ? 
          (<span className="icon-span"><img src={Zero} className="crown-icon"></img></span>)  : 
          (<span className="icon-span">{Array(data.player.playoffAppearanceCount).fill(<img src={Star} className="crown-icon"></img>)}</span>)}
        </td>
      </tr>
      <tr>
        <td>
          <h4>Playoff Wins</h4>
        </td>
        <td>
          { data.player.playoffWinCount === 0 ? 
          (<span className="icon-span"><img src={Zero} className="crown-icon"></img></span>)  : 
          (<span className="icon-span">{Array(data.player.playoffWinCount).fill(<img src={Ball} className="crown-icon"></img>)}</span>)}
        </td>
      </tr>
      <tr>
        <td>
          <h4>Playoff Losses</h4>
        </td>
        <td>
          { data.player.playoffLossCount === 0 ? 
          (<span className="icon-span"><img src={Zero} className="crown-icon"></img></span>)  : 
          (<span className="icon-span">{Array(data.player.playoffLossCount).fill(<img src={X} className="crown-icon"></img>)}</span>)}
        </td>
      </tr>
      <tr>
        <td>
          <h4>Last Place Appearances</h4>
        </td>
        <td>
          { data.player.lastPlaceCount === 0 ? 
          (<span className="icon-span"><img src={Zero} className="crown-icon"></img></span>)  : 
          (<span className="icon-span">{Array(data.player.lastPlaceCount).fill(<img src={Poo} className="crown-icon"></img>)}</span>)}
        </td>
      </tr>
    </tbody>
  </Table>
  )
}

export default PlayerTable