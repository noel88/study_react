import {createStore} from "redux";


const add = document.getElementById('add');
const minus = document.getElementById('minus');
const num = document.querySelector('span');


const ActionTypes = {
  ADD: "ADD",
  MINUS: "MINUS"
}

//data modifier function
const countModifier = (counter = 0, action) => {
  // if (action.type === "ADD") {
  //   return counter + 1;
  // } else if (action.type === "MINUS") {
  //   return counter - 1;
  // } else {
  //   return counter;
  // }

  switch (action.type) {
    case ActionTypes.ADD:
      return counter + 1;
    case ActionTypes.MINUS:
      return counter - 1;
    default:
      return counter;
  }
}
num.innerText = 0;
//data를 저장하는 곳
const countStore = createStore(countModifier);
//action을 전송함.
// countStore.dispatch({type: "ADD"})

add.addEventListener('click', () => {
  countStore.dispatch({type: ActionTypes.ADD})
});
minus.addEventListener('click', () => {
  countStore.dispatch({type: ActionTypes.MINUS})
});

const onChange = () => {
  num.innerText = countStore.getState()
}

countStore.subscribe(onChange)

// let count = 0;
//

// const updateText = () => {
//   num.innerText = count;
// }
//
// const handleAdd = () => {
//   count += 1;
//   updateText();
// }
//
// const handleMinus = () => {
//   count -= 1;
//   updateText();
// }
//
// add.addEventListener('click', handleAdd);
// minus.addEventListener('click', handleMinus);
