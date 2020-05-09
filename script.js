$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var itemId = $(this).attr("id");
        console.log(itemId)
        var blockId = itemId.split("-")[1]
        var userEntry = $("#input-" + blockId).val();
        console.log(userEntry,"#input-" + blockId)
        localStorage.setItem(blockId, userEntry);
    })
})


function updateHour() {
    $("#presentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    var presentHour = moment().hours();
    for(let i = 9; i <= 17; i++) {
        $("#input-" + i).val(localStorage.getItem(i))
        if (i < presentHour){
            $("#input-" + i).addClass("prevHours")
        }
        else if (i === presentHour){
            $("#input-" + i).addClass("curHours")  
        }
        else{
            $("#input-" + i).addClass("futHours")  
        }
    }
}
updateHour()