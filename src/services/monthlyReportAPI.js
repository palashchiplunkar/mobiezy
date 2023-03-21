import axios from "axios";

const monthlyReportAPI = axios.create({
    baseURL: "https://ld3igodwbj.execute-api.us-west-2.amazonaws.com/prod/mobilecollectionreport",
    headers: {
        "content-type": "application/json"
    }
})

export default monthlyReportAPI;