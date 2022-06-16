import { Component } from 'react';
import Visualizer from "./Visualizer";
import Select from "react-select";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algo: "bubble",
      startSorting: false,
    }
    this.options = [
      { value: 'bubble', label: 'Bubble Sort' },
      { value: 'quick', label: 'Quick Sort' },
      { value: 'merge', label: 'Merge Sort' },
      { value: 'heap', label: 'Heap Sort' },
      { value: 'insertion', label: 'Insertion Sort' },
      { value: 'selection', label: 'Selection Sort' }
    ];
  }

  triggerSorting = () => {
    console.log(this.state.algo);
    this.setState({startSorting: true});
  }

  triggerReset = () => {
    console.log("reset");
    this.setState({startSorting: false});
    this.forceUpdate();
  }
  
  render() {
    return (
      <div className="bg-gray-800 h-screen">
        <header className="font-mono text-4xl text-slate-50 pt-10 pl-10">
          <h1>Sorting Boi</h1>
        </header>
        <div className="flex pt-10 px-10">
          <div className="px-1 py-5 w-1/6">
            <Select options={this.options} 
                    value={this.state.algo}
                    onChange={(value) => this.setState({algo: value})}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white mt-5 font-bold py-2 px-4 rounded-full" 
                    onClick={this.triggerSorting}>
              Sort
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white mt-5 font-bold py-2 px-4 rounded-full" 
                    onClick={this.triggerReset}>
              Reset
            </button>
          </div>
          <div className="pr-10 w-5/6 mr-2">
            <Visualizer algo={this.state.algo}
                        startSorting={this.state.startSorting} / >
          </div>
        </div>
      </div>
    );
  }
}
