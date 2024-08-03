const handleError = (error) => {
    console.error("Error:", error.message);
    console.error(error.stack);
  };
  
  export default handleError;
  