import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Nav from "./Components/Nav";
import axios from "axios";

function App() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState("");
  const [loading, isLoading] = useState(false);
  console.log(ip);

  // useEffect(() => {
  //   try {
  //     const res = axios.get("http://localhost:8000");
  //     console.log(res);
  //   } catch (err) {
  //     return err;
  //   }
  // }, []);

  const req = async () => {
    try {
      var res = await axios.get("http://localhost:8000/run", {
        params: { ip },
      });
      if (res.status == 200) {
        setResult(res.data);
      }
    } catch (err) {
      return <div>Error 404</div>;
    } finally {
      isLoading(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Input
          ip={ip}
          setIp={setIp}
          req={req}
          result={result}
          setResult={setResult}
          loading={loading}
          isLoading={isLoading}
        />
      </header>
    </div>
  );
}

export default App;
