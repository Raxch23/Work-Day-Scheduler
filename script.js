$(document).ready(function () {
  var currentHour = dayjs().hour()
  var colorKey = ""
  var hourDisplay=""
  var currentDT=$("#currentDay")
  currentDT.text(dayjs().format("dddd, MMMM D, YYYY"))
  console.log(currentDT)
  for (var i = 9; i < 19; i++) {
    if(i<12){
      hourDisplay=i+"am"
    }
    else if (i===12){hourDisplay=i+"pm"}
    else{hourDisplay=i-12+"pm"}
    if (currentHour > i) {
      colorKey = "past"
    }
    else if (currentHour === i) { colorKey = "present" }
    else {
      colorKey = "future"
    }
    //let row=document.createElement("div")
    let row = $("<div>").addClass("time-block row").attr("id", "hour-" + i)
    let hour = $("<div>").addClass("col-3 hour").text(hourDisplay)
    let textarea = $("<textarea>").addClass("description col-7 " + colorKey).val(localStorage.getItem("hour-" + i))
    let button = $("<button>").addClass("col-2 saveBtn").text("save").on("click", function () {
      let saveBtn = $(this)
      let hour = saveBtn.parent().attr("id")
      let activity = saveBtn.siblings(".description").val()
      localStorage.setItem(hour, activity)

    })
    $(".container").append(row.append(hour, textarea, button))
    //row.setAttribute("class", "time-block")
  }



















})