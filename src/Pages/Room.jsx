import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
  const {roomId} = useParams();

  const myMeeting = async(element) => {
    const appID = 111111111; // Replace with your actual appID
    const serverSecret = "111111111111"; // Replace with your actual serverSecret
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret, 
      roomId, 
      Date.now().toString(), 
      "Ankit"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      }
    });
  };
  
  return ( 
    <div className='room'>
      <div ref={myMeeting}/>
    </div>
  );
}

export default Room