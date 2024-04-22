import { useState } from "react";
import Markdown from "react-markdown";

const initialState = `
  # Heading 1
  ## Subheading 2
  [Link to Google](https://www.google.com)
  \`Inline Code\`
  
  \`\`\`javascript
  // Code Block
  function example() {
    console.log("Hello, World!");
  }
  \`\`\`
  
  - List Item 1
  - List Item 2
  
  > Blockquote: This is a blockquote.
  
  ![Drag Racing](Dragster.jpg)
  
  **Bolded Text**
`;

export default function App() {
  const [markdown, setMarkdown] = useState(initialState);

  return (
    <main className="w-11/12 max-w-6xl mx-auto">
      <section className="p-16 grid gap-y-16 min-h-screen lg:grid-cols-2 lg:gap-x-16">
        <textarea
          id="editor"
          className="border-transparent rounded shadow-md py-4 px-8"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <article id="preview" className="py-4 px-8">
          <Markdown>{markdown.replace(/\n/g, "  \n")}</Markdown>
        </article>
      </section>
    </main>
  );
}
