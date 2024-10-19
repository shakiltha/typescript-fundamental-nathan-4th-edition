import { Button } from "@mui/material";
import React from "react";

export interface IMyButtonProps {
  buttonName: string;
  handleButtonClick(): void;
}

export class MyButton extends React.Component<IMyButtonProps> {
  constructor(props: IMyButtonProps) {
    super(props);
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }
  render(): React.ReactNode {
    return (
      <Button color="primary" onClick={this.onButtonClicked}>
        {this.props.buttonName}
      </Button>
    );
  }
  onButtonClicked() {
    console.log(`MyButton.onButtonClicked() called`, this);
    this.props.handleButtonClick();
  }
}
