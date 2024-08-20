'use client';

import React from 'react';
import YouTube from 'react-youtube';
import { IoTriangleSharp } from "react-icons/io5";

interface VideoSectionProps {
  videoId: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoId }) => {
  const opts = {
    height: '498',
    width: '886',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col items-center p-[16px] m-[-16px]">
      <div className="flex flex-col justify-center shadow-2xl">
            <YouTube videoId={videoId} opts={opts} />
            <div className="p-[20px] flex flex-col items-start justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200">
                <div className="text-black text-2xl font-bold mb-[10px]">
                    <h1>Open SaaS</h1>
                </div>

                <div className="mb-[10px] text-base text-gray-600">
                    <h2>Open-source &amp; 100% free React &amp; Node.js SaaS starter</h2>
                </div>

                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                        <div className="text-lg font-bold text-gray-700">▲ 594</div>
                        <div className="flex -space-x-2 ml-2">
                            <img
                            className="w-6 h-6 rounded-full border-2 border-white"
                            src="/assets/logo.png"
                            alt="Avatar 1"
                            />
                            <img
                            className="w-6 h-6 rounded-full border-2 border-white"
                            src="/assets/logo.png"
                            alt="Avatar 2"
                            />
                            <img
                            className="w-6 h-6 rounded-full border-2 border-white"
                            src="/assets/logo.png"
                            alt="Avatar 3"
                            />
                        </div>
                    </div>
                    <button className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center">P</button>
                </div>

            </div>
      </div>
      
    </div>
  );
};

export default VideoSection;