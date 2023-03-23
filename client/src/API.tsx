import axios from "axios"

const converterInstance = axios.create({
    baseURL: 
    // "http://localhost:4666/converter/"
    "https://unixtimestampconverterapi.onrender.com/converter/"
})

export const converterAPI = {
    dateToUnix(dateString:string) {
        return converterInstance.post("dateToUnix", {dateString:dateString})
    },
    unixToDate(unixTimestamp: number) {
        return converterInstance.post("unixToDate", {unixTimestamp: unixTimestamp})
    }
}