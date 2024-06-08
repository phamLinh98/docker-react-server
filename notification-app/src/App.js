import React from "react";
import ButtonComponent from "./Button";
import ListComponent from "./List";
import NotificationComponent from "./Notification";
import { useState } from "react";

export default function App() {
  const data = [{ name: "Linh", age: 18 }];
  const [state, setState] = useState(data);
  const addingNewDataToList = () => {
    const newData = [...state, { name: "Linh", age: 18 }];
    setState(newData);
    console.log("render do add :>> ");
  };
  const deleteOneRecordFromList = () => {
    if (state.length > 0) {
      const removeData = state.slice(0, -1);
      setState(removeData);
      console.log("render do delete :>> ");
    }
  };
  const changeAllInfoOfElement = () => {
    if (state.length > 0) {
      const names = [
        "Izuka- Iu",
        "Izuka- Cute",
        "Izuka- Kawaii",
        "Izuka- Love",
      ];
      const age = [18, 20, 19, 21, 26, 18, 28];
      const randomName = Math.floor(Math.random() * names.length);
      const randomAge = Math.floor(Math.random() * age.length);
      const changeData = state.map((item) => {
        // Update the name of each element to "Izuka"
        return { ...item, name: names[randomName], age: age[randomAge] };
      });
      setState(changeData);
    }
  };

  const checkForChanges = () => {
    if (data.length !== state.length) {
      console.log("Number of elements has changed");
      return true;
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].name !== state[i].name || data[i].age !== state[i].age) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <ListComponent dataForList={state} />
      <ButtonComponent onClickHandle={addingNewDataToList} name={"Add"} />
      <ButtonComponent
        onClickHandle={deleteOneRecordFromList}
        name={"Delete"}
      />
      <ButtonComponent onClickHandle={changeAllInfoOfElement} name={"Change"} />
      <NotificationComponent dataListForCheck={checkForChanges} />
    </>
  );
}
