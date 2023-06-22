// Hooks
import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    const [config, setConfig] = useState(null) // vai configurar o metotodo q sera usado

    const [method, setMethod] = useState(null) // qual metodo sera usado get ou post

    const [callFetch, setCallFetch] = useState(false) // traz os dados novamente

    const [userId, setUserId] = useState(null)


    const httpConfig = async (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
        else if (method === 'PATCH') {
            setConfig({
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
        else if (method === 'DELETE') {
            setConfig({
                method,
                headers: {
                    'Content-type': 'application/json'
                },
            })
            setMethod('DELETE')
            setUserId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [url, callFetch])


    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)
                const json = await res.json()

                setCallFetch(json)
            }
            else if (method === 'PATCH') {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)
                const json = await res.json()

                setCallFetch(json)
            }
            else if (method === 'DELETE') {
                let deleteUrl = `${url}/${userId}`

                const res = await fetch(deleteUrl, config)
                const json = await res.json()

                setCallFetch(json)
            }
        }

        httpRequest()
    }, [config, method, url, userId])

    return { data, httpConfig }
}