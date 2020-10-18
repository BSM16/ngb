$(document).ready(function(){$('b[name="coverxz"]').before($("#iamgex-cover").html());$("#iamgex-cover").html("");$('div[name="infromx"]').before($("#cuk-infromx").html());$("#cuk-infromx").html("");$('b[name="labelsxpost"]').before($("#show-labelsxpost").html());$("#show-labelsxpost").html("")});
$("img.related_img").each(function(){$(this).attr("data-src",$(this).attr("data-src").replace("s1600","w120-h150-c"))});
$(".coverx img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w125-h175-c/"))});
