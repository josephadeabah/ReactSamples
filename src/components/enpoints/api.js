import axios from "axios";

class Apicalls {
  fetchUsers = async () => {
    return await axios.get("https://reqres.in/api/users");
  };

  createUser = async () => {
    var postData = {
      name: "morpheus",
      job: "leader",
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await axios.post(
      "https://reqres.in/api/users",
      postData,
      axiosConfig
    );
    console.log("Post res", response);
    return response;
  };
}

export default new Apicalls();
