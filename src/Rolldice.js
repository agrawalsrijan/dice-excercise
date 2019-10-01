import React,{Component} from "react";
import Die from "./Die";
import "./Rolldice.css";

class Rolldice extends Component{
  // Default pros
  static defaultProps = {
    sides:["one","two","three","four","five","six"]
  };
  // constructor function to set initial states
  constructor(props){
    super(props);
    this.state = {
      die1:"one",
      die2:"one",
      rolling:false
    };
    this.roll = this.roll.bind(this);
  }

  //Roll Dice button's function
  roll(){
    //pick 2 New Rolls
    const newDie1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
    const newDie2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
    //set State with new rolls
    this.setState({die1:newDie1,die2:newDie2,rolling:true});
    // wait 1 second then set rolling to false
    setTimeout(() => {
      this.setState({rolling:false});
    },800);
  }

  render(){
    return(
      <div className="Rolldice">
        <div className="Rolldice-container">
          <Die face={this.state.die1} rolling={this.state.rolling}/>
          <Die face={this.state.die2} rolling={this.state.rolling}/>
        </div>

        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling?"Rolling...":"Roll Dice!"}
        </button>
      </div>
    )
  }
}

export default Rolldice;
