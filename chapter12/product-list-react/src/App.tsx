import React from "react";
import "./App.css";
import { MyButton } from "./MyButton";
import { Collection, IProduct } from "./Products";
import { CollectionView } from "./CollectionView";
import { DetailView } from "./DetailView";

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
  product: IProduct | null;
}

const collectionInstance = new Collection();

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      showDetails: false,
      product: null,
    };
    this.showDetailView = this.showDetailView.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  render(): React.ReactNode {
    return (
      <div>
        {/* <MyButton
          buttonName="Click here"
          handleButtonClick={this.handleClick}
        /> */}
        <CollectionView
          {...collectionInstance}
          handleItemClicked={this.showDetailView}
        ></CollectionView>
        <DetailView
          open={this.state.showDetails}
          product={this.state.product}
          handleClose={this.handleClose}
        ></DetailView>
      </div>
    );
  }
  // handleClick() {
  //   console.log(`App.handleClick() called`, this);
  //   this.setState({
  //     showDetails: !this.state.showDetails,
  //   });
  // }
  showDetailView(id: number) {
    let foundItem = collectionInstance.items.find((item) => item.id === id);
    if (foundItem) {
      this.setState({
        showDetails: true,
        product: foundItem,
      });
    }
  }
  handleClose() {
    console.log(`App: handleClose()`);
    this.setState({
      showDetails: false,
      product: null,
    });
  }
}

export default App;
