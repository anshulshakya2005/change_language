export const getlanguages = async (setlang) => {
    const url = import.meta.env.VITE_API_URL;
    console.log("get language",import.meta.env.VITE_API_URL);
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setlang(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };