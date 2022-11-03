const UndoRedo = ({ dataList, currentIndex, setDataValue, isMax, isMin }) => {
  const onUndo = () => {
    if (currentIndex > 0) {
      setDataValue(currentIndex - 1);
    }
  };
  const onRedo = () => {
    if (currentIndex < dataList.length - 1) {
      setDataValue(currentIndex + 1);
    }
  };

  return (
    <>
      <button disabled={currentIndex === 0} onClick={() => onUndo()}>
        Undo
      </button>
      <button
        disabled={currentIndex === dataList.length - 1}
        onClick={() => onRedo()}
      >
        Redo
      </button>
    </>
  );
};

export default UndoRedo;
