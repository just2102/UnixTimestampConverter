import { useState } from "react";
import copyIcon from "./assets/copy.svg";
import Preloader from "./Preloader";

interface Props {
  unixToDate: (unixTimestamp: number) => any;
  handleCopy: (result: Date) => void;
  isConverting: boolean;
}

const UnixToDate = ({ unixToDate, handleCopy, isConverting }: Props) => {
  const [unixTimestamp, setUnixTimestamp] = useState<number | null>(null);
  const [convertedDate, setConvertedDate] = useState<Date | null>(null);

  const onConvert = async () => {
    if (unixTimestamp) {
      const newDate = await unixToDate(unixTimestamp);
      if (newDate) {
        setConvertedDate(newDate);
      }
    }
  };

  return (
    <div className="converter unix_to_date">
      <label htmlFor="unix">Enter unix timestamp</label>
      <input
        type={"number"}
        onChange={(e) => {
          setUnixTimestamp(Number(e.target.value));
        }}
        name=""
        id="unix"
      ></input>

      <button onClick={onConvert}>Convert</button>
      <div className="result">
        {isConverting && <Preloader />}
        {convertedDate?.toString()}
        {convertedDate && (
          <img
            onClick={() => handleCopy(convertedDate)}
            src={copyIcon}
            alt="copy"
          />
        )}
      </div>
    </div>
  );
};

export default UnixToDate;
