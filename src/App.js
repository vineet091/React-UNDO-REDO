import "./styles.css";
import React from "react";
import UndoRedo from "./UndoRedo";

export default function App() {
  const [inputValue, setValue] = React.useState("");
  const [dataList, setDataList] = React.useState([""]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleOnBlur = () => {
    var newDataList = dataList.splice(0, currentIndex + 1);
    newDataList.push(inputValue);
    setDataList(newDataList);
    setCurrentIndex(newDataList.length - 1);
  };

  const handleOnChange = (evt) => {
    var { value } = evt.target;
    setValue(value);
  };

  const setDataValue = (index) => {
    setCurrentIndex(index);
    setValue(dataList[index]);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(evt) => handleOnChange(evt)}
        onBlur={(evt) => handleOnBlur(evt)}
      />
      <UndoRedo
        dataList={dataList}
        currentIndex={currentIndex}
        setDataValue={setDataValue}
      />
      <p>{`Current value = ${dataList[currentIndex]}`}</p>
    </div>
  );
}
