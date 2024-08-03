const logSchemaAndPrompt = (dynamicSchema, dynamicPrompt) => {
    console.log('----------------------DYNAMIC SCHEMA----------------------');
    console.log(dynamicSchema);
    console.log('----------------------DYNAMIC SCHEMA----------------------');
    console.log('----------------------DYNAMIC PROMPT----------------------');
    console.log(dynamicPrompt);
    console.log('----------------------DYNAMIC PROMPT----------------------');
  };
  
  const logResponseText = (responseText) => {
    console.log(responseText);
  };
  
  const logPerformance = (startPromptTime, startRequestTime, endRequestTime, endParseTime) => {
    console.log(`Time taken for API request: ${endRequestTime - startRequestTime} ms`);
    console.log(`Time taken for parsing response: ${endParseTime - endRequestTime} ms`);
    console.log(`Total time taken: ${endParseTime - startPromptTime} ms`);
  };
  
  export { logSchemaAndPrompt, logResponseText, logPerformance };
  