import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Theme, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const styles = (theme: Theme) => ({});

class StyledTextField extends React.Component {
  state = {
    accomplishment: '',
  };

  handleChange = (event: React.ChangeEvent) => {
    this.setState({
      accomplishment: event.target.value,
    });
  };

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.props.onSave(this.state.accomplishment);
      this.setState({
        accomplishment: '',
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <TextField
        id="accomplishment"
        label="What did you accomplish?"
        className={classes.textField}
        value={this.state.accomplishment}
        placeholder="Shipped adding an accomplishment feature."
        fullWidth
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        margin="normal"
      />
    );
  }
}

StyledTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default withStyles(styles)(StyledTextField);