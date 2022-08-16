import React, { useEffect } from "react";
import { SideBar } from "../design/Navigation";

export const SideBarMenu = ({ activateSideBar }) => {
  useEffect(() => {
    console.log("sideBar works");
  });
  return (
    <SideBar className={activateSideBar ? "active" : ""}>
      <p>SiderBar</p>
    </SideBar>
  );
};
