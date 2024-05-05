import React from "react";
import { ICON_NAMES } from "../constants";
import Icon from "@/components/Icon";

const Icons: React.FC = () => (
  <div className="icons">
    <h1 className="icons__title">Icons</h1>
    <ul className="icons__list flex gap-4 flex-wrap">
      {Object.entries(ICON_NAMES).map(([key, value]) => (
        <li key={key} className="flex justify-center w-1/6 flex-col">
          <Icon icon={value} fontSize="3rem" className="flex justify-content" />
          <strong className="flex justify-content">{key}</strong>
          <div className="flex justify-content">{value}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default Icons;