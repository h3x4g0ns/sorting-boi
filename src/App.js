import { Component } from 'react';
import Visualizer from "./Visualizer";

export default class App extends Component {
  render() {
    return (
      <div className="bg-gray-800 h-screen">
        <header className="font-mono text-4xl text-slate-50 pt-10 pl-10">
          <h1>Sorting Boi</h1>
        </header>
        <div className="flex pt-10 px-10">
          <div className="bg-red-800 px-1 w-3/12">
            <h1>test1</h1>
          </div>
          <div className="bg-purple-800 pr-10 w-9/12 mr-2">
            <Visualizer/ >
          </div>
        </div>
      </div>
    );
  }
}
