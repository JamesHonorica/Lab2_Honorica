function defaultDates(){
    let today =  new Date();
    let Day = today.getDate();
    let Month = today.getMonth()+1;
    let Year = today.getFullYear();
    if(Month.toString().length == 1){
        Month = "0"+Month;
    }
    if(Day.toString().length == 1){
        Day = "0"+Day;
    }
    currentDate = Year+"-"+Month+"-"+Day;
    document.getElementById("second").value = currentDate;
    document.getElementById("secondpart").value = currentDate;
    document.getElementById("third").value = currentDate;
    document.getElementById("second").min = currentDate;
    document.getElementById("secondpart").min = currentDate;
}

function saveForm(){
    let eventType = document.getElementById("zero").value;
    let eventTitle = document.getElementById("first").value;
    let eventDates = document.getElementById("second").value;
    let eventDates2 = document.getElementById("secondpart").value;
    let postingDate = document.getElementById("third").value;

    let today =  new Date();
    let Day = today.getDate();
    let Month = today.getMonth()+1;
    let Year = today.getFullYear();
    currentDate = Year+"-"+Month+"-"+Day;

    var date1Split = eventDates.split("-");
    var date1Month = parseInt(date1Split[1]);
    var date1MonthString = date1Month.toString();
    var date1Day = parseInt(date1Split[2]);
    var date1DayString = date1Day.toString();
    var eventDate1String = date1Split[0]+"-"+date1MonthString+"-"+date1DayString;

    var date2Split = eventDates2.split("-");
    var date2Month = parseInt(date2Split[1]);
    var date2MonthString = date2Month.toString();
    var date2Day = parseInt(date2Split[2]);
    var date2DayString = date2Day.toString();
    var eventDate2String = date2Split[0]+"-"+date2MonthString+"-"+date2DayString;

    var postDateSplit = postingDate.split("-");
    var postMonth = parseInt(postDateSplit[1]);
    var postMonthString = postMonth.toString();
    var postDay = parseInt(postDateSplit[2]);
    var postDayString = postDay.toString();
    var postingDateString = postDateSplit[0]+"-"+postMonthString+"-"+postDayString;

    if(eventType === "default"){
        alert("Select an Event Type.")
    }else if(eventTitle === ""){
        alert("Select an  Event Title.")
    }else if(eventDate1String == currentDate){
        alert("Select a Starting date later than today.")
    }else if(eventDate2String == currentDate){
        alert("Select an Ending date later than today.")
    }else if(postingDateString == eventDate1String || postingDateString == eventDate2String){
        alert("Select ann earlier Posting Date.")
    }else{
        alert("SUCCESSFUL EVENT CREATION!")
    }

}
