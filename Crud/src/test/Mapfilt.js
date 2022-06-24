import { useEffect, useState } from "react";
import "./App.css";

function Mapfilt() {
  const [user, setUser] = useState();
  const dataApi = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(dataApi)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const x = () => {};
  return (
    <div className="App">
      <p>Users List </p>
      <div>
        {user
          ? user.map((data, i) => (
              <p key={i}>{`NAME : ${data.name}----- EMAIL : ${data.email}`}</p>
            ))
          : "not found users connect to internet"}
      </div>
      <div>
        {user
          ? user
              .filter((dat) => dat.username === "Bret")
              .map((id, i) => <p key={i}>{id.id}</p>)
          : "not found filter match"}
      </div>
    </div>
  );
}

export default Mapfilt;
