import { useState } from "preact/hooks";

type Props = {
  messages: string[];
};

export default function Greeting({ messages }: Props) {
  const randomMessage = () => {
    let newGreeting;
    do {
      newGreeting = messages[Math.floor(Math.random() * messages.length)];
    } while (newGreeting === greeting);
    return newGreeting;
  };
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        type="button"
        onClick={() => setGreeting(randomMessage())}
        data-cy="new-greeting"
      >
        New Greeting
      </button>
    </div>
  );
}
