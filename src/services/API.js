import axios from "axios";

const API = axios.create({
    baseURL: "https://ld3igodwbj.execute-api.us-west-2.amazonaws.com/prod/",
    headers: {
        "content-type": "application/json"
    }
});

export default {

    loginAPI(value) {
        return API.post(
            "cableguy2-mobile-user-login-new",
            value
        )
    },

    agentSummaryAPI(value) {
        return API.post(
            "getagentsummary",
            value
        )
    },

    monthlyReportAPI(value) {
        return API.post(
            "mobilecollectionreport",
            value
        )
    }, 

    agentAreaSummaryAPI(value) {
        return API.post(
            "mobile-agentareasummary",
            value
        )
    },

    subscriptionExpiryReportAPI(value) {
        return API.post(
            "cableguy2-mobile-expiry-report",
            value
        )
    },

    subscriptionExpiryReportCountAPI(value) {
        return API.post(
            "cableguy2-mobile-cust-report-based-on-stb",
            value
        )
    }
}