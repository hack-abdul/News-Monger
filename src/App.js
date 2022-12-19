import "./App.css";
// import Footer from "./components/Footer";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from "./components/Footer";

const App = () => {

  const pageSize = 15;
  const country = "in";
  const apiKey = process.env.REACT_APP_API_KEY




  const [progress, setprogress] = useState(0)
  const [Bottom, setBottom] = useState(false)

  const setProgress = (progress) => {
    setprogress(progress)
  }

  const handleFooter = (status) => {
    setBottom(status)
  }





  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#ef233c'
          progress={progress}
          height={3}
          shadow={true}
          transitionTime={1000}
          waitingTime={350}
        // background='#0f1463'
        />
        <div className="container my-5">
          <Routes>
            <Route
              root
              exact
              path="/"
              element={
                <NewsComponent handleFooter={handleFooter} apiKey={apiKey} setProgress={setProgress}
                  key="general"
                  pageSize={pageSize}
                  country={country}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsComponent handleFooter={handleFooter} apiKey={apiKey} setProgress={setProgress}
                  key="business"
                  pageSize={pageSize}
                  country={country}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent handleFooter={handleFooter} apiKey={apiKey} setProgress={setProgress}
                  key="entertainment"
                  pageSize={pageSize}
                  country={country}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <NewsComponent handleFooter={handleFooter} apiKey={apiKey} setProgress={setProgress}
                  key="health"
                  pageSize={pageSize}
                  country={country}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsComponent handleFooter={handleFooter} apiKey={apiKey} setProgress={setProgress}
                  key="science"
                  pageSize={pageSize}
                  country={country}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent handleFooter={handleFooter} apiKey={apiKey} setProgress={setProgress}
                  key="sports"
                  pageSize={pageSize}
                  country={country}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent handleFooter={handleFooter} apiKey={apiKey} setProgress={setProgress}
                  key="technology"
                  pageSize={pageSize}
                  country={country}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </div>
        {Bottom && <Footer />}
      </BrowserRouter>
    </>
  );

}


export default App;