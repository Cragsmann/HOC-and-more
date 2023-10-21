import React, { useState } from "react";

type StepProps = {
  goNext: (dataFromStep: Partial<DataObject>) => void;
};

type DataObject = {
  name?: string;
  age?: string;
  country?: string;
};

type ControlledflowProps = {
  children: React.ReactNode;
  onDone: (data: DataObject) => void;
};

export const UncontrolledFlow: React.FC<ControlledflowProps> = ({
  children,
  onDone,
}) => {
  const [data, setData] = useState<DataObject>({});
  const [stepIndex, setStepIndex] = useState(0);

  const goNext = (dataFromStep: Partial<DataObject>) => {
    const newData = {
      ...data,
      ...dataFromStep,
    };
    setData(newData);
    console.log(newData);

    const childrenArray = React.Children.toArray(children);
    const nextStepIndex = stepIndex + 1;

    if (nextStepIndex < childrenArray.length) {
      setStepIndex(nextStepIndex);
    } else {
      onDone(newData);
    }
  };

  const currentChild = React.Children.toArray(children)[stepIndex];

  if (React.isValidElement<StepProps>(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};
