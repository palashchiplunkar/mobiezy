import axios from "axios";

const API = axios.create({
    baseURL: "https://ld3igodwbj.execute-api.us-west-2.amazonaws.com/prod/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default {
    loginAPI(value) {
        return API.post("cableguy2-mobile-user-login-new", value);
    },

    agentSummaryAPI(value) {
        return API.post("getagentsummary", value);
    },

    monthlyReportAPI(value) {
        return API.post("mobilecollectionreport", value);
    },

    dailyReportAPI(value) {
        return API.post("mobilecollectionreport", value);
    },
    OwnerMonthlyReportAPI(value) {
        return API.post("filtermobilecollectionreport", value);
    },

    agentAreaSummaryAPI(value) {
        return API.post("mobile-agentareasummary", value);
    },

    subscriptionExpiryReportAPI(value) {
        return API.post("cableguy2-mobile-expiry-report", value);
    },

    subscriptionExpiryReportCountAPI(value) {
        return API.post("cableguy2-mobile-cust-report-based-on-stb", value);
    },

    dropdownAgentDataAPI(value) {
        return API.post("cableguy2-get-area-and-agent-list", value);
    },

    viewCompalintAPI(value) {
        return API.post("getmobileassignedcomplaints", value);
    },

    customerSummary(value) {
        return API.post("mobile-agent-op-summary", value);
    },

    allCustomerData(value) {
        return API.post("down-sync-offline", value);
    },

    recordVisit(value) {
        return API.post("cableguy2-barcode", value);
    },
    lastPaymentHistory(value){
        return API.post("getmobilelastbill",value)
    }
};
