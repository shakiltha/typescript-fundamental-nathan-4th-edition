import React from "react";
import "./App.css";
import { MyButton } from "./MyButton";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export interface IAppProps {}
export interface IAppState {
  showDetails: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showDetails: false,
    };
  }
  render(): React.ReactNode {
    return (
      <>
        <MyButton
          buttonName="Click here"
          handleButtonClick={this.handleClick}
        />
        <p>showDetails = {this.state.showDetails ? "true" : "false"}</p>
      </>
    );
  }
  handleClick() {
    console.log(`App.handleClick() called`, this);
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }
}

export default App;
