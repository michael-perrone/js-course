// the date object
// the date object uses the new keyword
// we're not gonna talk about the new keyword until later
// it is a little bit advanced

console.log(new Date());

let ourDate = new Date();

// so now we have access to all those methods

console.log(ourDate.getMonth());

// 0 1 2 3 4 5 6 7 8 9 10 11

function getDaysOfMonth(year, month) {
  let daysOfMonth = new Date(year, month, 0).getDate();
  return daysOfMonth;
}

let months, month, year, monthChosen, daysInMonth;
months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function render(getDays, newYear, newMonth) {
  if (year === undefined) {
    year = new Date().getFullYear();
  } else {
    year = newYear;
  }
  document.getElementById("year").innerText = year;
  if (month === undefined) {
    month = ourDate.getMonth();
  } else {
    month = newMonth;
  }
  monthChosen = months[month];
  document.getElementById("month").innerHTML = monthChosen;

  if (daysInMonth === undefined) {
    daysInMonth = getDays(year, month + 1);
  }
  let firstDayInMonth = new Date(monthChosen + " 1, " + year).getDay();
  if (document.getElementById("0").children.length > 0) {
    for (let lastIndex = 0; lastIndex < 7; lastIndex++) {
      document.getElementById(lastIndex.toString()).innerHTML = "";
    }
  }
  for (let otherIndex = 0; otherIndex < firstDayInMonth; otherIndex++) {
    let blankPTag = document.createElement("p");
    let blankTextNode = document.createTextNode(" ");
    blankPTag.style.padding = "12px 10px";
    blankPTag.appendChild(blankTextNode);
    console.log(otherIndex);
    let dateColumn = document.getElementById(otherIndex.toString());
    dateColumn.appendChild(blankPTag);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    let pTag = document.createElement("p");
    pTag.style.fontSize = "20px";
    let dayText = document.createTextNode(i.toString());
    pTag.appendChild(dayText);
    let date = monthChosen + " " + i + "," + " " + year;
    let dayOfWeek = new Date(date).getDay();
    let dayHolder = document.getElementById(dayOfWeek.toString());
    dayHolder.appendChild(pTag);
  }
}

function changeYear(addOrMinus) {
  if (addOrMinus === "addYear") {
    year += 1;
    render(getDaysOfMonth(year, month), year, month);
  } else {
    year -= 1;
    render(getDaysOfMonth(year, month), year, month);
  }
}

function changeMonth(addOrMinus) {
  if (addOrMinus === "addMonth") {
    if (month + 1 !== 12) {
      month += 1;
      render(getDaysOfMonth(year, month + 1), year, month);
    } else {
      month = 0;
      render(getDaysOfMonth(year + 1, month), year + 1, month);
    }
  } else {
    if (month - 1 !== -1) {
      month -= 1;
      render(getDaysOfMonth(year, month - 1), year, month - 1);
    } else {
      month = 11;
      render(getDaysOfMonth(year, month), year, month);
    }
  }
}

render(getDaysOfMonth);
