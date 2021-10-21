import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={this.props.onReset}
          variant="contained"
          color="default"
        >
          Reset
        </Button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
