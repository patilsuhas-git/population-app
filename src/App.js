import React from 'react';
import Callout from './Callout'
import CalloutUseEffect from './CalloutUseEffect'


export default class App extends React.Component{
    constructor({props}){
        super(props);

        this.state = {
            grouping: "State",
            year : "latest",
            getStateBack : null,
            data: []
        }
    }

    setYear(year){
        this.setState({
           year: year
        });
    }

    makeCallout = (data) => {
        this.setState = {
            data: data
        }
    }

    getStateBack() {
        console.log("-=-=-=-=-=" + this.state.getStateBack);
    }

    render() {
        return (
            <>
                <div className="App">

                    <CalloutUseEffect year="latest" grouping="State" measure="Population"/>
                </div>
            </>
        );
    }

}
