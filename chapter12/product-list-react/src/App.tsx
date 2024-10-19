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

class App extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render(): React.ReactNode {
    return (
      <MyButton buttonName="Click here" handleButtonClick={this.handleClick} />
    );
  }
  handleClick() {
    console.log(`App.handleClick() called`, this);
  }
}

export default App;
