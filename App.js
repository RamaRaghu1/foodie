const heading = React.createElement(
  "div",
  {},
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello world from REACT")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
