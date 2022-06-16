import { Component } from 'react';

export default class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      startSorting: props.startSorting,
      algo: props.algo,
      size: 100,
      max: 100
    };
  }

  componentWil

  componentDidMount() {
    this.generateArray();
    console.log(this.state.algo);
    console.log(this.state.startSorting);
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
      <div className="flex p-4 mr-2">
          {this.state.array.map((value, index) => (
            <div className="bg-yellow-500 max-w-xs p-1.5 rounded-b-sm border border-yellow-600" style={{height: 6*value+"px"}} key={index}></div>
          ))}
      </div>
    );
  }
}
