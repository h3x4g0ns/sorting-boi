import { Component } from 'react';

export default class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      algo: "bubble",
      size: 100,
      max: 100
    };
  }

  componentDidMount() {
    this.generateArray();
  }

  generateArray = () => {
    const array = [];
    for(let i = 0; i < this.state.size; i++) {
      array[i] = parseInt(Math.random() * this.state.max);
    }
    this.setState({array: array});
  }

  // sortArray = () => {
  //   switch(this.state.algo) {
  //     case "bubble":
  //       bubbleSort();
  //       break;
  //     case "quick":
  //       quicksort();
  //       break;
  //     default:
  //       bubbleSort();
  //       break;
  //   }
  // }

  render() {
    return(
      <div className="flex p-4 box-content mr-2">
          {this.state.array.map((value, index) => (
            <div className="bg-yellow-300 w-1px p-1.5 rounded-b-sm border" style={{height: 6*value+"px"}} key={index}></div>
          ))}
      </div>
    );
  }
}
