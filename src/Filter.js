import React from 'react';

export default class Filter extends React.Component {
  constructor(props) {
      super(props)
    this.state = {
        groupValue: 'Nation',
        yearValue:  'latest',
        callback: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      if(event.target.id==="group") {
          this.setState({groupValue: event.target.value});
      } else {
          this.setState({yearValue: event.target.value});
      }
      this.state.callback = this.state;
  }

  render() {
      return (
          <>
            <label>
                Select Group : <select id="group" className="browser-default custom-select" value={this.state.groupValue} onChange={this.handleChange}>
                <option value="Nation">Nation</option>
                <option value="State">State</option>
                </select>
            </label>
            <label>
                Year : <select id="year" className="browser-default custom-select" value={this.state.yearValue} onChange={this.handleChange}>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="latest">Latest</option>
                </select>
            </label>
          </>
      );
    }
}