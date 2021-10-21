import React, { Component } from "react";
import { Button, IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // tags: ["tag1", "tag2", "tag3"],
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncreament = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <React.Fragment>
        <IconButton aria-label="cart" color={this.getBadgeColor()}>
          <Badge badgeContent={this.props.counter.value} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <Button
          onClick={() => this.props.onIncrement(this.props.counter)}
          variant="contained"
          color="primary"
        >
          Increment
        </Button>

        <Button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>

        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeColor() {
    return this.props.counter === 0 ? "secondary" : "primary";
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
