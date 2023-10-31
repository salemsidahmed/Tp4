const flatDeep = (arr) => {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val),
    []
  );
};

const arrDim = [1, 2, [3, 4, [6, 7], 8, [9, 10]]];
console.log(flatDeep(arrDim));
