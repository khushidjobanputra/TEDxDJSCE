import React from 'react';


export default function Card() {
    return (
        <div>
            <div
                className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-10 rounded-md m-[5px]"
            >
                <div className="">
                    <div
                        className=" group-hover:scale-125 w-full h-60 bg-blue-400 duration-500 rounded-lg"
                    >
                        <img className=" rounded-lg" src="https://cdn.britannica.com/44/127844-050-33AB565F/Barack-Obama-2009.jpg"></img>
                    </div>
                    <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                        <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900 rounded-sm bg-blue-900">
                        </div>
                        <span className="text-xl font-bold">Hello I am president</span>
                        <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                            President of united states of america, barack obama
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
