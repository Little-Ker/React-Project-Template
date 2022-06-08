import React, { useEffect } from "react"
import axios from 'axios'

const AxiosEx = () => {
    const [data, setData] = React.useState([])

    useEffect(() => {
        axios.get('/data/dataList.json').then((response) => {
            setData(response.data.titleData)
        })
    }, [])

    return (
        <div>
            <h2>Axios</h2>
            {data.map((item, index) => (
                <p key={index}>{item.title} : {item.txt}</p>
            ))}
        </div>
    )
}

const ViewA = () => {
    return (
        <>
            <h1>ViewA</h1>
            <AxiosEx />
        </>
    )
}

export default ViewA