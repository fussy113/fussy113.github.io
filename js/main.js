
$(function  DisplayProfile(){
    $("#ProfileBox").css("display", "none");
    $("#ProfilePush").click(function(){
        $("#ProfileBox").toggle();
    });
});

$(function DisplayDevelop(){
    $("#DevelopBox").css("display", "none");
    $("#DevelopPush").click(function(){
        $("#DevelopBox").toggle();
    });
});
