$(function () {

    $('#loadUsers').on('click', function () {

        $.get('http://fubizstats-api.herokuapp.com/users', function (response) {
            if (response.code != 200) {
                alert(response.message);
                return false;
            }
            var users = response.result;

            for (user in users) {
                var element = $('<div id="'+ users[user].username +'">');
                var statsElement = $('<div class="stats">');

                // INFORMATIONS
                statsElement.append(users[user].votes +' votes<br>');
                statsElement.append(users[user].facebook +' partages facebook<br>');
                statsElement.append(users[user].twitter +' partages twitter');
        
                // BASE
                element.append('<img style="margin-right: 20px;" align="left" width="100" src="https://fubiz.surfacecc.com/media/creations/'+ users[user].oeuvre_id +'.jpg">');
                element.append('<h3>'+ users[user].username +'</h3>');
                element.append(statsElement);
                element.append('<div style="clear: both"></div>');

                $('#usersContainer').append(element);
            }
        });
    });


    $('#usersContainer').on('click', 'h3', function () {
        var parentElement = $(this).parent();
        
        parentElement.children('.stats').slideToggle();
    });
});
