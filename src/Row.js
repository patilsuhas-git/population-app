import React from 'react'

export default function Row({coltype, index, item}){
    return(
        <tr>
            {Object.keys(item).map(key => (
               <td key={key}>
                   {(coltype==='head') ? key : item[key]}
               </td>
            ))}
        </tr>
    )
}