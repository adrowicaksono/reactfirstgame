import React from 'react'

class AddPlayer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name : ""
        }

        this.onPlayerChange = this.onPlayerChange.bind(this)
        this.addPlayer = this.addPlayer.bind(this)

    }

    onPlayerChange(event){
        this.setState({
            name: event.target.value
        })
        console.log(event.target.value)
    }

    addPlayer(event){
        this.props.onAdd(this.state.name)
    }

    render () {
        const styles = {
          container:{
            padding: 10,
            disp :"flex",
          },
          input : {
              flex :"1",
              paddingRight : 20,
              width: "45%",
              heigth: 27,
              padding : 10,
          },
          
          button : { 
              float: "right",
              marginRight : 80,
              width:120,
              padding :10
          }
        }

        return (
            <div style={styles.input}>
                <div style={styles.container}>
                    <input style={styles.input} onChange={this.onPlayerChange} type="text" placeholder="new player"/>
                    <button onClick={this.addPlayer} style={styles.button}>Submit</button>
                </div>
            </div>
        )
    }
}

export default AddPlayer