import React, { useRef } from "react";
import Card from "./Card";


function FrontDiv() {
    const ref = useRef(null)

    const data = [
        {
            desc: "we realy need your help so ill be able to write this code quickly dude",
            filesize: "05MB",
            close: true,
            tag: {isOpen: false, tagTitle:"download Now", tagColor: "green"},
        },
        {
            desc: "its a huge occsion for me to meet you like this .thats a great meeting",
            filesize: "25MB",
            close: true,
            tag: {isOpen: true, tagTitle:"Save File", tagColor: "green"},
        },
        {
            desc: "how are you boss. hope you are doing greate",
            filesize: "15MB",
            close: true,
            tag: {isOpen: false, tagTitle:"progress", tagColor: "blue"},
        }
    ];

  return (
    <>
      <div ref={ref} className="frontDiv   absolute  rounded-2xl flex justify-start items-start gap-3 w-full h-full border-4 border-white bg-slate-50/5 p-8">
        
  {
    data.map((item, index)=>(
        <Card data={item} reference={ref}/>
    ))
    }
      </div>
    </>
  )
}

export default FrontDiv;
