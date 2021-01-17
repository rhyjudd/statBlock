import React from "react";
import ReactDOM from "react-dom";


diceRoll = (sides) => {
  let dSides = sides; 
  return Math.floor(Math.random() * dSides) +1;
}

statRoller = () =>{
  let statArray = [];

  for(i=0; i<4; i++){
    statArray.push(diceRoll(6));
    //console.log(`Roll: ${i+1}. You rolled a ${statArray[i]}`);    
  }
  
  let result = statArray.sort().filter((_,i) => i).reduce((a, b)=>{
   
    return a + b;
});
  
  return result;
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: ""
    }
    this.rollStat=this.rollStat.bind(this);
  }
  rollStat(){
    let str = statRoller();
    this.setState({strength: str})
  }
  render(){
    return  (    
      <div>
        <h1>DnD stat generator</h1>
        <h3>Strength: {this.state.strength}</h3>
        <button onClick={this.rollStat}>Roll Stat</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
