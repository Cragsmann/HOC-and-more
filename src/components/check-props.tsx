import React, { ComponentType } from "react";

export const logProps = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent: React.FC<P> = (props) => {
    console.log("Props:", props);
    return <Component {...props} />;
  };

  return WrappedComponent;
};
