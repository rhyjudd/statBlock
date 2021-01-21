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
    let dex = statRoller();
    let con = statRoller();
    let int = statRoller();
    let wis = statRoller();
    let cha = statRoller();

    this.setState({
      strength: str,
      dexterity: dex,
      constitution: con,
      intelligence: int,
      wisdom: wis,
      charisma: cha
      })
  }
  render(){
    return  (    
      <div className="container">
        <h1>DnD stat generator</h1>
        <h3>Strength:     {this.state.strength}</h3>
        <h3>Dexterity:    {this.state.dexterity}</h3>
        <h3>Constitution: {this.state.constitution}</h3>
        <h3>Intelligence: {this.state.intelligence}</h3>
        <h3>Wisdom:       {this.state.wisdom}</h3>
        <h3>Charisma:     {this.state.charisma}</h3>
        
        <button onClick={this.rollStat}>Roll Stat</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
