const isString = (value: any) => {
  return typeof value === "string" || value instanceof String;
};

const useValidation = (searchSting: string) => {
  if (!searchSting || !isString(searchSting))
    throw new Error("Search options must be a string");
};

export default useValidation;
