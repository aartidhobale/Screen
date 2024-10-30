import React, { useState } from "react";

export function Popover({ children }) {
  return <div className="relative">{children}</div>;
}

export function PopoverTrigger({ children, onClick }) {
  return (
    <button onClick={onClick} className="popover-trigger">
      {children}
    </button>
  );
}

export function PopoverContent({ children, isOpen }) {
  return isOpen ? <div className="popover-content absolute">{children}</div> : null;
}
