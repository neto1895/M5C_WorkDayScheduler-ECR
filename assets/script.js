// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const startbushour = 16;
const endbushour = 23;
let taskarray = [""];
for (i = 0; i < endbushour-startbushour; i++){
    taskarray.push("");
}
function init() {
    var stored_taskarray = JSON.parse(localStorage.getItem("taskarray"));
    if (stored_taskarray !== null) {
        taskarray = stored_taskarray;
  }}

function reply_click(clicked_id){
    console.log(clicked_id);
    var textid = "#text"+clicked_id;
    console.log(textid);
    console.log(document.getElementById("text9").value);
    console.log($(textid).val());
    taskarray[clicked_id-startbushour]=$(textid).val();
    localStorage.setItem("taskarray", JSON.stringify(taskarray));
}

$(function () {
    const now = dayjs();
    const formattedDate = now.format('dddd, MMMM DD');
    $("#currentDay").text(formattedDate);
    let timestatus = "";
    for (let xh = startbushour; xh < endbushour+1; xh++) {
        if (xh < now.format("H")){
            timestatus = "past";
        } else if (xh == now.format("H")){
            timestatus = "present";
        } else{
            timestatus = "future";
        }
        let $outerDiv = $("<div>", { id: "hour"+xh, class: "row time-block "+timestatus });
        $('<div>', { class: 'col-2 col-md-1 hour text-center py-3', text: dayjs().set('hour', xh).format("hhA") }).appendTo($outerDiv);
        $('<textarea>', { id:"text"+xh, class: 'col-8 col-md-10 description', rows: 3, text: taskarray[xh-startbushour] }).appendTo($outerDiv);
        let $button = $('<button>', { onClick:"reply_click(this.id)",id: xh, class: 'btn saveBtn col-2 col-md-1', 'aria-label': 'save' }).appendTo($outerDiv);
        $('<i>', { class: 'fas fa-save', 'aria-hidden': true }).appendTo($button);
        $outerDiv.appendTo('.container-lg.px-5');
    }
  });
  
  init();