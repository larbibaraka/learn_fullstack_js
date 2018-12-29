import React, { Component } from 'react';
import ContestPreview from './ContestPreview'; 


class App extends Component {

  constructor(props){
    super(props);

    console.log('tgtg ',props.initialContests);
    this.state = {
      contests : props.initialContests
    };
  }

  componentDidMount = () => {
    
    const url = '/api/contests';
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({
        contests : data
      });
    });
  }
  
  
  render() {
    return (
      <div>
        <h1 className="text-center text-info">contest names</h1>
        <hr/>
        <div>
        {this.state.contests.data.map((contest, index)=>{
          return(
              <ContestPreview contest={contest} key={index}/>
          );
        })}
         
            
      </div>
      </div>
    );
  }
}

export default  App;
