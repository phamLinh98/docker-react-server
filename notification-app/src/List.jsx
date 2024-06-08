import React from 'react'

export default function ListComponent(props) {
    const { dataForList } = props;
    return (
        <div>
            <ul>
                {dataForList.map((data, index) =>
                    <li key={index}>{data.name + "-" + data.age}</li>
                )}
            </ul>
        </div>
    )
}
