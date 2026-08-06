import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div className="flex w-full justify-center px-4 md:px-0">
      <div className={`w-full max-w-300 ${className ?? ""}`} {...props}>
        {children}
      </div>
    </div>
  );
};
