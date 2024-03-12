import React from 'react';
import Card from './Card';

import "./Teams.css";
import backgroundImage from "./X.jpg";

export default function Teams() {
  return (
    <div id="team">
    <div className="flex flex-wrap justify-center pt-[10%]">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}
