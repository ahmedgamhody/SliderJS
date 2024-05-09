// //get imgs and set it in array
// var imgs = Array.from(document.querySelectorAll(".con img"));

// //get number of imgs to set it in ind slider

// var numerSlider = imgs.length;

// //set current silder
// var currentSilder = 1;

// // area it is write into number of slider isb seclection
// var areaNumber = document.querySelector(".silder-number");

// //get btn
// var nextBtn = document.getElementById("next");
// var prevBtn = document.getElementById("prev");

// //applay functions
// nextBtn.onclick = next;
// prevBtn.onclick = prev;

// //create ul
// var mainUl = document.createElement("ul");
// mainUl.id = "pagination-ul";

// //create li list to into ul
// for (var i = 0; i < numerSlider; i++) {
//   let lis = document.createElement("li");
//   lis.setAttribute("data-index", i + 1);
//   lis.textContent = `${i + 1}`;
//   mainUl.appendChild(lis);
// }
// document.getElementById("ind").appendChild(mainUl);

// //function next
// function next() {
//   if (!nextBtn.classList.contains("disabled")) {
//     currentSilder++;
//     cheaker();
//   }
// }

// //function previous
// function prev() {
//   if (!prevBtn.classList.contains("disabled")) {
//     currentSilder--;
//     cheaker();
//   }
// }

// //get ul new to

// var newUl = document.getElementById("pagination-ul");
// var lis = Array.from(newUl.children);

// function cheaker() {
//   removActiveClass();
//   areaNumber.textContent = `Slider ${currentSilder} of ${numerSlider}`;
//   imgs[currentSilder - 1].classList.add("active");
//   newUl.children[currentSilder - 1].classList.add("active");
//   if (currentSilder == 1) {
//     prevBtn.classList.add("disabled");
//   } else {
//     prevBtn.classList.remove("disabled");
//   }
//   if (currentSilder == numerSlider) {
//     nextBtn.classList.add("disabled");
//   } else {
//     nextBtn.classList.remove("disabled");
//   }
// }

// cheaker();

// function removActiveClass() {
//   imgs.forEach((e) => e.classList.remove("active"));
//   lis.forEach((e) => e.classList.remove("active"));
// }

// lis.forEach((e, index) => {
//   e.onclick = function () {
//     currentSilder = index + 1;
//     cheaker();
//   };
// });
//
//
///
///
//
///
///

//
//
//
//
//
//
//

//
//
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let areaLis = document.getElementById("ind");
let imgs = Array.from(document.querySelectorAll(".con img"));
let ul = document.createElement("ul");
ul.id = "main-ul";
let area = document.querySelector(".silder-number");
let counter = 0;
let numImgs = imgs.length;
nextBtn.onclick = function () {
  if (!nextBtn.classList.contains("disabled")) {
    counter++;
    cheaker();
  }
};

prevBtn.onclick = function () {
  if (!prevBtn.classList.contains("disabled")) {
    counter--;
    cheaker();
  }
};

for (let i = 0; i < numImgs; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-index", i + 1);
  li.textContent = `${i + 1}`;
  ul.appendChild(li);
}
let newLis = Array.from(ul.children);
areaLis.appendChild(ul);
function cheaker() {
  removClass();
  imgs[counter].classList.add("active");
  newLis[counter].classList.add("active");
  area.textContent = `Slider ${counter + 1} of ${numImgs}`;
  if (counter == 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (counter == numImgs - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function removClass() {
  imgs.forEach((e) => {
    e.classList.remove("active");
  });
  newLis.forEach((e) => {
    e.classList.remove("active");
  });
}

newLis.forEach((e) => {
  e.onclick = function () {
    counter = parseInt(e.getAttribute("data-index") - 1);
    cheaker();
  };
});

cheaker();
