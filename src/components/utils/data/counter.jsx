import { useEffect, useState } from "react";

const Counter = ({ end }) => {
    const [count, setcount] = useState(0);
    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = Math.ceil(end / duration);
        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                setcount(end);
                clearInterval(interval);
            }
            else {
                setcount(start);
            }
        }, 30);


        return () => clearInterval(interval);
    }, [end])

    return <span>{count}</span>;
}
export default Counter;