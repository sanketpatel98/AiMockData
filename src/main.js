import generateData from "./utils/dataGenerator.js";

const aimockdata = async (number, parameters, topic) => {
  return await generateData(number, parameters, topic);
};

export default aimockdata;
