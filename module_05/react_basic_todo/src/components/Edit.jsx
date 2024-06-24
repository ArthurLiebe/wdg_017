import { useState } from "react";

function Edit({ id, changeTitle, setIsEditing }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    changeTitle(id, input);
    setIsEditing(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="input"
        id="input"
        value={input}
      />
      <button>Change Title</button>
    </form>
  );
}

export default Edit;
