import React, { useEffect, useState } from 'react'

const DataFetched = ({ url, render }) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch(url);
            const finalData = await result.json()
            setData(finalData)
            setLoading(false)
        }

        fetchData()

    }, [])

    return render({ data, loading })

}

const DataFetching = () => {
    return (
        <div>
            <small>This example fetches data from an API and passes it to a child component via a render prop.</small>
            <DataFetched
                url={'https://jsonplaceholder.typicode.com/todos/1'}
                render={({ data, loading }) => {
                    return loading ? <p>Loading</p> : <h4>{data.title}</h4>
                }}
            />
        </div>
    )
}

export default DataFetching
