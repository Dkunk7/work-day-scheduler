var currentDate = moment().format('dddd, MMMM Do');
var currentTime = moment().format('k');
console.log(currentDate);
console.log(currentTime);

var saveBtn9 = document.querySelector(`#nine`);
var saveBtn10 = document.querySelector(`#ten`);
var saveBtn11 = document.querySelector(`#eleven`);
var saveBtn12 = document.querySelector(`#twelve`);
var saveBtn13= document.querySelector(`#thirteen`);
var saveBtn14 = document.querySelector(`#fourteen`);
var saveBtn15 = document.querySelector(`#fifteen`);
var saveBtn16 = document.querySelector(`#sixteen`);
var saveBtn17 = document.querySelector(`#seventeen`);

currentDay = $(`#currentDay`);
currentDay.text(currentDate);

for (i = 9; i < 18; i++) {
    if (currentTime > i) {
        var tempEl = $(`#numb${[i]}`);
        tempEl.addClass("past");   
    } else if (currentTime < i) {
        var tempEl = $(`#numb${[i]}`);
        tempEl.addClass("future");
    } else if (currentTime == i) {
        var tempEl = $(`#numb${[i]}`);
        tempEl.addClass("present");
    }
};

var saveText = function(event) {
    id = event.target.getAttribute("id")
    var temp = document.querySelector(`.${id}`).value;

    localStorage.setItem(id, temp);
};

var loadText = function() {
    var tempArr = ['nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen'];
    for (i = 0; i < 10; i++) {
        
        var tempLoad = localStorage.getItem(tempArr[i]);
        if (tempLoad) {
            var tempSpot = document.querySelector(`.${tempArr[i]}`);
            tempSpot.append(tempLoad);
        }
    }
};

saveBtn9.addEventListener("click", saveText);
saveBtn10.addEventListener("click", saveText);
saveBtn11.addEventListener("click", saveText);
saveBtn12.addEventListener("click", saveText);
saveBtn13.addEventListener("click", saveText);
saveBtn14.addEventListener("click", saveText);
saveBtn15.addEventListener("click", saveText);
saveBtn16.addEventListener("click", saveText);
saveBtn17.addEventListener("click", saveText);

loadText();