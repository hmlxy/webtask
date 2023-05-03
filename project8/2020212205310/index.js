/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-04-14 16:09:58
 * @version $Id$
 **/




$("img.picb").on("click",function () {
    if($(this).hasClass("tag")){
        $(this).removeClass("tag");
        $(this).animate({
            width:"100px",
            height:"100px", 
        },500)
        .css({"z-index":"0","border": "0"});
    }
    else{
        $(this).addClass("tag");
        $(this).animate({
            width:"200px",
            height:"200px",
        },500)
        .css({"z-index":"99","border": "10px solid gray",});
    }
    
})

$(".btn").on("click",function(){
    $(this).css({"background-color":"grey"})
    $(this).siblings().css({"background-color":"white"})
    var num=parseInt($(this).index()+1);
    $(".picbox").text(num)
    .css({"color":"orange","font-size":"72px"});
})


$(function(){
    $(".delbox .item").each(function(index){
        $(this).children().first().text(index+1);
    })
});
     
$(".item button").on("click",function(){
    var index=$(this).parent().index();
    $(this).parent().remove();

    $(".delbox .item").each(function(index){
        $(this).children().first().text(index+1);
    })
})

$(".addbtn").on("click",function(){
    var newitem=$("<div class='item'><span>1</span><span></span><button>Delete</button></div>");
    $(this).siblings().last().after(newitem);

    $(".delbox .item").each(function(index){
        $(this).children().first().text(index+1);
        $(this).children().last().on("click",function(){
            $(this).parent().remove();
        })
    })
})