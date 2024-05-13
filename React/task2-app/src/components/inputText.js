const { useState } = require("react");

const InputText = () => {
  const [Text, setText] = useState();

  const addText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder='Enter text' onChange={addText} />
      <h3>{Text}</h3>
    </div>
  );
};

export default InputText;
