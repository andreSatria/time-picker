/* eslint no-console:0 */
import '../assets/index.less';
import React from 'react';
// import moment from 'moment';
import dayjs from 'dayjs';
import TimePicker from '..';

class App extends React.Component {
  state = {
    value: dayjs(),
  };

  handleValueChange = (value) => {
    this.setState({ value });
  };

  clear = () => {
    this.setState({
      value: undefined,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <TimePicker defaultValue={value} onChange={this.handleValueChange} />
        <TimePicker value={value} onChange={this.handleValueChange} />
        <button onClick={this.clear} type="button">
          clear
        </button>
      </div>
    );
  }
}

export default App;
