import { useState } from "react";
import copyIcon from "./assets/copy.svg"


interface Props {
    unixToDate: (unixTimestamp:number) => Date
    handleCopy: (result: Date) => void
}

const UnixToDate = ({unixToDate, handleCopy}:Props) => {
    const [unixTimestamp, setUnixTimestamp] = useState<number | null>(null)
    const [convertedDate, setConvertedDate] = useState<Date|null>(null)

    const onConvert = () => {
        if (unixTimestamp) {
            const newDate = unixToDate(unixTimestamp);
            console.log(newDate)
            setConvertedDate(unixToDate(unixTimestamp))
        }
    }

    return ( 
        <div className="converter unix_to_date">
            <label htmlFor="unix">Enter unix timestamp</label>
            <input type={"number"} onChange={(e)=>
            {
                setUnixTimestamp(Number(e.target.value))}
            } 
            name="" id="unix"></input>

            <button onClick={onConvert}>Convert</button>
            <div className="result">
                {convertedDate?.toString()}
                {convertedDate && <img onClick={()=>handleCopy(convertedDate)} src={copyIcon} alt="copy" />}
            </div>
        </div>
     );
}
 
export default UnixToDate;