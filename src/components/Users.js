import React, { useState, useEffect } from "react";
import Apicalls from "../components/enpoints/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  const f = async () => {
    const dat = await Apicalls.fetchUsers();
    setUsers(dat.data?.data);
  };

  useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1> 
      <div className="flex">
        {users?.length &&
          users?.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
