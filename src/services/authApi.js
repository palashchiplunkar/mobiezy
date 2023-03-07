import axios from "axios";

const loginAPI = axios.create({

        baseURL: "https://ld3igodwbj.execute-api.us-west-2.amazonaws.com/prod/",
        headers: {
            'content-type': 'application/json'
        }
    }
)

export default loginAPI;