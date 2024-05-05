import { ICON_ROTATE_ANGLES } from "@/app/constants";
import React, { forwardRef, Ref } from "react";

export interface IconProps {
  className?: string;
  color?: string;
  icon: string;
  fontSize?:string,
  id?: string;
  onClick?: () => void;
  rotate?: keyof typeof ICON_ROTATE_ANGLES | null;
  rotating?: boolean;
  tag?: React.ElementType;
  disabled?: boolean;
  onMouseDown?: (event: React.MouseEvent) => void;
}

// eslint-disable-next-line react/display-name
const Icon = forwardRef(
  (
    {
      className,
      color ,
      icon,
      id,
      onClick,
      fontSize='2rem',
      rotate,
      rotating,
      tag: Tag = "i",
      ...rest
    }: IconProps,
    ref: Ref<HTMLElement>
  ) => {
    return(
      <Tag
      {...rest}
      id={id}
      ref={ref}
      onClick={onClick}
      style={{fontSize: `${fontSize}`, color:`${color}`}}
      className={`icon ${icon} ${className}`}
    />
    )
  }
);

export default Icon;