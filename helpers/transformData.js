// convert array of string to array of {value, label} object for select input
// convert string to {value, label}
export const makeOptions = (arr, valueCallback) => {
  // for array
  if (Array.isArray(arr)) {
    return arr.map((item) => ({
      value: valueCallback ? valueCallback(item) : item,
      label: item,
    }));
  }

  // for single
  if (typeof arr === "string") {
    return {
      value: arr,
      label: arr,
    };
  }

  return [];
};

// convert array of {id, title} to array of {value, label} object for select input
export const makeOptionsId = (arr, valueAs = "id", labelAs = "title") => {
  return arr.map(item => ({
    value: item[valueAs],
    label: item[labelAs],
  }))
}


export const limitLength = (str, length) => {
  if (!str) return "";
  if (str.length < length) {
    return str;
  }
  return `${str.substr(0, length - 3)}...`;
};


// remove tabs
export const cleanResumeText = (str) => {
  return str.toString().replace(/\t/g, " ");
}