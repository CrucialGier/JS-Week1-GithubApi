var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $("#portrait").attr('src', response.avatar_url);
    if (response.name === null) {
      $("#name").text("This user has not entered a name");
    } else {
      $("#name").text(response.name);
    }
    if (response.location === null) {
      $('#location').text("User has not entered their location.");
    } else {
      $('#location').text(response.location);
    }
    if (response.email === null) {
      $('#email').text("user has not entered an email");
    } else {
      $('#email').text(response.email);
    }
    $('#profileLink').attr('href', "https://github.com/" + response.login);
    $.get(response.repos_url).then(function(repositories) {
      for (var i = 0; i < repositories.length; i++) {
        $('#repositoryLink').append('<p>' + repositories[i].name + ': ' + repositories[i].description + '</p>');
      }
    });
  });
};
