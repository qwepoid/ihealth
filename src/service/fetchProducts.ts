const fetchProcucts = async () => {
    const productsRes = await fetch('https://dummyjson.com/products')
    const productsJson = await productsRes.json();
    return productsJson;
 }

export default fetchProcucts