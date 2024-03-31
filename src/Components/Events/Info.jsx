import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";

const infoData = [
  {
    title: "SOCIAL MEDIA PROMOTION",
    description:
      " Your organization will receive extensive promotion across our social media platforms, including Instagram and LinkedIn. We'll feature your collaboration through posts, stories, and mentions, directing our audience of over 150 students to your website with convenient links.",
    imageUrl:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww",
    buttonText: "SOCIAL MEDIA",
    mainButton: "EXTENSIVE SOCIAL MEDIA PROMOTION",
    link: "https://www.instagram.com/tedxdjsce?igsh=cTBybmZsM3A0dnlo"
  },
  {
    title: "MARKETING",
    description:
      "Your organization's logo and name will be prominently displayed on all banners used for our events, campaigns, and promotional activities. This ensures high visibility and brand recognition, especially among the 3700+ students at our college. This includes both physical banners at event venues and digital banners in online promotions.",
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    buttonText: "DESIGN",
    mainButton: "YOUR ORGANIZATION’S NAME AND LOGO ON ALL EVENT BANNERS",
    link: "https://www.linkedin.com/company/tedx-djsce/"
  },
  {
    title: "TEDxDJSCE",
    description:
      "TEDxDJSCE is a platform where innovative ideas converge, sparking dialogue, and fostering creativity among the vibrant community of DJSCE. Through engaging talks, it aims to inspire, educate, and empower individuals to drive positive change in society.",
    imageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VEVEfGVufDB8fDB8fHww",
    buttonText: "WEBSITE",
    mainButton: "WHAT IS TEDxDJSCE ALL ABOUT?",
    link: "/"
  },
  {
    title: "COLLABORATION",
    description:
      "Our collaboration stands out due to our personalized approach, tailored specifically to meet your organization's unique goals and objectives. With a focus on fostering long-term partnerships, we prioritize understanding your needs to deliver tailored solutions that drive mutual success.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661573774331-5df65d7fd43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    buttonText: "COLLABORATION",
    mainButton: "WHAT MAKES US DIFFERENT FROM OTHER COLLABORATIONS?",
    link: "/collaborate"
  },
];

export function PopoverWithImage() {
  return (
    <>
      {infoData.map((info, index) => (
        <Popover key={index}>
          <PopoverHandler>
            <Button className="my-3 bg-white text-black md:w-[70vh] w-full p-3">
              {info.mainButton}
            </Button>
          </PopoverHandler>
          <PopoverContent className="z-[999] grid md:w-[28rem] w-[24rem] grid-cols-2 p-0">

            <div className="p-4">
              <Typography color="blue-gray" className="mb-2 text-md font-bold text-red-500">
                {info.title}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-black text-sm"
              >
                {info.description}
              </Typography>
              <a href={info.link} className="-ml-3 inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-x-2 capitalize"
                >
                  {info.buttonText}
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 1.91669L5.33333 6.00002L1.25 10.0834"
                      stroke="#212121"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </a>
            </div>

            <div className="!w-full p-3">
              <img
                src={info.imageUrl}
                alt="image"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </>
  );
}
