const defaultEnv = {
  baseURL: 'http://localhost:3001'
};
const devEnv = {
  baseURL: 'http://localhost:3001'
};
const prodEnv = {
  baseURL: 'http://localhost:3001'
};

const environment =
  process.env.NODE_ENV === 'production'
    ? { ...defaultEnv, ...prodEnv }
    : { ...defaultEnv, ...devEnv };

export default environment;
