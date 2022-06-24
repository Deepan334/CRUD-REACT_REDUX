import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, deletUser,editUser } from "./Redux/Action";
import "./App.css";
import Adduser from "./components/Adduser";

function App() {
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const select = useSelector((s) => s.usersReducer);
  useEffect(() => {
    dispatch(loadUser());
    console.log("dis");
  }, []);


  const handdel = (id) => {
    dispatch(deletUser(id));
  };

  const handed = (id) => {
    dispatch(editUser(id));
  };
  return (
    <div className="App">
      <Adduser />
      <div>
        {user
          ? user.map((res) => (
              <h1 key={res.id}>
              {`User Name:${res.name} ----- Email :${res.email}---- Address :${res.adderss}`}
              <div>
                <button onClick={() => handdel(res.id)}>delete</button>
                <button onClick={() => handed(res.id)}>Edit</button>
              </div>
              </h1>
            ))
          : "loading......."}
      </div>
    </div>
  );
}

export default App;
