const delimiter: string = ";";
const numberOfColumns: number = 15;

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
    const values = escapeDelimiter(row.split(delimiter));

    const el = headers.reduce(function (object: any, header, index) {
      object[header] = values[index] || "";

      return object;
    }, {});

    return el;
  });
};

export const escapeDelimiter = (values: any[]): any[] => {
  if (values.length <= numberOfColumns) return values;

  for (let index = 0; index < values.length; index++) {
    const element: any = values[index];

    if (typeof element == "string" && element.startsWith('"')) {
      while (index < values.length && !values[index].endsWith('"')) {
        values[index] = values[index] + values[index + 1];

        values.splice(index + 1, 1);
        console.log(values[index]);
        if (!values[index].endsWith('"')) break;
      }
    }
  }

  // console.log(values);

  return values;
};

export const csvUtils = {
  formatRows: formatRows,
  mapHeaders: mapHeaders,
  separateHeaders: separateHeaders,
  createRowEachLineBreak: createRowEachLineBreak,
};
