$(function () {
    $('#loadUsers').on('click', function () {

        $.get('/users.json', function (users) {
            for (user in users) {
                var age = users[user].age;
                $('#usersContainer').append(user +" a "+ age +"<br>");

                for (param in users[user].params) {

                }
            }
        });
    });
});
