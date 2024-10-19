import React from "react";
import { Collection } from "./Products";
import { ItemView } from "./ItemView";
import { Box } from "@mui/material";

export class CollectionView extends React.Component<Collection> {
  constructor(props: Collection) {
    super(props);
    this.handleItemClicked = this.handleItemClicked.bind(this);
  }
  handleItemClicked(id: number) {
    console.log(`handleItemClicked : ${id}`);
    this.props.handleItemClicked(id);
  }
  render(): React.ReactNode {
    let items = this.props.items.map((item) => {
      return (
        <ItemView
          {...item}
          key={item.id}
          onItemClicked={this.handleItemClicked}
        />
      );
    });
    return (
      <Box display="flex" flexWrap="wrap">
        {items}
      </Box>
    );
  }
}
