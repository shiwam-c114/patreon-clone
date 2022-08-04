import React, { createContext, useState } from "react";

export const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {

  return <SidebarContext.Provider  value={useState("init")} >{children}</SidebarContext.Provider>;
};
