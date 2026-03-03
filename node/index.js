const ar = [1111, 200, 12, 21, 122, 312, 20];

const bubbleSort = (array = []) => {
  if (array.length < 2) return array;
  for (let i = 0; i < array.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) return array;
  }
  return array;
};

const selectionSort = (array) => {
  if (array.length < 2) return array;

  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};

const insertionSort = (array) => {
  if (array.length <= 1) return array;
  let s = 0;
  let curr = 1;
  while (curr <= array.length - 1) {
    if (array[curr] >= array[s]) {
      s++;
      curr++;
    } else {
      for (let i = s; i >= 0; i--) {
        //[1, 2, 4, 5, 3, 8, 6, 7]; i=3 , curr=4, | i=2,
        if (array[i + 1] < array[i]) {
          let temp = array[i + 1];
          array[i + 1] = array[i];
          array[i] = temp;
        }
      }
      s++;
      curr++;
    }
  }
  return array;
};
[1, 2, 3, 5, 0, 6];
const insertionSort2 = (ar) => {
  if (ar.length <= 1) return ar;
  let curr = ar[1];
  let prev = 0;
  for (let i = 1; i < ar.length; i++) {
    curr = ar[i];
    prev = i - 1;
    while (curr < ar[prev] && prev >= 0) {
      ar[prev + 1] = ar[prev];
      ar[prev] = curr;
      prev--;
    }
  }
  return ar;
};

const mergeSort = (array) => {
  if (array.length == 1) return array;
  let middleIndex = Math.ceil(array.length / 2);
  let left = array.slice(0, middleIndex);
  let right = array.slice(middleIndex, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

let merge = (a1, a2) => {
  let i = 0,
    j = 0,
    n = [];
  while (i < a1.length && j < a2.length) {
    if (a1[i] <= a2[j]) n.push(a1[i++]);
    else n.push(a2[j++]);
  }
  while (i < a1.length) n.push(a1[i++]);
  while (j < a2.length) n.push(a2[j++]);
  return n;
};

var numJewelsInStones = function (jewels, stones) {
  let ja = jewels.split("");
  let sa = stones.split("");
  let jc = 0;
  for (let i in ja) {
    for (let j in sa) {
      if (i == j) jc++;
    }
  }
  return jc;
};
var balancedStringSplit = function (s) {
  let l = "L";
  let r = "R";
  let rc = 0;
  let lc = 0;
  let b = 0;
  for (let i in s) {
    if (s[i] == r) {
      rc++;
    }
    if (rc == lc && i != 0) {
      // console.log(rc, lc, i);
      b++;
      rc = 0;
      lc = 0;
    }
    if (s[i] == l) {
      lc++;
    }
    if (rc == lc && i != 0) {
      b++;
      rc = 0;
      lc = 0;
    }
  }
  return b;
};
// console.log(balancedStringSplit("LLLLRRRR"));

// var reverseStr = function (s, k) {
//   let revStr = "";
//   if (s.length < k) {
//     for (let i = s.length - 1; i >= 0; i--) {
//       revStr = revStr + s[i];
//     }
//   }
//   let strArray = [];
//   let st = "";
//   let _firstK = (strr, l) => {
//     let q = "";
//     if (strr.length < l) {
//       for (let i = strr.length - 1; i >= 0; i--) {
//         q = q + strr[i];
//       }
//       return q;
//     }
//     // console.log(l);
//     for (let i = l - 1; i >= 0; i--) {
//       q = q + strr[i];
//     }
//     // console.log(q);
//     for (let i = l; i < strr.length; i++) {
//       q = q + strr[i];
//     }
//     return q;
//   };
//   for (let i in s) {
//     st = st + s[i];

//     if ((+i + 1) % (2 * k) == 0 || i == s.length - 1) {
//       strArray.push(st);
//       st = "";
//     }
//   }
//   let newA = strArray.map((c) => _firstK(c, k));
//   let result = "";
//   newA.forEach((c) => {
//     result = result + c;
//   });
//   return result;
// };

var reverseStr = function (s, k) {
  const stringAr = s.split("");
  for (let x = 0; x < stringAr.length; x = x + 2 * k) {
    // console.log(x);
    let mid = Math.floor(k / 2);
    console.log(mid);
    for (let i = x; i <= mid; i++) {
      let temp = stringAr[i];
      stringAr[i] = stringAr[k - i - 1];
      stringAr[k - i - 1] = temp;
    }
  }
  return stringAr.join("");
};

var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      i++;
      continue;
    }
    if (!s[j].match(/[a-z0-9]/i)) {
      j--;
      continue;
    }
    if (!(s[i].toLowerCase() === s[j].toLowerCase())) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};

const orders = [
  { customer: "Alice", product: "Laptop", amount: 1200 },
  { customer: "Bob", product: "Phone", amount: 800 },
  { customer: "Alice", product: "Phone", amount: 800 },
  { customer: "Alice", product: "Laptop", amount: 1200 },
  { customer: "Bob", product: "Tablet", amount: 500 },
];

function summarize(orders) {
  const data = orders.reduce((result, info) => {
    if (!(info.customer in result)) {
      result[info.customer] = {
        totalAmount: info.amount,
        orderQuantity: 1,
        products: new Set([info.product]),
      };
    } else {
      result[info.customer].totalAmount += info.amount;
      result[info.customer].orderQuantity += 1;
      result[info.customer].products.add(info.product);
    }
    return result;
  }, {});
  for (let key in data) {
    data[key].products = [...data[key].products];
  }

  return data;
}
console.log(summarize(orders));

//prevent Objject mutations;

const freezeAll = (obj) => {
  if (!(typeof obj === "object" && obj !== null)) return;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      freezeAll(obj[key]);
    }
  }

  return Object.freeze(obj);
};

// flattening a deep nested Object

const company = {
  name: "TechCorp",
  ceo: {
    name: "John",
    age: 45,
    address: {
      city: "New York",
      street: {
        name: "5th Avenue",
        number: 101,
        apartment: {
          floor: 12,
          unit: "B",
          rooms: 3,
        },
      },
    },
  },
};

const deepFlat = (obj, prefix = "", result = {}) => {
  const isJSOb = (data) => typeof data === "object" && !Array.isArray(data) && data !== null;
  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (isJSOb(obj[key])) {
      deepFlat(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
};
console.log(deepFlat(company, "", {}));

let unflat = (obj) => {
  let result = {};
  for (let k in obj) {
    let current = result;
    let keys = k.split(".");
    for (let i in keys) {
      console.log(i, keys.length - 1);
      if (+i === keys.length - 1) {
        console.log(i, keys.length - 1, obj[k]);

        current[keys[i]] = obj[k];
      } else {
        current[keys[i]] = current[keys[i]] || {};
        current = current[keys[i]];
      }
    }
  }

  return result;
};

console.log(unflat(deepFlat(company, "", {})));
