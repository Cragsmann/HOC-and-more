import "./App.css";
// import {UncControlledModal } from "./components/Uncontrolled-modal";
// import { useState } from "react";

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <UncontrolledModal
//         showModal={showModal}
//         onClose={() => setShowModal(false)}
//       >
//         <h3 style={{ color: "black" }}>Im a Modal</h3>
//       </UncontrolledModal>
//       <button onClick={() => setShowModal(!showModal)}>
//         {showModal ? "HideModal" : "ShowModal"}
//       </button>
//     </>
//   );
// }

// export default App;
//--------------------------------------------------------------------------------------
// const StepOne: React.FC<{ goNext?: (data: { name: string }) => void }> = ({
//   goNext,
// }) => {
//   return (
//     <>
//       <h1>StepOne: Enter your Name</h1>
//       <button onClick={() => goNext && goNext({ name: "My name" })}>
//         Next
//       </button>
//     </>
//   );
// };

// const StepTwo: React.FC<{ goNext?: (data: { age: string }) => void }> = ({
//   goNext,
// }) => {
//   return (
//     <>
//       <h1>StepTwo: Enter age</h1>
//       <button onClick={() => goNext && goNext({ age: "23" })}>Next</button>
//     </>
//   );
// };

// const StepThree: React.FC<{ goNext?: (data: { country: string }) => void }> = ({
//   goNext,
// }) => {
//   return (
//     <>
//       <h1>StepThree: Enter country</h1>
//       <button onClick={() => goNext && goNext({ country: "Nevada" })}>
//         Next
//       </button>
//     </>
//   );
// };

// import React, { useState } from "react";
// import { ControlledFlow, DataObject } from "./components/controlled-flow";

// function App() {
//   const [data, setData] = useState<DataObject>({});
//   const [stepIndex, setStepIndex] = useState(0);

//   const onNext = (dataFromStep: Partial<DataObject>) => {
//     const newData = {
//       ...data,
//       ...dataFromStep,
//     };
//     setData(newData);
//     console.log(newData);

//     setStepIndex(stepIndex + 1);
//   };

//   return (
//     <>
//       <ControlledFlow
//         currentIndex={stepIndex}
//         onNext={onNext}
//         onDone={() => {
//           alert("Finished");
//         }}
//       >
//         <StepOne />
//         <StepTwo />
//         <StepThree />
//       </ControlledFlow>
//     </>
//   );
// }

// export default App;

import React from "react";
import { UserInfo } from "./components/user-info";
import { includeUser } from "./components/include-user";
import { UserInfoForm } from "./components/user-form";

const UserInfoWithLoader = includeUser(UserInfo, 3);

const App: React.FC = () => {
  // const user: UserType = {
  //   name: "John",
  //   age: 30,
  //   country: "USA",
  //   books: ["Book1", "Book2"],
  // };

  return (
    <>
      {/* <UserInfoWrapper /> */}
      <UserInfoForm />
    </>
  );
};

export default App;
