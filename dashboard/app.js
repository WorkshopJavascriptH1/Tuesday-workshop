$(function () {

    $('#loadUsers').on('click', function () {

        $.get('http://fubizstats-api.herokuapp.com/users', function (response) {
            if (response.code != 200) {
                alert(response.message);
                return false;
            }
            var users = response.result;

            for (user in users) {
                $('#usersContainer').append('<img style="margin-right: 20px;" align="left" width="100" src="https://fubiz.surfacecc.com/media/creations/'+ users[user].oeuvre_id +'.jpg">');
                $('#usersContainer').append('<h3>'+ users[user].username +'</h3>');
                $('#usersContainer').append(users[user].votes +' votes<br>');
                $('#usersContainer').append(users[user].facebook +' partages facebook<br>');
                $('#usersContainer').append(users[user].twitter +' partages twitter');
                $('#usersContainer').append('<div style="clear: both"></div>');
            }
        });
    });


    $('#usersContainer').on('click', 'h3', function () {
        
        var username = $(this).html();
    });
});
