import React from "react";

type StepProps = {
  goNext: (dataFromStep: Partial<DataObject>) => void;
};

export type DataObject = {
  name?: string;
  age?: string;
  country?: string;
};

type ControlledflowProps = {
  children: React.ReactNode;
  onDone: () => void;
  currentIndex: number;
  onNext: (dataFromStep: Partial<DataObject>) => void;
};

export const ControlledFlow: React.FC<ControlledflowProps> = ({
  children,
  currentIndex,
  onDone,
  onNext,
}) => {
  const goNext = (dataFromStep: Partial<DataObject>) => {
    onNext(dataFromStep);
    const childrenArray = React.Children.toArray(children);

    if (currentIndex === childrenArray.length - 1) {
      onDone();
    }
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement<StepProps>(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};
