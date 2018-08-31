import React from 'react'

class Player extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            score: this.props.score
        }
    }

    incrementScore (event) {
        this.setState({
            score : this.state.score += 1
        })
    }

    decrementScore (event) {
        let score = this.props.score - 1
        this.setState({
            score : this.state.score -= 1
        })
    }
    
    render ( ) {
        const styles =  {
            player :{
                display: "flex",
                padding: 10
            },
            name : {
                flex: '1',
               
            },
            playerScore: {
                width : 200
            },
            score:{
                padding: 20
            },
            button :{
                padding: 10
            }
        }

        return (
            <div style={styles.player}> 
                <div style={styles.name}>
                    <p>
                        {this.props.name}
                    </p>
                </div>
                <div style={styles.playerScore}>
                    {/* <button onClick={this.decrementScore.bind(this)} style={styles.button}>-</button> */}
                    <span style={styles.score}>{this.state.score}</span>
                    {/* <button onClick={this.incrementScore.bind(this)} style={styles.button}>+</button> */}
                </div>
            </div>
        )
    }
}

export default Player