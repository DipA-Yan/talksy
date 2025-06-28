

# 📹 Video Conferencing Web App

A fully functional, responsive video conferencing web application built using **React** and **ZegoCloud SDK**. This app enables real-time communication with features like video/audio calls, room-based joining, and screen sharing. It’s designed to be simple, efficient, and scalable for a variety of use cases such as meetings, remote collaboration, and online classes.

---

## ✨ Features

### ✅ Video and Audio Calling

* Seamlessly integrates **one-on-one** and **group video/audio calls** using the ZegoCloud SDK.
* Ensures **low latency**, **high-quality** media streaming over real-time connections.
* Users can **mute/unmute** audio or **enable/disable** video anytime during the call.

### 🏠 Room-based Join System

* Users can **create** or **join virtual rooms** via unique Room IDs.
* Rooms support **multiple participants** and provide a collaborative environment.
* The room management logic ensures proper stream joining and leaving sequences.

### 🖥️ Screen Sharing

* Easily share your screen with other participants during an ongoing call.
* Supports **entire screen**, **application window**, or **browser tab** sharing options.
* Screen sharing stream is handled in parallel with existing audio/video streams.

### 🔄 Real-time Communication Integration

* Utilizes **ZegoCloud APIs** for setting up real-time media communication.
* Handles **stream publishing**, **stream playing**, and **peer connections** effectively.
* Implements robust **event listeners** to track user state and connection quality.

### 📱 Responsive and User-Friendly UI

* Built with **React** and **responsive CSS** to ensure cross-device compatibility.
* Intuitive layout that works seamlessly across desktops, tablets, and mobile devices.
* UI updates dynamically based on user interactions and media state (e.g., toggling camera).

---

## 🛠️ Tech Stack

* **Frontend:** React, JavaScript, HTML, CSS
* **SDK/API:** [ZegoCloud Web SDK](https://www.zegocloud.com)
* **Media Handling:** WebRTC via ZegoCloud
* **Styling:** CSS Modules / Tailwind (if used, mention here)

---

## 🚀 How to Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/DipA-Yan/talksy.git
   cd talksy
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure ZegoCloud**

   * Get your App ID and Server Secret from [ZegoCloud Console](https://console.zegocloud.com/)
   * Replace the placeholders in your `Room.jsx` file:

     ``
     appId=your_app_id
     serverSecret=your_server_secret
     ``

4. **Start the App**

   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` in your browser to use the app.

---

## 📌 Future Improvements

* Chat functionality (text messaging alongside calls)
* Participant list and host controls
* Recording sessions and saving them to the cloud
* Authentication and user roles
