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
      charisma: "",
      strMod: "",
      dexMod: "",
      conMod: "",
      intMod: "",
      wisMod: "",
      chaMod: ""
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
    
    let strMody = Math.floor((str - 10)/2);
    let dexMody = Math.floor((dex - 10)/2);
    let conMody = Math.floor((con - 10)/2);
    let intMody = Math.floor((int - 10)/2);
    let wisMody = Math.floor((wis - 10)/2);
    let chaMody = Math.floor((cha - 10)/2);

    this.setState({
      strength: str,
      dexterity: dex,
      constitution: con,
      intelligence: int,
      wisdom: wis,
      charisma: cha,
      strMod: strMody,
      dexMod: dexMody,
      conMod: conMody,
      intMod: intMody,
      wisMod: wisMody,
      chaMod: chaMody

      })
  }
  render(){
    return  (    
      <div className="container">
        <h1>DnD stat generator</h1>
        <h3>Strength:     {this.state.strength}, Modifier: {this.state.strMod}</h3>
        <h3>Dexterity:    {this.state.dexterity}, Modifier: {this.state.dexMoD}</h3>
        <h3>Constitution: {this.state.constitution}, Modifier: {this.state.conMod}</h3>
        <h3>Intelligence: {this.state.intelligence}, Modifier: {this.state.intMod}</h3>
        <h3>Wisdom:       {this.state.wisdom}, Modifier: {this.state.wisMod}</h3>
        <h3>Charisma:     {this.state.charisma}, Modifier: {this.state.chaMod}</h3>
        
        <button onClick={this.rollStat}>Roll Stat</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
