import { langconverter } from "../controllers/langconverter";

export const sendMessage = async (
  setMessages,
  text,
  targetlanguage
) => {
  if (!text.trim()) return;
 
  setMessages((prev) => [
    ...prev,
    {
      id: Date.now(),
      sender: "user",
      text,
    },
  ]);
 
  const result = await langconverter(text, targetlanguage);
 
  setMessages((prev) => [
    ...prev,
    {
      id: Date.now() + 1,
      sender: "bot",
      text: result.trans,
    },
  ]);
};