import React, { useEffect } from 'react';
import Card from '../Components/Teams/Card';
import "./Teams.css"

export default function Teams() {

  useEffect(() => {
    document.title = "Team - TEDxDJSCE"; // Set the title of the page
  }, []);
  const cardData = [
    {
        name: "Raj Panchal",
        designation: "CHAIRPERSON",
        imageUrl: "src/assets/1_20240325_194212_0000.png"
    },
    {
        name: "Khushi Joshi",
        designation: "ADMIN",
        imageUrl: "src/assets/2_20240325_194213_0001.png"
    },
    {
      name: "Daxay Sanghavi",
      designation: "FINANCE HEAD",
      imageUrl: "src/assets/3_20240325_194213_0002.png"
  },
  {
    name: "Yash Mehta",
    designation: "FINANCE HEAD",
    imageUrl: "src/assets/4_20240325_194213_0003.png"
},
{
  name: "Keya Suvarna",
  designation: "CONTENT HEAD",
  imageUrl: "src/assets/5_20240325_194213_0004.png"
},
{
  name: "Jay Mistry",
  designation: "CONTENT HEAD",
  imageUrl: "src/assets/6_20240325_194213_0005.png"
},
{
  name: "Darsheel Sanghavi",
  designation:"CHIEF CURATOR",
  imageUrl: "src/assets/7_20240325_194213_0006.png"
},
{
  name: "Omar Shaikh",
  designation: "CHIEF CURATOR",
  imageUrl: "src/assets/8_20240325_194213_0007.png"
},
{
  name: "Tirth Nisar",
  designation: "EXECUTIVE PRODUCER",
  imageUrl: "src/assets/9_20240325_194213_0008.png"
},
{
  name: "Divyam Dedhia",
  designation: "EXECUTIVE PRODUCER",
  imageUrl:"src/assets/10_20240325_194213_0009.png"
},
{
  name: "Khushi Jobanputra",
  designation: "WEBSITE MANAGER",
  imageUrl: "src/assets/11_20240325_194213_0010.png"
},
{
  name: "Meet Patel",
  designation: "CREATIVES HEAD",
  imageUrl: "src/assets/12_20240325_194214_0011.png"
},
{
  name: "Kanika",
  designation: "PRODUCTION HEAD",
  imageUrl: "src/assets/13_20240325_194214_0012.png"
},
{
  name: "Vedant",
  designation: "MARKETING HEAD",
  imageUrl: "src/assets/14_20240325_194214_0013.png"
},
{
  name: "Husain Rehmanji",
  designation: "PR HEAD",
  imageUrl: "src/assets/15_20240325_194214_0014.png"
},
{
  name: "Vaidehi shah",
  designation: "PR HEAD",
  imageUrl: "src/assets/16_20240325_194214_0015.png"
},
{
  name: "Shrenik Khot",
  designation: "EVENT HEAD",
  imageUrl: "src/assets/17_20240325_194214_0016.png"
},
{
  name: "Parth Patva",
  designation: "EVENT HEAD",
  imageUrl: "src/assets/18_20240325_194214_0017.png"
},
    // Add more objects for additional cards
];

  return (
    <div className='flex justify-center w-screen parent w-screen h-screen'>
      <div className='pt-[2%]'>
        <div className='flex flex-nowrap'><div className=' text-red-600 text-8xl font-bold'>TEAM</div>
        <div className='text-white text-8xl font-bold'>x</div></div>
    <div className="pt-[2%]   grid md:grid-cols-3 gap-x-[10vh] gap-y-[5vh]">
      {/* // <div className=" grid lg:grid-cols-3 gap-4pt-[10%] container mx-[2.5%]"> */}
        
        {/* Map over the cardData array to render multiple Card components */}
        {cardData.map((card, index) => (
                <Card 
                    key={index} // Ensure each card has a unique key
                    name={card.name}
                    designation={card.designation}
                    imageUrl={card.imageUrl}
                />
            ))}
    </div>
    </div>
    </div>
    
  )
}
