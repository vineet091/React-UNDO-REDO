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

  const handleKeyPress = (evt) => {
    var { value } = evt.target;
    if (evt.which === 13 || evt.keyCode === 13) {
      var newDataList = dataList.splice(0, currentIndex + 1);
      newDataList.push(value);
      setDataList(newDataList);
      setCurrentIndex(newDataList.length - 1);
    }
  };

  const setDataValue = (index) => {
    setCurrentIndex(index);
    setValue(dataList[index]);
  };
  return (
    <div className="App">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(evt) => handleOnChange(evt)}
        onBlur={(evt) => handleOnBlur(evt)}
        onKeyPress={(evt) => handleKeyPress(evt)}
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
