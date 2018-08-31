import React from 'react'
import Players from './Players.js'
import AddPlayer from './AddPlayer.js'
import Board from './Board.js'

class Leaderboard extends React.Component {
    constructor(props){
        super(props)
        
        const PLAYERS = [
            {id: 1, name: "Andi", score:1},
            {id: 2, name: "Budi", score:1},
            {id: 3, name: "Tono", score:1},
        ]

        const BOARDS = [
            {block:1},
            {block:2},
            {block:3},
            {block:4},
            {block:5},
            {block:6},
            {block:7},
            {block:8},
            {block:9},
            {block:10},
            {block:11},
            {block:12},
            {block:13},
            {block:14},
            {block:15},
            {block:16}
        ]

        this.state = {
            members : PLAYERS,
            board : BOARDS,
            turn : 0,
        }
        
        this.onPlayerAdd = this.onPlayerAdd.bind(this)
    }

    onPlayerAdd (name) {
        let new_members = this.state.members
        let id = this.state.members.length + 1
            new_members.push({id:id, name:name, score:1})
        this.setState({
            members: new_members
        })
    }

    dice (event){
        let play_members = this.state.members
        let next = this.state.turn
        let playerOnPlay = play_members[next] 
        let point = Math.ceil(Math.random()*6)
        let totPlay = play_members.length

        if(next < totPlay ){
            console.log(playerOnPlay, this.state.turn, point)
            playerOnPlay.score += point
            next++
        } else {
            next = 0
        }


        this.setState({
            members : play_members,
            turn : next
        })
    }
    
    render () {
        const styles = {
                container:{
                    padding:60
                }
        }

        return (
            <div style={styles.container}>
                <h1>Leaderboard</h1>
                <Players members={this.state.members} /> 
                <AddPlayer onAdd={this.onPlayerAdd}/>
                <Board 
                    size={this.state.board}
                    members={this.state.members}
                />
                <button onClick={this.dice.bind(this)}>dice</button>
            </div>
        )
    }
}


export default Leaderboard
