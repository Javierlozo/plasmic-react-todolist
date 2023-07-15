import * as React from "react";

export interface CollapsibleProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  verbose?: boolean;
}

export function Collapsible({
  header,
  children,
  className,
  verbose,
}: CollapsibleProps) {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={className}>
      <div onClick={toggle}>{header}</div>
      {open && <div>{children}</div>}
    </div>
  );
}
