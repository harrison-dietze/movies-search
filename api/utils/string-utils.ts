const normalizeLower = (str: string): string => {
  return String(str || "")
    .normalize("NFD")
    .toLocaleLowerCase();
};

export const stringUtils = {
  normalizeLower: normalizeLower,
};
