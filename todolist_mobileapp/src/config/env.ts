import { Platform } from 'react-native';

const ENV = {
  dev: {
    API_URL: 'http://192.168.100.72:3000/todos',
  },
  prod: {
    API_URL: 'http://192.168.100.72:3000/todos', // Change this to your production URL
  },
};

const getEnvVars = () => {
  // Add logic here to determine if you're in production or development
  if (__DEV__) {
    return ENV.dev;
  }
  return ENV.prod;
};

export default getEnvVars(); 