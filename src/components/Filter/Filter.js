import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import contactAction from '../../redux/actions/contact-actions';

const filterInputID = uuidv4();
class Filter extends Component {
  render() {
    const { filter, handleChange, resetValue } = this.props;

    return (
      <label htmlFor={filterInputID} className={s.phonebook__filter}>
        <button className={s.phonebook__btn} onClick={() => resetValue('')}>
          <Icon style={{ color: grey[800], fontSize: 20 }}>search</Icon>
        </button>
        <input
          type="text"
          name="filter"
          value={filter}
          id={filterInputID}
          onChange={handleChange}
          placeholder=" Find contacts by name"
        />
      </label>
    );
  }
}

Filter.defaultProps = { filter: '' };
Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleChange: e =>
    dispatch(contactAction.addValue(e.target.name, e.target.value)),
  resetValue: value => dispatch(contactAction.resetValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
