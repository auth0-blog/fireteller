// CONFIG
FIREBASE_APIKEY = 'YOUR-FIREBASE-API-KEY';
FIREBASE_AUTH_DOMAIN = 'YOUR-FIREBASE-AUTH-DOMAIN';
FIREBASE_DATABASE_URL = 'YOUR-FIREBASE-DATABASE-URL';
AUTH0_CLIENT_ID = 'YOUR-AUTH0-CLIENT-ID';
AUTH0_DOMAIN = 'YOUR-AUTH0-DOMAIN';

var config = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
};
firebase.initializeApp(config);

firebase.database().ref('stories').on('value', function(data){
  $('#stories').empty();

  data.forEach(function(story){
    generateStory(story);
  })
});

firebase.database().ref('story').on('value', function(data){
  $('#story').empty();
  data.forEach(function(data){
    var emoji = data.val();
    $('#story').append('<i class="em em-' + emoji + '"></i>')
  })
})

function generateStory(story){
  var $div = $("<div><hr></div>")
  $('#stories').prepend($div);
  story.forEach(function(page){
    $($div).append('<i class="em em-' + page.val() + '"></i>');
  })
}

function getRandomEmoji(){
  $('#options').empty();
  for(var i = 0; i < 30; i++){
    var number = randomNum();
    $('#options').append('<i class="em em-' + emoji[number] + '" onclick="addToStory('+ number +')"></i>');
  }
}
getRandomEmoji();

function addToStory(number){
  var current = firebase.database().ref('story');
  current.transaction(function(data){
    if(data){
      console.log(Object.keys(data).length)
      if(Object.keys(data).length == 9){
        data.final = emoji[number];
        firebase.database().ref('stories').push(data);
        firebase.database().ref('story').remove();
      } else {
        firebase.database().ref('story').push(emoji[number]);
      }
    } else {
      firebase.database().ref('story').push(emoji[number]);
    }
  })
}

function randomNum(){
  return Math.floor(Math.random() * (emoji_count - 0)) + 0;
}

function loginWithGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
  }).catch(function(error) {
    console.log(error);
  });
}

function login(){
  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
  var auth0 = new Auth0({ domain : AUTH0_DOMAIN, clientID: AUTH0_CLIENT_ID });

  lock.show({
    }, function(err, profile, id_token) {
      localStorage.setItem('profile', JSON.stringify(profile));
      var options = {
        id_token : id_token,
        api : 'firebase',
        scope : 'openid name email displayName',
        target: AUTH0_CLIENT_ID
      };
      auth0.getDelegationToken(options, function(err, result){
        if(!err){
          firebase.auth().signInWithCustomToken(result.id_token).catch(function(error) {
            console.log(error);
          });
        }
      });
    }, function() {
      // Error callback
    });
}

function logout(){
  localStorage.removeItem('profile');
  firebase.auth().signOut().then(function() {
    console.log("Signout Successful")
  }, function(error) {
    console.log(error);
  });
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var profile = localStorage.getItem('profile');
    profile = JSON.parse(profile);
    $('#logout-btn').show();
    $('#signin-btn').hide();
    $('#contrinbute').show();
    $('#email').show().append('<span>Welcome: <strong>' + profile.email + '</strong></span>')
  } else {
    $('#logout-btn').hide();
    $('#signin-btn').show();
    $('#contrinbute').hide();
    $('#email').hide().empty();
  }
});
