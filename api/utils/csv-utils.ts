const delimiter: string = ";";

export const createRowEachLineBreak = (str: string): string[] =>
  str
    .slice(str.indexOf("\n"))
    .split("\r")
    .map((line: string) => line.slice(2, line.length));

export const separateHeaders = (strFile: string): string[] =>
  strFile.slice(0, strFile.indexOf("\r")).split(delimiter);

export const mapHeaders = (headers: string[]): string[] =>
  headers.map((element: string) => {
    element = String(element);
    return element;
  });

export const formatRows = (rows: string[], headers: string[]): Object[] => {
  return rows.map(function (row) {
    const values = row.split(delimiter);

    const el = headers.reduce(function (object: any, header, index) {
      object[header] = values[index] || "";

      return object;
    }, {});

    return el;
  });
};

export const csvUtils = {
  formatRows: formatRows,
  mapHeaders: mapHeaders,
  separateHeaders: separateHeaders,
  createRowEachLineBreak: createRowEachLineBreak,
};
