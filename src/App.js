import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAdvice = async () => {
    axios
      .get(url)
      .then((response) => {
        setAdvice(response.data.slip.advice);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <h2>{advice}</h2>
        )}
        <button onClick={fetchAdvice}>
          <span>Another one!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
