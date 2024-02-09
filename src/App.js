import React, { Fragment } from "react";
// import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HookCounter from "./pages/HookCounter";
import BackendCall from "./pages/BackendCall";
import ComplexCounter from "./pages/ComplexCounter";
import HookCounter3 from "./pages/HookCounter3";
import AlexToDo from "./pages/AlexToDo";
import ArrayHook from "./pages/ArrayHook";
import CounterUseEffect from "./pages/EffectHook";
import MouseEffect from "./pages/MouseEffect";
import MouseContainer from "./pages/MouseContainer";
import IntervalHookCounter from "./pages/IntervalHookCounter";
import DataFetching from "./pages/DataFetching";
import SearchJournal from "./pages/SearchJournal";

function App() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/counter" element={<HookCounter/>}/>
          <Route path="/Alex" element={<AlexToDo/>}/>
          <Route path="/Backend" element={<BackendCall/>}/>
          <Route path="/complexcounter" element={<ComplexCounter/>}/>
          <Route path="/hookcounter3" element={<HookCounter3/>}/>
          <Route path="/ArrayHook" element={<ArrayHook/>}/>
          <Route path ="effectcounter" element={<CounterUseEffect/>}/>
          <Route path ="mouseeffect" element={<MouseEffect/>}/>
          <Route path ="MouseContainer" element={<MouseContainer/>}/>
          <Route path = "intervalcounter" element = {<IntervalHookCounter/>}/>
          <Route path = "datafetching" element = {<DataFetching/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
          <Route path = "journal" element = {<SearchJournal/>}/>

            
          </Routes>
        </BrowserRouter>
      </Fragment>
    )
  };

  //link to the api


export default App;
