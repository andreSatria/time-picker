import '../assets/index.less';
import React from 'react';
// import moment from 'moment';
import dayjs from 'dayjs';
import TimePicker from '..';

const App = () => <TimePicker defaultValue={dayjs()} showSecond={false} minuteStep={15} />;

export default App;
