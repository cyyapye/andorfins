import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import TextField from './TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = (theme: Theme) => ({});

class TodoList extends React.Component {
  state = {
    items: [],
  };

  handleSave = (value: string) => {
    const items = this.state.items;
    items.push(value);

    this.setState({
      items,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>
          <ListItem key="new">
            <TextField onSave={this.handleSave} />
          </ListItem>
          {this.state.items.map(value => (
            <ListItem key={value}>
              <ListItemText primary={value} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);