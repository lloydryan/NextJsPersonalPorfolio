"use client";

import { FormEvent, useRef, useState } from "react";
import { FaComments, FaPaperPlane, FaXmark } from "react-icons/fa6";

interface ChatMessage {
  id: number;
  role: "assistant" | "user";
  text: string;
}

const starterMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi, I can answer questions about Lloyd's experience, projects, skills, certifications, and contact links.",
  },
];

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const nextId = useRef(2);

  const addMessage = (role: ChatMessage["role"], text: string) => {
    setMessages((current) => [
      ...current,
      { id: nextId.current++, role, text },
    ]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const question = input.trim();
    if (!question || isSending) return;

    setInput("");
    addMessage("user", question);
    setIsSending(true);

    try {
      const response = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = (await response.json()) as { answer?: string };

      addMessage(
        "assistant",
        data.answer ?? "I can only answer questions about Lloyd's portfolio."
      );
    } catch {
      addMessage(
        "assistant",
        "I could not answer right now. Please try again in a moment."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="portfolio-chatbot" aria-label="Portfolio chatbot">
      {isOpen ? (
        <div className="chatbot-panel" role="dialog" aria-label="Ask about Lloyd">
          <div className="chatbot-header">
            <div>
              <strong>Ask Lloyd&apos;s portfolio</strong>
              <span>Grounded answers only</span>
            </div>
            <button
              type="button"
              className="chatbot-icon-button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              <FaXmark aria-hidden="true" />
            </button>
          </div>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((message) => (
              <p
                key={message.id}
                className={`chatbot-message chatbot-message-${message.role}`}
              >
                {message.text}
              </p>
            ))}
            {isSending ? (
              <p className="chatbot-message chatbot-message-assistant">
                Thinking...
              </p>
            ) : null}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="portfolio-chatbot-input">
              Ask about Lloyd Ryan Largo
            </label>
            <input
              id="portfolio-chatbot-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Lloyd..."
              disabled={isSending}
            />
            <button
              type="submit"
              className="chatbot-send-button"
              aria-label="Send message"
              disabled={!input.trim() || isSending}
            >
              <FaPaperPlane aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        className="chatbot-launcher"
        aria-label="Open portfolio chatbot"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <FaComments aria-hidden="true" />
      </button>
    </section>
  );
};

export default PortfolioChatbot;
