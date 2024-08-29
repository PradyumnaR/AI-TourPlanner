"use client";
import { generateChatResponse } from "@/utils/open-ai/chat";
import { fetchUserTokensById, subtractTokens } from "@/utils/open-ai/tokens";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { useAuth } from "@clerk/nextjs";

function Chat() {
  const { userId } = useAuth();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (query) => {
      const currentTokens = await fetchUserTokensById(userId);

      if (currentTokens < 100) {
        toast.error("Token balance too low...");
        return;
      }

      const response = await generateChatResponse([...messages, query]);

      if (!response) {
        toast.error("Something went wrong...");
        return;
      }

      setMessages((prev) => [...prev, response.message]);
      const newTokens = await subtractTokens(userId, response.tokens);
      toast.success(`${newTokens} tokens remaining...`);
    },
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const query = {
      role: "user",
      content: text,
    };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  });

  return (
    <div className='h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
      <div className='min-h-[calc(100%-80px)] overflow-auto p-2'>
        {messages.map(({ role, content }, index) => {
          const avatar =
            role === "user" ? (
              <FaUser className='flex items-center w-5 h-5' />
            ) : (
              <BsRobot className='flex items-center w-5 h-5' />
            );

          //const bcg = role === "user" ? "bg-base-200" : "bg-base-100";
          return (
            <div
              key={index}
              className={`flex py-6 -mx-8 px-8 text-xl leading-loose`}
            >
              <span className='flex items-center mr-4'>{avatar}</span>
              <p className='max-w-3xl'>{content}</p>
            </div>
          );
        })}
        {isPending ? <span className='loading'></span> : null}
      </div>
      <form onSubmit={handleSubmit} className='max-w-4xl pt-12 h-20'>
        <div className='join w-full'>
          <input
            type='text'
            placeholder='Message GeniusGPT'
            className='input input-bordered join-item w-full'
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className='btn btn-primary join-item'
            type='submit'
            disabled={isPending}
          >
            {isPending ? "Please wait..." : "Ask question"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
