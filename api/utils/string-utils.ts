const normalizeLower = (str: string): string => {
  return str.normalize("NFD").toLocaleLowerCase();
};

export const stringUtils = {
  normalizeLower: normalizeLower,
};
