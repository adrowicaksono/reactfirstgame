import React from 'react'

class Board extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            player :this.props.members
        }
    }

    mainBord = () => {

        
        
       
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
                  this.props.size.map((piece) => {
                    let onBlock = []
                    this.state.player.forEach( el => {
                        if(el.score === piece.block ){
                            onBlock.push(el.name)
                        }
                    })              
                return (
                        <div key={piece.id} style={styles.pieces}>
                            <p style={styles.self}>{piece.block}</p>
                            {onBlock.map(name => {
                                return(
                                   <p key={name}>{name}</p>  
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

