import "./styles/styles.scss";
import { Component, render } from "preact";

import IndecisionApp from "./components/IndecisionApp";
import "normalize.css";
import "./styles/styles.scss";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);

render(<IndecisionApp />, document.getElementById("root"));
