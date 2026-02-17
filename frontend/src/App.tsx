import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";
import { useState } from "react";

interface Joke {
  id?: string;
  setup: string;
  punchline: string;
}

export function App() {
  const [joke, setJoke] = useState<Joke | null>(null);

  async function fetchJoke() {
    const response = await fetch("http://localhost:3000/joke");
    const result = await response.json();
    console.log("Joke received:", result);
    setJoke(result);
  }

  return (
    <>
      <button className="cursor-auto" onClick={() => fetchJoke()}>
        Get a Joke
      </button>
      {joke && (
        <div>
          <p>
            <strong>{joke.setup}</strong>
          </p>
          <p>{joke.punchline}</p>
        </div>
      )}
    </>
  );
}

export default App;
