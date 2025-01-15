import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "./data";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <section id="examples">
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handleClick("components")}
          >
            Component
          </TabButton>

          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleClick("jsx")}
          >
            jsx
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handleClick("props")}
          >
            props
          </TabButton>
        </menu>
      </section>

      <section>
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <p>{EXAMPLES[selectedTopic].description}</p>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
