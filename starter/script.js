$(document).ready(function(){
  var currentHour=dayjs().hour()
  var colorKey=""
for (var i=9;i<19;i++){
  console.log(i)
  if(currentHour>i){
    colorKey="past" 
  }
  else if(currentHour===i){colorKey="present"}
  else{
    colorKey="future"
  }
  //let row=document.createElement("div")
  let row=$("<div>").addClass("time-block row").attr("id","hour-"+i)
  let hour=$("<div>").addClass("col-3 hour").text(i)
  let textarea=$("<textarea>").addClass("description col-7 "+colorKey).val(localStorage.getItem("hour-"+i))
let button =$("<button>").addClass("col-2 saveBtn").text("save").on("click", function(){
  let saveBtn=$(this)
  let hour=saveBtn.parent().attr("id")
let activity=saveBtn.siblings(".description").val()
localStorage.setItem(hour, activity)

})
  $(".container").append(row.append(hour, textarea, button))
  //row.setAttribute("class", "time-block")
}



















})