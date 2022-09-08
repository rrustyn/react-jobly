import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    console.log("rescomp", res.company);
    return res.company;

  }

  /** Get all companies */

  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  /** Get companies that match search criteria */

  static async searchCompanies(name) {
    //let res = await this.request(`companies?name=${name}`);
    let res = await this.request(`companies`, { name });
    return res.companies;
  }

  /** Get all jobs */

  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  /** Get jobs that match search criteria */

  static async searchJobs(title) {
    //desctructure for title,name
    let res = await this.request(`jobs?title=${title}`);
    return res.jobs;
  }

  /** Register User */
  static async registerUser(user) {
    let res = await this.request(`register`, user, "post");
    return res.token;
  }

  /** Login User */
  static async loginUser({ username, password }) {
    let res = await this.request(`token`, { username, password }, "post");
    return res.token;
  }

}

export default JoblyApi;