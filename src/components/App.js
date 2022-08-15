import video from "../data/video.js";
import VideoDetails from './VideoDetails'
import Comments from "./Comments.js";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails 
      title={video.title} 
      views={video.views} 
      created={video.createdAt}
      upVotes={video.upvotes}
      downVotes={video.downvotes}
      />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
