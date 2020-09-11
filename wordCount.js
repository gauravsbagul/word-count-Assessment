const para = `Here at Word tips, we want to put you in the world of HEX, and transport you to the world of JAM, WAX, and ZEK! Confused? `;
const paraOne = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;
const paraTwo = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`;

// Rermove puncuations and spaces and convert to array
var paraArray = para.replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
// decleare the empty arrays
var five = (four = three = two = one = []);

// To find check the element alredy exixts or not can be don by findIndex also
const findIndexByKeyValue = (_array, key, value) => {
  for (var i = 0; i < _array.length; i++) {
    if (_array[i]) {
      if (_array[i][key] == value) {
        return i;
      }
    }
  }
  return -1;
};

// To format array remove undefined and print formated data
const formatArray = (title, arr) => {
  filterArray = arr.filter((element) => {
    return element !== undefined;
  });
  console.log(title);
  filterArray.map((item) => console.log(`${item.w} ${item.count}`));
  console.log("\n");
};

// To perform the operation on array
const arrayOp = (paraArray, i, numberArray) => {
  let index = 0;
  index = findIndexByKeyValue(numberArray, "w", paraArray[i]);
  if (index > -1) {
    numberArray[index] = {
      w: paraArray[i],
      count: 1 + numberArray[index].count,
    };
  } else {
    numberArray = [...numberArray, { w: paraArray[i], count: 1 }];
  }
  return numberArray;
};

// iterate the array until the last word
for (i in paraArray) {
  switch (paraArray[i].length) {
    case 5: {
      five = arrayOp(paraArray, i, five);
      break;
    }
    case 4: {
      four = arrayOp(paraArray, i, four);
      break;
    }
    case 3: {
      three = arrayOp(paraArray, i, three);
      break;
    }
    case 2: {
      two = arrayOp(paraArray, i, two);
      break;
    }
    case 1: {
      one = arrayOp(paraArray, i, one);
      break;
    }
  }
}

formatArray("5", five);
formatArray("4", four);
formatArray("3", three);
formatArray("2", two);
formatArray("1", one);

// you can change the paragraph as i have assigned above
// Run the code using: node wordCount.js
