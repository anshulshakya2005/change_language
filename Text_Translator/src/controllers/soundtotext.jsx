


 
  

export const startListening = (setValue, setIsListening) => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  setIsListening(true);

  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;

     
    setValue("text", transcript);
  };

  recognition.onend = () => {
    setIsListening(false);
  };

  recognition.onerror = () => {
    setIsListening(false);
  };
};
