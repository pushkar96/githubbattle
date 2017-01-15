var React = require('react')
var ReactDOM = require('react-dom')

var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3$s=460'
}

var ProfilePic = function(props) {
  return <img src={props.imageUrl} style={{height: 100, width: 100}}></img>
}

var ProfileLink = function(props) {
  return (
    <div>
      <a href={'https://www.github.com/' +  props.username}>
        {props.username}
      </a>
    </div>
  );
}

var ProfileName = function(props) {
  return (
      <div>{props.name}</div>
  );
}

var Avatar = function(props) {
  return(
    <div>
      <ProfilePic imageUrl={props.user.image}/>
      <ProfileName name={props.user.name}/>
      <ProfileLink username={props.user.username}/>
    </div>
  );
}

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
