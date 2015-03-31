$(function () {
    $('#search').on('submit', function (e) {
        e.preventDefault();
        $('#userInfos').html('<h4>Searching datas...</h4>');

        var username = $('#username').val();

        $.get('http://localhost/Tools/DashMicrosoft/api.php?username='+ username, function (response) {
            if (response.error === true) {
                $('#userInfos').html("<h4>"+ response.message +"</h4>");
                return false;
            }
            
            var date = new Date();
            var day = date.getDate();
            var month = date.getMonth() + 1;
            month = (month < 10) ? "0" + month : month;
            var year = date.getFullYear();
            var formattedDay = day +"-"+ month +"-"+ year;
            var hour = date.getHours();
            var currentDatas = response.result.datas[formattedDay][hour];

            $('#userInfos').html("");
            $('#userInfos').append('<img style="margin-right: 20px;" align="left" width="100" src="https://fubiz.surfacecc.com/media/creations/'+ response.result.oeuvre +'.jpg">');
            $('#userInfos').append('<h4>'+ username +'</h4>');
            $('#userInfos').append('<p><u>Votes</u>: '+ currentDatas.votes +'</p>');
            $('#userInfos').append('<p><u>Partage facebook</u>: '+ currentDatas.facebook +'</p>');
            $('#userInfos').append('<p><u>Partage twitter</u>: '+ currentDatas.twitter +'</p>');
        });
    });
});
