var right;
var percent;
var content;
var answer;
var s_name;
var a_name;
var html = new Array();

function play(name){

$("#choose_screen").hide();
$("#play_screen").show();

s_name = "data/"+ name +".json";
a_name = "http://muxistudio.qiniudn.com/"+ name +".mp3";
$("#song").attr("src",a_name);
$.getJSON(s_name, function(json){
 answer = json.answer;
 console.log(json.content);
 content = json.content;
 html.length = 0;
 for (i=0;i<content.length;i++){
 html += "<p>"+ content[i]+"</p>";
 
 };
 
 $("#lyric_box").html(html);
 $("del").after('<input type="text" name="1" class="missed" id="input">');
 $("del").remove();



});
};


$(document).ready(function()
{



$("#play_screen").hide();





$("#submit").bind("click",function(){
	right = 0;
	percent = 0;
	for (i=0;i<answer.length;i++){

		if ($(".missed").eq(i).val() == answer[i]){

		right += 1;
		
	}
	


    }
	percent = (right/answer.length )*100
	alert("your answer is "+ percent+"% right, you sucker!!");

});


$("#play").bind("click",function(){

var audio = document.getElementById('song');

audio.play(); 


});


$("#stop").bind("click",function(){

var audio = document.getElementById('song');

audio.pause(); 


});


$("#back").bind("click",function(){
$("#lyric_box").html("");
$("#play_screen").hide();
$("#choose_screen").show();


});

});