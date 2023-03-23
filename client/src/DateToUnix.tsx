import { useState } from "react";
import copyIcon from "./assets/copy.svg";

interface Props {
  dateToUnix: (dateString: string) => any;
  handleCopy: (result: number) => void;
}

const DateToUnix = ({ dateToUnix, handleCopy }: Props) => {
  const [dateString, setDateString] = useState<string | null>(null);
  const [convertedUnix, setConvertedUnix] = useState<number | null>(null);

  const onConvert = async () => {
    if (dateString) {
      const newUnix = await dateToUnix(dateString);
      if (newUnix) {
        setConvertedUnix(newUnix);
      }
    }
  };
  return (
    <div className="converter date_to_unix">
      <label htmlFor="date">Enter Date</label>
      <input
        id="date"
        onChange={(e) => setDateString(e.target.value)}
        type="date"
      />

      <button onClick={onConvert}>Convert</button>

      <div className="result">
        {convertedUnix}
        {convertedUnix && (
          <img
            onClick={() => handleCopy(convertedUnix)}
            src={copyIcon}
            alt="copy"
          />
        )}
      </div>
    </div>
  );
};

export default DateToUnix;
