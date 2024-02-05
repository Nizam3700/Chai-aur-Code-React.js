import { useEffect, useState } from "react"

function useCurrencyinfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((result) => result.json())
        .then((result) => setData(result[currency]))
        console.log(data);
    }),[currency]

    console.log(data);
    return data;

}

export default useCurrencyinfo;