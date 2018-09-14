import React from 'react'

class Board extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            player :this.props.members,
            onBlock : [],
        }
    }

    getWhoPlayerOntheBord = (players, block) => {
        let onBoard = players.filter(el => {
            return el.score === block
        }) 
        console.log('on function',onBoard)
       return onBoard
    }   

    render () {
        const styles = {
            container:{
                display:'flex',
                flexWrap:'wrap',
                backgroundColor:'red',
                justifyContent:'center',
                alignItems:'center',
            },
            pieces:{
                backgroundColor:'black',
                height:100,
                color:'white',
                margin:'2px',
                flexGrow:0,
                flexShrink:1,
                flexBasis:'24%'
            },
            self:{
                alignSelf:'flex-end',
                position :'absolute'
            }
        }
        return (
            <div style={styles.container}>
                {   
                  
                  this.props.size.map(  piece => {
                    
                    let onBlock = this.state.player.filter( el => {return el.score === piece.block})              
                        
                        return (
                                <div key={piece.block} style={styles.pieces}>
                                    
                                    <p style={styles.self}>{piece.block}</p>
                                    
                                    {onBlock.map(player => {
                                        return(
                                        <p key={player.id}>{player.name}</p>  
                                        )
                                    })}

                                </div>
                        )   
                })
                   
                }
            </div>   
        )
    }
}

export default Board

