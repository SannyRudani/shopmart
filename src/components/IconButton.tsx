import React from "react";
import Icon from "./Icon";

const IconButtons = ({
  apendIcon,
  prependIcon,
  label,
  className,
  apendIconClassName,
  prependIconClassName,
  apendIconSize= "2rem",
  prependIconSize= "2rem"
}: {
  apendIcon?: string;
  prependIcon?: string;
  label: string;
  className: string;
  apendIconClassName?: string;
  prependIconClassName?: string;
  apendIconSize?: string;
  prependIconSize?: string;
}) => {
  return (
    <>
      <button className={`${className} flex items-center bg-transparent gap-x-2`}>
        {prependIcon && (
          <Icon icon={prependIcon} className={`${prependIconClassName} pr-1`} fontSize={prependIconSize}/>
        )}
        {label}
        {apendIcon && (
          <Icon icon={apendIcon} className={`${apendIconClassName} pl-1`} fontSize={apendIconSize} />
        )}
      </button>
    </>
  );
};

export default IconButtons;
