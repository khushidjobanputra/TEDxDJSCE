import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const accordionData = [
  {
    id: 1,
    header: "What is TEDxDJSCE?",
    body:
      "TEDxDJSCE is an independently organized TED event held at D. J. Sanghvi College of Engineering (DJSCE). It serves as a platform for thought-provoking talks and presentations on a wide range of topics, including technology, entertainment, design, science, and innovation. TEDxDJSCE aims to inspire and spark conversations that lead to meaningful change by bringing together passionate speakers, engaged audience members, and forward-thinking ideas. Through its annual events, TEDxDJSCe cultivates an environment where diverse perspectives are celebrated, innovative ideas are shared, and individuals are empowered to make a positive impact in their communities and beyond.",
  },
  {
    id: 2,
    header: "Events at TEDxDJSCE?",
    body:
      "TEDxDJSCE hosts a diverse array of events aimed at fostering intellectual discourse, creativity, and innovation. From captivating TED Talks delivered by renowned speakers to interactive workshops and panel discussions, our events offer a platform for sharing groundbreaking ideas and inspiring change. Whether exploring emerging technologies, addressing pressing social issues, or celebrating cultural diversity, each TEDxDJSCE event is curated to spark curiosity, provoke thought, and ignite positive action. Through our collaborative approach and commitment to inclusivity, we strive to create memorable experiences that empower individuals to make a meaningful impact in their communities and beyond. Join us on a journey of exploration, discovery, and inspiration at TEDxDJSCE events, where ideas worth spreading come to life.",
  },
  {
    id: 3,
    header: "Why TEDxDJSCE?",
    body:
      "TEDxDJSCE is a platform that transcends boundaries, bringing together innovative thinkers, visionaries, and change-makers to share their ideas and spark meaningful conversations. Through thought-provoking talks, TEDxDJSCE inspires individuals to challenge the status quo, explore new perspectives, and drive positive change in their communities and beyond. With a focus on fostering creativity, collaboration, and critical thinking, TEDxDJSCE empowers attendees to unlock their full potential and make a tangible impact in the world. Whether it's exploring cutting-edge technologies, addressing pressing social issues, or celebrating cultural diversity, TEDxDJSCe offers a platform for voices to be heard and ideas to flourish. Join us on a journey of inspiration, enlightenment, and transformation at TEDxDJSCE.",
  },
];

export function AccordionComponent() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="mx-20 mt-12 pb-10">
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          className="my-5 rounded-lg border border-blue-gray-100 px-4 text-red-500"
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className={`border-b-0 text-2xl transition-colors text-white hover:text-red-500 ${
              open === item.id ? "text-red-500 hover:!text-white" : ""
            }`}
          >
            {item.header}
          </AccordionHeader>
          <AccordionBody className="pt-0 font-normal text-white text-xl">
            {item.body}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
