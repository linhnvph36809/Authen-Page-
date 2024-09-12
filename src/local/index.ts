export const handlerSetLocal = (name: string, value: any) => {
  localStorage.setItem(name, value);
};

export const handlerGetLocal = (name: string) => {
  return localStorage.getItem(name);
};

export const handlerDeleteLocal = (name: string) => {
  localStorage.removeItem(name);
};
