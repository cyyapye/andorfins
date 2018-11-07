import * as React from 'react';
import * as PropTypes from 'prop-types';
import { MuiThemeProvider, Theme, withStyles } from '@material-ui/core/styles';
import MyTheme from './assets/MyTheme';
import Header from './components/Header';
import TodoList from './components/TodoList';


const styles = (theme: Theme) => ({
  root: {
    width: '100%',
  },
  container: {
    width: 600,
    margin: '0 auto',
  },
});

class MyApp extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={MyTheme}>
        <div className={classes.root}>
          <Header />
          <div className={classes.container}>
            <TodoList />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

MyApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const App = withStyles(styles, { withTheme: true })(MyApp);
