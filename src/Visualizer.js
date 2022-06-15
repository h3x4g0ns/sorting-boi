import React from 'react';
import Component from 'react';

export default class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      algo: "bubble",
      size: 100,
      max: 100
    };

    this.generateArray();
  }

  generateArray = () => {
    console.log("generating");
    for(let i = 0; i < this.state.size; i++) {
      this.state.array[i] = Math.random() * this.state.max;
    }
  }

  /*sortArray = () => {
    switch(this.state.algo) {
      case "bubble":
        bubbleSort();
        break;
      case "quick":
        quicksort();
        break;
      default:
        bubbleSort();
        break;
    }
  }*/

  render() {
    return(
      <div className="flex">
        {this.state.array.map((bar) => 
          <div className="bg-green-30 h-1/4"></div>)}
      </div>
    )
  }
}
