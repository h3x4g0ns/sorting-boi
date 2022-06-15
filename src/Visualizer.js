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
      <div className="flex">
          <div className="bg-green-30 h-1/4"></div>
      </div>
    )
  }
}
