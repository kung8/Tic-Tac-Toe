import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      turn:true,
      TL:'',
      TM:'',
      TR:'',
      CL:'',
      CM:'',
      CR:'',
      BL:'',
      BM:'',
      BR:''
    }
  }

  TL(){
    if(this.state.turn===true){
      this.setState({
        TL:'X',
        turn:!this.state.turn
      })
    } else {
      this.setState({
        TL:'O',
        turn:!this.state.turn
      })
    }
  }

  TM(){
    if(this.state.turn===true){
      this.setState({
        TM:'X',
        turn:!this.state.turn
      })
    } else {
      this.setState({
        TM:'O',
        turn:!this.state.turn
      })
    }
  }

  TR(){
    if(this.state.turn===true){
      this.setState({
        TR:'X',
        turn:!this.state.turn
      })
    } else {
      this.setState({
        TR:'O',
        turn:!this.state.turn
      })
    }
  }

  CL(){
    if(this.state.turn===true){
      this.setState({
        CL:'X',
        turn:!this.state.turn
      })
    } else {
      this.setState({
        CL:'O',
        turn:!this.state.turn
      })
    }
  }

  CM(){
    if(this.state.turn===true){
      this.setState({
        CM:'X',
        turn:!this.state.turn
      })
    } else {
      this.setState({
        CM:'O',
        turn:!this.state.turn
      })
    }
  }

  CR(){
    if(this.state.turn===true){
      this.setState({
        CR:'X',
        turn:!this.state.turn
      })
    } else {
      this.setState({
        CR:'O',
        turn:!this.state.turn
      })
    }
  }

  BL(){
    if(this.state.turn===true){
      this.setState({
        BL:'X',
        turn:!this.state.turn
      })
    } else {
      this.setState({
        BL:'O',
        turn:!this.state.turn
      })
    }
  }

  BM(){
    if(this.state.turn===true){
      this.setState({
        BM:'X',
        turn:!this.state.turn
      })
    } else {
      this.setState({
        BM:'O',
        turn:!this.state.turn
      })
    }
  }

  BR(){
    if(this.state.turn===true){
      this.setState({
        BR:'X',
        turn:!this.state.turn
      })
    } else {
      this.setState({
        BR:'O',
        turn:!this.state.turn
      })
    }
  }

  resetAll=()=>{
    this.setState({
      turn:true,
      TL:'',
      TM:'',
      TR:'',
      CL:'',
      CM:'',
      CR:'',
      BL:'',
      BM:'',
      BR:''
    })
  }

  

  render() {
    const {TL,TM,TR,CL,CM,CR,BL,BM,BR} = this.state;
    //X wins these ways
    if(TL==='X'&&TM==='X'&&TR==='X'){alert('X wins')}
    if(CL==='X'&&CM==='X'&&CR==='X'){alert('X wins')}
    if(BL==='X'&&BM==='X'&&BR==='X'){alert('X wins')}
    if(TL==='X'&&CL==='X'&&BL==='X'){alert('X wins')}
    if(TM==='X'&&CM==='X'&&BM==='X'){alert('X wins')}
    if(TR==='X'&&CR==='X'&&BR==='X'){alert('X wins')}
    if(TL==='X'&&CM==='X'&&BR==='X'){alert('X wins')}
    if(TR==='X'&&CM==='X'&&BL==='X'){alert('X wins')}
    
    //O wins these ways
    if(TL==='O'&&TM==='O'&&TR==='O'){alert('O wins')}
    if(CL==='O'&&CM==='O'&&CR==='O'){alert('O wins')}
    if(BL==='O'&&BM==='O'&&BR==='O'){alert('O wins')}
    if(TL==='O'&&CL==='O'&&BL==='O'){alert('O wins')}
    if(TM==='O'&&CM==='O'&&BM==='O'){alert('O wins')}
    if(TR==='O'&&CR==='O'&&BR==='O'){alert('O wins')}
    if(TL==='O'&&CM==='O'&&BR==='O'){alert('O wins')}
    if(TR==='O'&&CM==='O'&&BL==='O'){alert('O wins')}

    if(
      TL!=='' &&
      TM!=='' &&
      TR!=='' &&
      CL!=='' &&
      CM!=='' &&
      CR!=='' &&
      BL!=='' &&
      BM!=='' &&
      BR!==''
      ){alert('Tie!')}

    return (
      <div>
        <header>
          <h1>Tic Tac Toe</h1>  
        </header>
        <body>
          <div className="Top-Row">
              <div onClick={()=>this.TL()} >
                <button>
                  {TL}
                </button>
              </div>
              <div onClick={()=>this.TM()}>
                <button>
                  {TM}
                </button>
              </div>
              <div onClick={()=>this.TR()}>
                <button>
                  {TR}
                </button>
              </div>
          </div>
          <div className="Center-Row">
          <div onClick={()=>this.CL()}>
                <button>
                  {CL}
                </button>
              </div>
              <div onClick={()=>this.CM()}>
                <button>
                  {CM}
                </button>
              </div>
              <div onClick={()=>this.CR()}>
                <button>
                  {CR}
                </button>
              </div>
          </div>
          <div className="Bottom-Row">
          <div onClick={()=>this.BL()}>
                <button>
                  {BL}
                </button>
              </div>
              <div onClick={()=>this.BM()}>
                <button>
                  {BM}
                </button>
              </div>
              <div onClick={()=>this.BR()}>
              <button>
                  {BR}
                </button>
              </div>
          </div>
          <button onClick={()=>this.resetAll()}>Reset</button>
        </body>
      </div>
    );
  }
}

export default App;
