import { useForm } from "react-hook-form";
import { randomstringgenerator } from "../controllers/randomstringgenerator";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaRandom } from "react-icons/fa";
function Randomstring() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [darkMode, setDarkMode] = useState(false);
 
  const [heading, setHeading] = useState("");
  const [str, setstring] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("randomString");

    if (saved) {
      setstring(saved);
      setHeading("Last Generation");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("randomString", str);
  }, [str]);
return (
<div
  className={`min-h-screen transition-all duration-300 ${
    darkMode
      ? "bg-slate-950"
      : "bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100"
  }`}
>

  {/* Header */}

 <div
  className={`flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 py-4 shadow-xl ${
    darkMode
      ? "bg-slate-900 border-b border-slate-800"
      : "bg-gradient-to-r from-indigo-600 to-cyan-500"
  }`}
>
  <h1
    className={`flex items-center gap-3 text-2xl sm:text-3xl font-bold text-center ${
      darkMode ? "text-white" : "text-black"
    }`}
  >
    <FaRandom
      className={`text-3xl sm:text-4xl ${
        darkMode ? "text-cyan-400" : "text-black"
      }`}
    />
    <span>Random String Generator</span>
  </h1>

  <button
    type="button"
    onClick={() => setDarkMode(!darkMode)}
    className="h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
  >
    {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
  </button>
</div>

  {/* Body */}

  <div className="flex justify-center items-center py-4 px-5">

    <form
      onSubmit={handleSubmit((data)=>{
        randomstringgenerator(data,setstring);
        setHeading("Result");
      })}
className={`w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl shadow-2xl p-6 sm:p-8 transition-all duration-300 ${
  darkMode
    ? "bg-slate-900 border border-slate-700"
    : "bg-white"
}`}
    >

      <label
       className={`font-semibold text-base sm:text-lg ${
  darkMode ? "text-white" : "text-slate-700"
}`}
      >
        Desired Length
      </label>

      <input
        type="number"
        placeholder="Enter desired length"
        {...register("length",{required:true})}
className={`mt-3 w-full rounded-xl p-3 sm:p-4 text-sm sm:text-base outline-none border transition ${
  darkMode
    ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500"
    : "bg-slate-50 border-slate-300 placeholder-slate-400"
}`}
      />

      {errors.length && (
        <p className="text-red-500 mt-2">
          Please enter a valid length.
        </p>
      )}

<button
  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
>
  Generate
</button>

{str && (
  <div
    className={`mt-8 rounded-2xl p-5 transition-all duration-300 break-all ${
      darkMode
        ? "bg-slate-800 border border-slate-700"
        : "bg-slate-100 border border-slate-200"
    }`}
  >
    <h2
      className={`text-lg sm:text-xl font-bold ${
        darkMode
          ? "text-cyan-400"
          : "text-indigo-600"
      }`}
    >
      {heading}
    </h2>

    <p
      className={`mt-3 text-base sm:text-lg tracking-wider break-all ${
        darkMode
          ? "text-white"
          : "text-slate-700"
      }`}
    >
      {str}
    </p>
  </div>
)}

    </form>

  </div>

</div>
);
}

export default Randomstring;
