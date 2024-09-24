"use strict";
//the below line create an object
/*
const heading = React.createElement(
  "h1",
  { id: "heading", class: "class--1 background" },
  "Hello World From React!"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);
*/

const parent = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello world --child--1--"),
    React.createElement("h2", {}, "h2 child--1"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello World! --child-2--"),
    React.createElement("h1", {}, "h2 child--2"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
