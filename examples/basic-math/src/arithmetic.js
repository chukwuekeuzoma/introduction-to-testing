export const add = (a, b) => {
  if (typeof a === 'string') {
    a = Number(a);
  }
  if (typeof b === 'string') {
    b = Number(b);
  }

  if (isNaN(a) || isNaN(b)){
    throw new Error("Invalid input: both arguments must be numbers or numeric strings.");
  }
  
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
