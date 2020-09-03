import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//imports correctly

axios.get('https://api.github.com/users/suzannecabral')


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
.then(newData => {
  console.log(newData.data);
  const gitData = newData.data;

  const card1 = cardMaker(gitData);
  cardContainer.append(card1);
})
.catch(err => {
  console.log(err)
  debugger
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

const followersUrl = followersArray.map((item)=>{
  return `https://api.github.com/users/${item}`;
});



followersUrl.forEach((item) => {
  axios.get(item)
    .then(result => {
      const newData = result.data;
      const newCard = cardMaker(newData);
      cardContainer.append(newCard);
    })
    .catch(err => {
      console.log(err);
      debugger;
    })
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

// const fakeDataObj = { 	
//   login:"suzannecabral",
//   id:25539417,
//   node_id:"MDQ6VXNlcjI1NTM5NDE3",
//   avatar_url:"https://avatars1.githubusercontent.com/u/25539417?v=4",
//   gravatar_id:	"",
//   url:"https://api.github.com/users/suzannecabral",
//   html_url:"https://github.com/suzannecabral",
//   followers_url:"https://api.github.com/users/suzannecabral/followers",
//   following_url:"https://api.github.com/users/suzannecabral/following{/other_user}",
//   gists_url:"https://api.github.com/users/suzannecabral/gists{/gist_id}",
//   starred_url:"https://api.github.com/users/suzannecabral/starred{/owner}{/repo}",
//   subscriptions_url:"https://api.github.com/users/suzannecabral/subscriptions",
//   organizations_url:"https://api.github.com/users/suzannecabral/orgs",
//   repos_url:"https://api.github.com/users/suzannecabral/repos",
//   events_url:"https://api.github.com/users/suzannecabral/events{/privacy}",
//   received_events_url:"https://api.github.com/users/suzannecabral/received_events",
//   type:"User",
//   site_admin:false,
//   name:"Suzanne",
//   company:null,
//   blog:"",
//   location:"Concord, CA",
//   email:null,
//   hireable:true,
//   bio:"Blah blah fake bio",
//   twitter_username:null,
//   public_repos:22,
//   public_gists:0,
//   followers:3,
//   following:4,
//   created_at:"2017-02-03T22:59:36Z",
//   updated_at:"2020-09-03T20:17:51Z"
// };



function cardMaker (dataObj) {
  //create main elem

  const newCard = document.createElement('div');
  newCard.classList.add('card');

    const gitImg = document.createElement('img');
    gitImg.src = dataObj["avatar_url"];

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('card-info');

      const gitRealname = document.createElement('h3');
      gitRealname.classList.add('name');
      gitRealname.innerHTML = dataObj.name;

      const gitAlias = document.createElement('p');
      gitAlias.classList.add('user');
      gitAlias.innerHTML = dataObj.login;

      const gitLoc = document.createElement('p');
      gitLoc.innerHTML = dataObj.location;


      //need to link together link and "profile" label
      const gitProfile = document.createElement('p');
      gitProfile.innerHTML = 'Profile: '
        const gitLink = document.createElement('a');
        gitLink.innerHTML = dataObj["html_url"];
        gitLink.href = dataObj["html_url"];

      const gitFollowers = document.createElement('p');
      gitFollowers.innerHTML = 'Followers: ' + dataObj.followers;

      const gitFollowing = document.createElement('p');
      gitFollowing.innerHTML = 'Following: ' + dataObj.following;

      const gitBio = document.createElement('p');
      gitBio.innerHTML = 'Bio: ' + dataObj.bio;

  //connect element together
  gitProfile.append(gitLink);

  infoDiv.append(gitRealname,gitAlias,gitLoc,gitProfile,gitFollowers,gitFollowing,gitBio);

  newCard.append(gitImg,infoDiv);

  console.log(newCard);
  return newCard;

}

const cardContainer = document.querySelector('div.cards');

// const testCard = cardMaker(fakeDataObj);
// cardContainer.append(testCard);





// const testList = [];
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
