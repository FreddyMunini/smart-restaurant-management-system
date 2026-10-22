import { useState } from "react";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const dataset = {
    "What are today's specials?":
      "Today's special is Chicken Alfredo for $18.99.",

    "What vegetarian meals do you have?":
      "We offer Vegetable Pasta, Margherita Pizza, and Garden Salad.",

    "What do you recommend?":
      "Based on popular orders, we recommend our Chicken Alfredo.",

    "Do you have gluten-free options?":
      "Yes. We offer gluten-free pasta and selected salads.",

    "What is the most popular dessert?":
      "Our Chocolate Lava Cake is our most popular dessert.",

    "What did I order last time?":
      "Your previous order was Chicken Alfredo and Chocolate Lava Cake."
  };

  const askAI = () => {
    setResponse(
      dataset[question] ||
      "Sorry, I don't have an answer for that."
    );
  };

  return (
    <div>
      <h2>Restaurant AI Assistant</h2>

      <select
        onChange={(e) => setQuestion(e.target.value)}
      >
        <option>Select a Question</option>

        {Object.keys(dataset).map((q) => (
          <option key={q}>
            {q}
          </option>
        ))}
      </select>

      <button onClick={askAI}>
        Ask AI
      </button>

      <p>{response}</p>
    </div>
  );
}

export default Chatbot;