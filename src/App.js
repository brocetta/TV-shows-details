import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import React from "react";
import {useState, useEffect} from "react";
import AboutPage from "./pages/AboutPage/AboutPage";
import {Switch, Route} from "react-router-dom";
import Loader from "./components/Loader/Loader";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [showId, setShowId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("//api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
        setTimeout(() => setIsLoading(false), 1000);
      });
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/TV-shows-details">
          {!isLoading ? (
            <LandingPage fetchData={fetchData} setShowId={setShowId} />
          ) : (
            <Loader />
          )}
        </Route>
        <Route exact path="/details">
          {!isLoading ? (
            <DetailsPage fetchData={fetchData} showId={showId} />
          ) : (
            <Loader />
          )}
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
