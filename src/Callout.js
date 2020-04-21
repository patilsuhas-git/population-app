import React from 'react';
import Table from './Table';

export default class Callout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            baseUrl: 'https://datausa.io/api/data?measures=Population',
            requestUrl: '',
            grouping: props.grouping,
            year: props.year,
            measure: props.measure,
            isLoading: false
        }
    }

    componentDidUpdate(prevProp, prevState){
        if(prevState.grouping !== this.state.grouping || prevState.year !== this.state.year) {
            this.getData();
        }
    }

    componentDidMount(){
        this.getData();
    }

    getGenerateRequestUrl(){
        let url = this.state.baseUrl;
        if(this.state.grouping) {
            url = url + '&drilldowns=' + this.state.grouping;
        }
        if(this.state.year) {
            url = url + '&year=' + this.state.year;
        }
        return url;
    }

    getData = async ()=>{
        let url = 'https://datausa.io/api/data?measures=Population';
        /*if(this.state.grouping) {
            url = url + '&drilldowns=' + this.state.grouping;
        }
        if(this.state.year) {
            url = url + '&year=' + this.state.year;
        }*/

        url = this.getGenerateRequestUrl();
        try{
            const response = await fetch(url);
            const json = await response.json();
            this.setState(
                {
                    data: json.data,
                    isLoading: false,
                }
            );
        } catch (error){
            this.setState({
              isLoading: false,
            })
        }
    }

    handleChange = (event)=> {
        if(event.target.id==="group") {
            this.setState(
                {
                    grouping: event.target.value
                }
            );
        } else {
            this.setState(
                {
                    year: event.target.value
                }
            );
        }
    }

    render(){
        return (
            <>
                <select id="group" value={this.state.grouping} onChange={this.handleChange}>
                <option value="Nation">Nation</option>
                <option value="State">State</option>
                </select>
                <select id="year" value={this.state.year} onChange={this.handleChange}>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="latest">Latest</option>
                </select>
                {this.state.isLoading && <div>Loading...</div>}
                <Table data={this.state.data} />
            </>
        );
    }
}