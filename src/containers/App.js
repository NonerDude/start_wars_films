

import { connect } from 'react-redux';
import { getFilms } from '../actions';

import App from '../components/App';

const mapStateToProps = (state) => ({films: state.films});
const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(getFilms())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
