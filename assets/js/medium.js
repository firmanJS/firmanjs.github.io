$(document).ready(function () {
    $.ajax({
        url: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@firmanabdulhakim",
        method: "GET",
        success: function (data) {
            let divHtml = '';
            $.each(data.items, function(_i, rows) {
                divHtml+='<div class="col-md-4">';
                divHtml+='<div class="card mb-4 box-shadow">';
                divHtml+='<img class="card-img-top" src="'+rows.thumbnail+'">';
                divHtml+='<div class="card-body">';
                divHtml+='<p class="card-text">'+rows.title+'</p>';
                divHtml+='<div class="d-flex justify-content-between align-items-center">';
                divHtml+='<div class="btn-group">';
                divHtml+='<a href="'+rows.link+'" target="_blannk" class="btn btn-outline-info">Read</a>';
                divHtml+='</div></div></div></div></div>';
            });
            $("#loader").hide();
            $("#blogPost").html(divHtml);
        },
        error: function(error){
            console.log(error);
        }
    });
});