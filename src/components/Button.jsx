import React from "react";

const Button = ({link}) => (
  <a class="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold text-base hover:text-white px-1 border border-cyan-400 hover:border-transparent rounded" href={link}>»</a> 
);

export default Button;
