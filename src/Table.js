import React from 'react'
import Row from './Row'

export default function Table({data}) {
    var table;
    if(data.length > 0) {
        table = <table>
            <thead>
                <Row coltype="head" item={data[0]}/>
            </thead>
            <tbody>
                {data.map(
                    (item, index) =>
                    <Row coltype="body" key={index} index={index} item={item}/>
                )}
            </tbody>
        </table>
    } else {
        table = <div>No data to show...</div>
    }
    return(
        <>
        {table}
        </>
    );
}