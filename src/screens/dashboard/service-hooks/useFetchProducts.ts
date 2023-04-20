import fetchProducts from "ihealth/service/fetchProducts";
import { useEffect, useState } from "react";

const useFetchProducts = () => {
    const [data, setData] = useState({})

    useEffect(() => {x
        const fetchData = async() => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                const respData = await response.json();
                setData(respData)
            } catch (err){
                console.log(err)
            }
        }
        
        fetchData()
    }, [])

    console.log(data)
}   

// const useFetchProducts = async () => {
//     const [data, setData] = useState(null)
//     const [error, setError] = useState(null)
//     const [isLoading, setIsLoading] = useState(true)

//     await fetch('https://dummyjson.com/products').then((res) => res.json()).then(jsonRes => setData(jsonRes)).catch(err => setError(err)).finally(() => setIsLoading(false))

//     // const productsRes = await fetch('https://dummyjson.com/products')
//     // const productsJson = await productsRes.json();
//     // return productsJson;

//     // fetchProducts().then(res => res.json())

//     // // try {
//     // await fetchProducts().then((products) => setData(products)).catch(err => setError(err));
//     // // }
//     return {
//         data,
//         error,
//         isLoading
//     }
// }

export default useFetchProducts()