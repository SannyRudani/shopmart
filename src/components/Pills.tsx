import React from "react";
import Icon from "./Icon";

const Pills = ({ pillIcon = "pls-Cart", notificationCount=0 }: { pillIcon: string, notificationCount:number }) => {
  return (
    <div className="relative w-8 h-8">
      <Icon icon={pillIcon} fontSize="2rem" />
      <div className="border absolute right-0 top-0 flex items-center bg-sky-400 !leading-3 rounded-full text-[0.7rem] px-0.5 justify-center">
        {notificationCount}
      </div>
    </div>
  );
};

export default Pills;
