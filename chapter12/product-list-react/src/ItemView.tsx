import React from "react";
import { IProduct } from "./Products";
import { Card, CardHeader, CardMedia } from "@mui/material";
import "./ItemView.css";

export interface IItemView extends IProduct {
  onItemClicked(id: number): void;
}

export class ItemView extends React.Component<IItemView> {
  constructor(props: IItemView) {
    super(props);
    this.onItemClicked = this.onItemClicked.bind(this);
  }
  render() {
    return (
      <div className="item-view-card">
        <Card onClick={this.onItemClicked}>
          <CardHeader title={this.props.name} subheader={this.props.type} />
          <CardMedia className="card-media-image" image={this.props.image} />
        </Card>
      </div>
    );
  }
  onItemClicked() {
    this.props.onItemClicked(this.props.id);
  }
}
