const arraysCommunElems = (arr1, arr2) => arr2.filter((obj) => arr1.indexOf(obj) != -1);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [4, 5, 6];

console.log(arraysCommunElems(arr2, arr1));
