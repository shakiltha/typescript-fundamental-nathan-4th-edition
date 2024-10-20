import React from "react";
import { IProduct } from "./Products";
import {
  AppBar,
  Button,
  Dialog,
  Grid2,
  IconButton,
  Paper,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Close } from "@mui/icons-material";

export interface IDetailsProps {
  open: boolean;
  product: IProduct | null;
  handleClose(): void;
}

export interface IDetailsState {
  noSwitches: number;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export class DetailView extends React.Component<IDetailsProps, IDetailsState> {
  constructor(props: IDetailsProps) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      noSwitches: 70,
    };
  }

  render() {
    return (
      <div className="full-screen-details-dialogue">
        <Dialog
          fullScreen
          open={this.props.open}
          TransitionComponent={Transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.handleClose}
                aria-label="close"
              >
                <Close></Close>
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className="details-paper-padding-top">
            <Paper className="details-paper-body">
              <Grid2 container spacing={5}>
                <Grid2>
                  <img
                    className="large-image"
                    src={this.props.product?.image}
                    alt=""
                  />
                </Grid2>
                <Grid2
                  size="grow"
                  container
                  direction={"column"}
                  justifyContent="flex-start"
                  alignItems={"stretch"}
                >
                  <Grid2>
                    <h2>{this.props.product?.name}</h2>
                  </Grid2>
                  <Grid2>{this.props.product?.type}</Grid2>
                  <Grid2>{this.props.product?.longDescription}</Grid2>
                  <Grid2>
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Specifications</TableCell>
                            <TableCell align="right">&nbsp;</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Actuation Force</TableCell>
                            <TableCell>
                              {this.props.product?.specs?.actuationForce} g
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Actuation Point</TableCell>
                            <TableCell>
                              {this.props.product?.specs?.actuationPoint}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Bottom Out</TableCell>
                            <TableCell>
                              {this.props.product?.specs?.bottomOut}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Bottom Out Travel</TableCell>
                            <TableCell>
                              {this.props.product?.specs?.bottomOutTravel}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Price</TableCell>
                            <TableCell>
                              $ {this.props.product?.specs?.price}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid2>
                  <Grid2>&nbsp;</Grid2>
                  <Grid2>
                    <h3>Order Now :</h3>
                  </Grid2>
                  <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
                    <Grid2>
                      <TextField
                        type="number"
                        name="noSwitches"
                        id="standard-basic"
                        label="No of switches"
                        onChange={this.onChange}
                        value={this.state.noSwitches}
                      />
                    </Grid2>
                    <Grid2>&nbsp;</Grid2>
                    <Grid2>
                      <Button type="submit" variant="contained" color="primary">
                        Add to Cart
                      </Button>
                    </Grid2>
                  </form>
                </Grid2>
              </Grid2>
            </Paper>
          </div>
        </Dialog>
      </div>
    );
  }
  handleClose() {
    console.log(`Details: handleClose()`);
    this.props.handleClose();
  }
  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ noSwitches: parseInt(event.target.value) });
    console.log(`onChange : ${event.target.name} : ${event.target.value}`);
  }
  onSubmit(e: React.FormEvent) {
    console.log(`submit : ${this.state.noSwitches}`);
    e.preventDefault();
  }
}
