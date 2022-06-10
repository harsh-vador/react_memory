import { useState } from "react";
import audi from "./assets/images/audi.png";
import bmw from "./assets/images/bmw.jpeg";
import ferrari from "./assets/images/ferrari.png";
import lamborghini from "./assets/images/lamborghini.png";
import mercedes from "./assets/images/Mercedes.png";
import porsche from "./assets/images/porsche.png";
import rolls from "./assets/images/rolls.jpeg";
import volvo from "./assets/images/volvo.png";

const items = [
  { id: 1, img: audi, stat: "" },
  { id: 1, img: audi, stat: "" },
  { id: 2, img: bmw, stat: "" },
  { id: 2, img: bmw, stat: "" },
  { id: 3, img: ferrari, stat: "" },
  { id: 3, img: ferrari, stat: "" },
  { id: 4, img: lamborghini, stat: "" },
  { id: 4, img: lamborghini, stat: "" },
  { id: 5, img: mercedes, stat: "" },
  { id: 5, img: mercedes, stat: "" },
  { id: 6, img: porsche, stat: "" },
  { id: 6, img: porsche, stat: "" },
  { id: 7, img: rolls, stat: "" },
  { id: 7, img: rolls, stat: "" },
  { id: 8, img: volvo, stat: "" },
  { id: 8, img: volvo, stat: "" },
].sort(() => Math.random() - 0.5);

export default items;
