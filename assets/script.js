const startbushour = 8; //Defined the start of the scheduler
const endbushour = 17;  //End of bussiness hours
let taskarray = [""];   //Declare an empty array with the correct lenght
for (i = 0; i < endbushour-startbushour; i++){taskarray.push("");}
function init() {       //Checks the local storage as the user loads the page
    var stored_taskarray = JSON.parse(localStorage.getItem("taskarray"));
    if (stored_taskarray !== null) {
        taskarray = stored_taskarray;
  }}
// Use the id of the clicked btn and reads the value to save it to the local storage
function reply_click(clicked_id){
    var textid = "#text"+clicked_id;
    taskarray[clicked_id-startbushour]=$(textid).val();
    localStorage.setItem("taskarray", JSON.stringify(taskarray));
    $("#topstatus").text("Appointment added to the local storage ✅"); //Sends a message at on top
    setTimeout(clean,4500); //waits 4.5 seconds before clean the message
}
function clean(){$("#topstatus").text("") // Cleans message on top
}
$(function () {     //Wrap all code that interacts with the DOM in a call to jQuery
    const now = dayjs();
    const formattedDate = now.format('dddd, MMMM DD');
    $("#currentDay").text(formattedDate);
    let timestatus = "";
    $("<a>",{id: "topstatus", text: ""}).appendTo('.container-lg.px-5');
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
  init(); //calls function as the page loads.