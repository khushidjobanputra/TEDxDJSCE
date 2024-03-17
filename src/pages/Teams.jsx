import React, { useEffect } from 'react';
import Card from '../Components/Teams/Card';

export default function Teams() {

  useEffect(() => {
    document.title = "Team - TEDxDJSCE"; // Set the title of the page
  }, []);

  return (
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
  )
}
