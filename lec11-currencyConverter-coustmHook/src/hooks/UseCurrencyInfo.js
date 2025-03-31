import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return; // Avoid fetching if currency is empty

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{2025-01-01}/{apiVersion}/{endpoint}

`)
            .then((res) => res.json())
            .then((res) => {
                console.log("API Response:", res); // Debugging log
                setData(res[currency] || {}); // Ensure safe assignment
            })
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]); // Runs whenever `currency` changes

    return data;
}

export default UseCurrencyInfo;
