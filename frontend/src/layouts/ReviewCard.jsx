import React from "react";

const ReviewCard = ({comments, img, name}) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-12 border-lightText md:border-none p-3 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className=" text-emerald-900">
         {comments}
         </p>
      </div>

      <div className=" flex flex-row  items-center overflow-hidden py-2 gap-2 left-0">
        <img className=" rounded-full w-2/12 left-0" src={img} alt="img" />
        <h3 className=" font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
