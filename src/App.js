import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import OpenAI from 'openai';

function TextBoxWithButton() {
  const [liked, setLiked] = useState('');
  const [disliked, setDisliked] = useState('');
  const [sprompt, setSPrompt] = useState('');
  const [fullprompt, setFullPrompt] = useState('');
  const [quantity, setQuantity] = useState('');
  const [response, setResponse] = useState('');

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
  });

  const handleTextChangeLiked = (event) => {
    setLiked(event.target.value);
  };
  const handleTextChangeDisliked = (event) => {
    setDisliked(event.target.value);
  };
  const handleTextChangePrompt = (event) => {
    setSPrompt(event.target.value);
  };
  const handleSliderChange = (event) => {
    setQuantity(event.target.value)
  }
  const handlePrintButtonClick = () => {
    console.log("\nLiked: " + liked);
    console.log("Disliked: " + disliked);
    console.log("Prompt: " + sprompt);
    setFullPrompt(
      "Given this description of what type of music I like:\n"
      + liked + 
      "\nThis description of what type of music I dislike:\n"
      + disliked + 
      "\nAnd this prompt for what music I am looking for:\n"
      + prompt +
      "\nGive me a list of " + quantity + " songs I should listen to."
      
    );
    console.log("Full: " + fullprompt);
    try {
      /*setResponse(openai.chat.completions.create({
        messages: [{ 
          role: "system", 
          content: fullprompt
        }],
        model: "gpt-3.5-turbo",
      }));*/
    } catch {
      setResponse("I have no openai tokens... so here's the prompt I'd send to openai if I had some: \n" + fullprompt);
    }

  };

  return (
    <div>
      <textarea
        rows={10}
        cols={50}
        value={liked}
        onChange={handleTextChangeLiked}
        placeholder="Describe what songs, what type of songs, and what artists you like..."
      />
      <textarea
        rows={10}
        cols={50}
        value={disliked}
        onChange={handleTextChangeDisliked}
        placeholder="Describe what songs, what type of songs, and what artists you dislike..."
      />
      <textarea
        rows={10}
        cols={50}
        value={sprompt}
        onChange={handleTextChangePrompt}
        placeholder="Type a general prompt here regarding what type of music you want..."
      />
      <br />
      <input
        type="range"
        min={0}
        max={20}
        value={quantity}
        onChange={handleSliderChange}
      /> {quantity}
      <br />
      <button onClick={handlePrintButtonClick}>Compile Prompt</button>
      <p>
        {response}
      </p>
    </div>
  );
}


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <body className="App-body">
        <TextBoxWithButton></TextBoxWithButton>
      </body>
    </div>
  );
}


