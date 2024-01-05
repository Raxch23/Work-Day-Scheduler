$(document).ready(function(){
for (var i=9;i<19;i++){
  //let row=document.createElement("div")
  let row=$("<div>").addClass("time-block row").attr("id","hour-"+i)
  console.log(row)
  let hour=$("<div>").addClass("col-3 hour").text(i)
  let textarea=$("<textarea>").addClass("description col-7")
let button =$("<button>").addClass("col-2 saveBtn").text("save").on("click", function(){
  let saveBtn=$(this)
})
  $(".container").append(row.append(hour, textarea, button))
  //row.setAttribute("class", "time-block")
}



















})