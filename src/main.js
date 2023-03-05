import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function Component() {
  const [v, setV] = useState("");

  useEffect(() => {
    import("./foo.js").then(({ default: foo }) => setV(foo));
  }, []);

  if (v === "") {
    return <div>Loading...</div>;
  }

  return <div>{v}</div>;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Component />);
