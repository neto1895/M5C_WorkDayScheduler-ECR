// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const startbushour = 9;
const endbushour = 17;
let taskarray = [""];
for (i = 0; i < endbushour-startbushour; i++){
    taskarray.push("");
}



function reply_click(clicked_id){
    alert(clicked_id);
}$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?




    const now = dayjs();
    const formattedDate = now.format('dddd, MMMM DD hh:mm ss A');
    $("#currentDay").text(formattedDate);

    console.log(dayjs().format("hh:mm ss A" ));

    // let $outerDiv = $("<div>", { id: "hour-xh", class: "row time-block past" });
    // $('<div>', { class: 'col-2 col-md-1 hour text-center py-3', text: 'xh' }).appendTo($outerDiv);
    // $('<textarea>', { class: 'col-8 col-md-10 description', rows: 3, text: 'Test js' }).appendTo($outerDiv);
    // let $button = $('<button>', { class: 'btn saveBtn col-2 col-md-1', 'aria-label': 'save' }).appendTo($outerDiv);
    // $('<i>', { class: 'fas fa-save', 'aria-hidden': true }).appendTo($button);
    // $outerDiv.appendTo('.container-lg.px-5');

    let timestatus = "";
    


    for (let xh = startbushour; xh < endbushour+1; xh++) {
        console.log(xh);
        console.log(now.format("H"))
        if (xh < now.format("H")){
            console.log("past")
            timestatus = "past";
        } else if (xh == now.format("H")){
            console.log("present")
            timestatus = "present";
        } else{
            console.log("future")
            timestatus = "future";
        }

        let $outerDiv = $("<div>", { id: "hour"+xh, class: "row time-block "+timestatus });
        $('<div>', { class: 'col-2 col-md-1 hour text-center py-3', text: dayjs().set('hour', xh).format("hhA") }).appendTo($outerDiv);
        $('<textarea>', { class: 'col-8 col-md-10 description', rows: 3, text: "" }).appendTo($outerDiv);
        let $button = $('<button>', { onClick:"reply_click(this.id)",id: "btn"+xh, class: 'btn saveBtn col-2 col-md-1', 'aria-label': 'save' }).appendTo($outerDiv);
        $('<i>', { class: 'fas fa-save', 'aria-hidden': true }).appendTo($button);
        $outerDiv.appendTo('.container-lg.px-5');
    

        
    }
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
    
    // TODO: Add code to display the current date in the header of the page.
  });
  