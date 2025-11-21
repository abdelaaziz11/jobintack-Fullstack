import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                console.log(data);
                setLoading(false)
            })
            .catch(error => {console.log(error)
                setLoading(false)
            })

    }, [url])

    return { users, loading, error }
}


export default useFetch