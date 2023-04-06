import { useState } from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-player w-full border border-red-600 ">
      <video className="border border-sky-500 w-full" src={src} autoPlay />
    </div>
  );
};

export default VideoPlayer;
