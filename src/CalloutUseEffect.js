import React, {useState, useEffect, useCallBack} from 'react';
import Table from './Table';

export default function CalloutUseEffect(props) {
    const [data, setData] = useState([]);
    const [grouping, setGrouping] = useState(props.grouping);
    const [year, setYear] = useState(props.year);

    const getdata = async ()=>{
        let url = getUrl();
        try{
            const response = await fetch(url);
            const json = await response.json();
            setData(json.data);
        } catch (error){
            console.log('Error occured : ', error);
        }
    }

    useEffect(()=>{
        getdata();
            return ()=>{
            console.log('Returned function in useEffect', data);
        }
     }, [grouping, year]);

    const getUrl = ()=>{
        let url = 'https://datausa.io/api/data?measures=Population';
        if(grouping) {
            url = url + '&drilldowns=' + grouping;
        }
        if(year) {
            url = url + '&year=' + year;
        }
        return url;
    }

    return (
        <>
            <select id="group" value={grouping} onChange={ (event)=> { setGrouping(event.target.value); } }>
                <option value="Nation">Nation</option>
                <option value="State">State</option>
            </select>
            <select id="year" value={year} onChange={ (event)=> { setYear(event.target.value); } }>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="latest">Latest</option>
            </select>
            <Table data={data} />
        </>
    );
}