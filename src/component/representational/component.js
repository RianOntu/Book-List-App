import React,{ Component } from 'react';
import '../../stylesheets/style.css'



// function Person(props){
//     return(
//       <div className="person">
//         <h1>name:{props.name} and age:{props.age}</h1>
  
//       </div> 
//     );
//   }
class Person extends Component{
  
  constructor(props){
    super(props);
  }
  render(){
    
  return (
    <div className="box">
             <h1 onClick={this.props.delete}>name:{this.props.Book_Name} and Writer:{this.props.Writer}</h1>
             <input type="text" onChange={this.props.inputname} value={this.props.Book_Name}/>
           
      
     </div> 
  );
  }
}
// let Person=props=>{
//   return (
//     <div>
//              <h1>name:{props.Book_Name} and Writer:{props.Writer}</h1>
           
      
//      </div> 
//   );
// }




  export default Person;