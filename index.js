const checkBtn = document.getElementById("check-btn");
const billInput = document.getElementById("amount-of-bill");
const cashInput = document.getElementById("amount-of-cash-given");

// const Note2000 = document.getElementById("no-of-2000-notes");
// const Note500 = document.getElementById("no-of-500-notes");
// const Note200 = document.getElementById("no-of-200-notes");
// const Note100 = document.getElementById("no-of-100-notes");
// const Note50 = document.getElementById("no-of-50-notes");
// const Note20 = document.getElementById("no-of-20-notes");
// const Note10 = document.getElementById("no-of-10-notes");
// const Note5 = document.getElementById("no-of-5-notes");
// const Note1 = document.getElementById("no-of-1-notes");

const notesArr = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

const btnOnClick = () => {
  console.log("btn clicked");
  billInput.value === ""
    ? alert("Please enter some Bill Amount")
    : cashInput.value === ""
    ? alert("Please enter some Cash Amount")
    : +cashInput.value < +billInput.value
    ? alert("Cash Given must be greater than or equal to Bill Amount")
    : trueCondition();
};

function trueCondition() {
  let cash = Number(cashInput.value) - Number(billInput.value);
  console.log(cash);
  for (note of notesArr) {
    document.getElementById(`no-of-${note}-notes`).textContent = Math.trunc(
      cash / note
    );
    cash = cash % note;
  }
}

// function trueCondition() {
//   let remainingCash = Number(cashInput.value) - +billInput.value;
//   console.log(remainingCash);
//   //   console.log(remainingCash / 2000);
//   // For 2000
//   Note2000.textContent = Math.trunc(remainingCash / 2000);
//   // For 500
//   const cashLeftAfter2000 = remainingCash % 2000;
//   for500 = cashLeftAfter2000;
//   Note500.textContent = Math.trunc(for500 / 500);
//   // For 200
//   const cashLeftAfter500 = cashLeftAfter2000 - 500 * +Note500.textContent;
//   for200 = cashLeftAfter500;
//   Note200.textContent = Math.trunc(for200 / 200);
//   //For 100
//   const cashLeftAfter200 = cashLeftAfter500 - 200 * +Note200.textContent;
//   for100 = cashLeftAfter200;
//   Note100.textContent = Math.trunc(for100 / 100);
//   //For 50
//   const cashLeftAfter100 = cashLeftAfter200 - 100 * +Note100.textContent;
//   for50 = cashLeftAfter100;
//   Note50.textContent = Math.trunc(for50 / 50);
//   //For 20
//   const cashLeftAfter50 = cashLeftAfter100 - 50 * +Note50.textContent;
//   for20 = cashLeftAfter50;
//   Note20.textContent = Math.trunc(for20 / 20);
//   //For 10
//   const cashLeftAfter20 = cashLeftAfter50 - 20 * +Note20.textContent;
//   for10 = cashLeftAfter20;
//   Note10.textContent = Math.trunc(for10 / 10);
//   //For 5
//   const cashLeftAfter10 = cashLeftAfter20 - 10 * +Note10.textContent;
//   for5 = cashLeftAfter10;
//   Note5.textContent = Math.trunc(for5 / 5);
//   //For 1
//   const cashLeftAfter5 = cashLeftAfter10 - 5 * +Note5.textContent;
//   for1 = cashLeftAfter5;
//   Note1.textContent = Math.trunc(for1 / 1);
// }

checkBtn.addEventListener("click", btnOnClick);
