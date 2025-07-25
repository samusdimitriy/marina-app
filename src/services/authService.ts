import { User } from '../types/auth';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const loginService = async (email: string, password: string): Promise<User> => {
  await delay(1000);
  return 
    id: Date.now().toString(),
    email,
    name: 'John Doe',
  };
};

export const registerService = async (name: string, email: string, password: string): Promise<User> => {
  await delay(1500);
  return {
    id: Date.now().toString(),
    email,
    name,
  };
};

export const logoutService = async (): Promise<void> => {
  await delay(500);
};
