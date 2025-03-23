import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const EditorField = () => {
  const [code, setCode] = useState("");

  const runCode = async () => {
    const res = await axios.post("http://localhost:6000/api/execute", {
      code,
    });
    alert(res.data.output);
  };
  return (
    <div>
      <Editor
        height="80vh"
        defaultLanguage="javascript"
        value={code}
        onChange={setCode}
        theme="vs-dark"
        options={{
          fontSize: 16,
          lineNumbers: "on",
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: "on",
          cursorBlinking: "smooth",
        }}
      />
      <button onClick={runCode}>Run</button>
    </div>
  );
};

export default EditorField;
