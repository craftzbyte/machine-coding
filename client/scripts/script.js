let tasks = [
  {
    id: 1,
    type: "todo",
    author: "xyz",
  },
  { id: 2, type: "inprogress", author: "abc" },
  { id: 3, type: "completed", author: "abc" },
];

const obj1 = {
  name: "Alice",
  age: 30,
  address: {
    city: "Delhi",
    zip: "110001",
    meta: {
      verified: true,
      source: "manual",
    },
  },
  hobbies: ["reading", "gaming"],
  status: "active",
};

const obj2 = {
  name: "Alice",
  age: 31,
  address: {
    city: "Mumbai",
    zip: "110001",
    meta: {
      verified: false,
      source: "manual",
      note: "updated via API",
    },
  },
  hobbies: ["reading", "gaming", "cooking"],
  role: "admin",
};

const deepDiff = (a, b) => {
  let result = {};
  for (let i in b) {
    if (!(i in a)) {
      result[i] = { old: undefined, new: b[i] };
    } else if (typeof b[i] === "object" && b[i] !== null && !Array.isArray(b[i])) {
      result[i] = deepDiff(a[i], b[i]);
    } else if (
      b[i] !== a[i] ||
      (Array.isArray(b[i]) && JSON.stringify(b[i]) !== JSON.stringify(a[i]))
    ) {
      result[i] = { old: a[i], new: b[i] };
    }
  }
  for (let i in a) {
    if (!(i in b)) {
      result[i] = { old: a[i], new: undefined };
    }
  }
  return result;
};

const getDiff = (a, b) => {
  let result = {};
  for (let i in b) {
    console.log(i);
    if (!(i in a)) {
      result[i] = { old: undefined, new: b[i] };
    } else if (a[i] != b[i]) {
      result[i] = { old: a[i], new: b[i] };
    }
  }
  return result;
};

let a = {
  b: "c",
  d: "e",
};
let z = {
  b: "c",
  d: "f",
  g: "h",
};
console.log(deepDiff(obj1, obj2));

// console.log(deepDiff(obj1, obj2));
