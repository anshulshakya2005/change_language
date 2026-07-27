import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getlanguages } from "../controllers/Getlanguages";
import { langconverter } from "../controllers/langconverter";
import { startListening } from "../controllers/soundtotext";
import { sendMessage } from "../controllers/sendmessage";
import { FaMicrophone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { BsTranslate } from "react-icons/bs";
import { SiListenhub } from "react-icons/si";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Tooltip } from "react-tooltip";
function TextChange() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const text = watch("text", "");
  const [result, setresult] = useState("");
  const [lang, setlang] = useState([]);
  // const [history,sethistory] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! Give me a text and I will translate it for you.",
    },
  ]);

  const [input, setInput] = useState("");

  const onSubmit = async (data) => {
    await sendMessage(setMessages, data.text, data.targetlanguage, setresult);
    setValue("text", "");
  };
  const onError = (errors) => {
    if (errors.text) {
      toast.error("Text is required!");
    }

    if (errors.targetlanguage) {
      toast.error("Please select a language!");
    }
  };
  useEffect(() => {
    getlanguages(setlang);
  }, []);

  return (
    <div
      className={`h-screen flex flex-col transition-all duration-300 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100"
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 py-4 shadow-xl backdrop-blur-lg ${
          darkMode
            ? "bg-slate-900 border-b border-slate-800"
            : "bg-gradient-to-r from-indigo-600 to-cyan-500"
        }`}
      >
        <h1
          className={`flex items-center gap-2 sm:gap-3 text-xl sm:text-3xl font-bold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <BsTranslate
            className={`text-4xl ${darkMode ? "text-cyan-400" : "text-black"}`}
          />
          <span>Text Translator</span>
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 flex items-center justify-center  hover:scale-105
active:scale-95"
        >
          {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
        </button>
      </div>

      {/* Messages */}
      <div
        className={`flex-1 overflow-y-auto p-6 space-y-5 ${
          darkMode ? "bg-slate-950" : "bg-transparent"
        }`}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] px-5 py-3 rounded-3xl shadow-lg transition-all duration-300 ease-out  ${
                msg.sender === "user"
                  ? "bg-indigo-600 text-white rounded-br-md"
                  : darkMode
                    ? "bg-slate-800 text-slate-100 border border-slate-700 rounded-bl-md"
                    : "bg-white text-slate-700 border border-slate-200 rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

   {/* Bottom Panel */}
<form
  onSubmit={handleSubmit(onSubmit, onError)}
  className={`p-3 sm:p-4 md:p-5 backdrop-blur-xl ${
    darkMode
      ? "bg-slate-950/80 border-t border-slate-800"
      : "bg-white/70 border-t border-slate-200"
  }`}
>
  <div
    className={`rounded-3xl shadow-2xl transition-all duration-300 ${
      darkMode
        ? "bg-slate-900 border border-slate-700"
        : "bg-white border border-slate-200"
    }`}
  >
    {/* Textarea */}
    <textarea
      maxLength={500}
      {...register("text", { required: true })}
      placeholder="Type your text here..."
      className={`w-full p-5 resize-none rounded-t-3xl text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        text.length > 0 ? "h-36" : "h-20"
      } ${
        darkMode
          ? "bg-slate-900 text-white placeholder-slate-500"
          : "bg-white text-slate-700 placeholder-slate-400"
      }`}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit(onSubmit, onError)();
        }
      }}
    />

    {/* Controls */}
    <div className="px-4 pb-4 pt-2 space-y-4">

      {/* Progress */}
      <div className="flex items-center justify-between">
        <div
          className={`w-28 h-2 rounded-full overflow-hidden ${
            darkMode ? "bg-slate-700" : "bg-slate-200"
          }`}
        >
          <div
            className={`h-full transition-all duration-300 ${
              text.length > 450
                ? "bg-red-500"
                : text.length > 350
                ? "bg-yellow-500"
                : "bg-indigo-500"
            }`}
            style={{
              width: `${(text.length / 500) * 100}%`,
            }}
          />
        </div>

        <span
          className={`text-sm ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          {text.length}/500
        </span>
      </div>

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row gap-3">

        {/* Language */}
        <select
          {...register("targetlanguage", { required: true })}
          className={`flex-1 px-4 py-3 rounded-xl border outline-none transition ${
            darkMode
              ? "bg-slate-800 border-slate-700 text-white"
              : "bg-white border-slate-300 text-gray-800"
          }`}
        >
          <option value="">Language</option>

          {lang.map((l) => (
            <option key={l.code} value={l.code}>
              {l.language}
            </option>
          ))}
        </select>

        {/* Mic */}
        <button
          type="button"
          onClick={() =>
            startListening(setValue, setIsListening)
          }
          className={`sm:w-12 w-full h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${
            isListening
              ? "bg-red-500 animate-pulse"
              : "bg-emerald-500 hover:bg-emerald-600"
          }`}
        >
          {isListening ? (
            <SiListenhub size={22} />
          ) : (
            <FaMicrophone size={20} />
          )}
        </button>

        <Tooltip id="mic-tooltip" />

        {/* Send */}
        <button
          type="submit"
          className="sm:w-auto w-full px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:scale-105 active:scale-95 text-white font-semibold shadow-lg transition-all duration-300"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</form>
    </div>
  );
}
export default TextChange;
