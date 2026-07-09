export const langconverter = async (text, targetlanguage ) => {
        const url = import.meta.env.VITE_LANGUAGE_API_URL;
        console.log("language convertor:",import.meta.env.VITE_LANGUAGE_API_URL);
        const options = {
          method: "POST",
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
            "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "auto",
            to:  targetlanguage,
            text:  text,
          }),
        };
    
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          return result;
           
          
        } catch (error) {
          console.error(error);
        }
}