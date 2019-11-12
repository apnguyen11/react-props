// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
  return (
    <div>
      {tweets.map((oneTweet, element) => (
          <Tweet key={element} tweet={oneTweet} />
      ))}
      </div>
  );
}

const Tweet = ({tweet}) => {
    let{user, text, likes, retweets, replies} = tweet
    return (
        <div className="bg-white p-2 m-2 w-50">
        <User user={user} />
        <Metrics
          text={text}
          likes={likes}
          retweets={retweets}
          replies={replies}
        />
      </div>   
    )
};  // CHALLENGE: Write a separate Tweet component for use in the App component

const User = ({user}) => {
    let {handle, username, isVerified, profilePic} = user
    return (
        <div className="d-flex align-items-center">
            <img width="50" src={profilePic} />
                <div className="mt-4 ml-2">
                    <b>{username}</b>
                    {isVerified? <img width="15" src="twitterIcons/check-circle.svg" />: ""}
                    <p>{handle}</p>
                </div>
        </div>
    )
};  // CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = ({text, likes, retweets, replies}) => {
  console.log(text)
    return (
        <React.Fragment>
            <h3>{text}</h3>
                <hr />
            <div className="d-flex text-secondary">
                <img style={{opacity: 0.62}} src="twitterIcons/message-circle.svg" />
                <b className="mr-3 ml-1">{replies}</b>
                <img style={{opacity: 0.62}} src="twitterIcons/repeat.svg" />
                <b className="mr-3 ml-1">{retweets}</b>
                <img style={{opacity: 0.62}} src="twitterIcons/heart.svg" />
            <b className="mr-3 ml-1">{likes}</b>
            </div>
        </React.Fragment>
    )
}; // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly