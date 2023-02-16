import React from "react";

const Button = ({link, title}) => (
  <a class="bg-transparent hover:text-cyan-400 font-semibold text-base hover:text-white px-1 hover:border-transparent rounded" href={link}>{title}</a> 
);

export default Button;
