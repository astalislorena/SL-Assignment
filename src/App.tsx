import { useEffect } from "react";
import "./App.css";
import { Gist } from "./api/models/Gist";
import { axiosClient } from "./api/axiosClient";

function App() {
  useEffect(() => {
    axiosClient
      .get<Gist[]>("/users/eumel8/gists")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
