const API_KEY_STORAGE_KEY = 'gemini_api_key';

export const saveApiKey = (apiKey: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
  }
};

export const getApiKey = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(API_KEY_STORAGE_KEY);
  }
  return null;
};

export const removeApiKey = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
  }
};

export const hasApiKey = (): boolean => {
  return getApiKey() !== null;
};
