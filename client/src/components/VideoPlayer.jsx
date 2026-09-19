// import { useEffect, useRef, useState } from "react";

// import {
//   Play,
//   Pause,
//   RotateCcw,
//   RotateCw,
//   Volume2,
//   VolumeX,
//   Settings,
//   Maximize,
//   Minimize,
//   PictureInPicture2,
// } from "lucide-react";

// const VideoPlayer = ({
//   video,
//   title,
//   playback,
//   introCompleted = false,
// }) => {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const controlsTimerRef = useRef(null);

//   // Makes sure startAt is applied only once
//   const hasAppliedStartPosition = useRef(false);

//   const [isPlaying, setIsPlaying] = useState(false);

//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const [volume, setVolume] = useState(1);
//   const [isMuted, setIsMuted] = useState(false);

//   const [playbackRate, setPlaybackRate] = useState(1);
//   const [showSettings, setShowSettings] = useState(false);

//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showControls, setShowControls] = useState(true);

//   /*
//    * ==========================================
//    * APPLY START POSITION
//    * ==========================================
//    *
//    * This happens ONLY after RamFlix intro
//    * has completed.
//    */

//   const applyStartPosition = () => {
//     const videoElement = videoRef.current;

//     if (!videoElement) return;

//     if (hasAppliedStartPosition.current) {
//       return;
//     }

//     // If intro is still running, do nothing.
//     if (!introCompleted) {
//       return;
//     }

//     const startAt = playback?.startAt ?? 0;

//     if (
//       startAt > 0 &&
//       Number.isFinite(videoElement.duration) &&
//       videoElement.duration > startAt
//     ) {
//       videoElement.currentTime = startAt;

//       setCurrentTime(startAt);
//     }

//     // Even if startAt is 0, mark it as handled.
//     hasAppliedStartPosition.current = true;
//   };

//   /*
//    * ==========================================
//    * VIDEO METADATA
//    * ==========================================
//    */

//   const handleLoadedMetadata = () => {
//     const videoElement = videoRef.current;

//     if (!videoElement) return;

//     setDuration(videoElement.duration);

//     /*
//      * Important:
//      *
//      * If the RamFlix intro is still playing,
//      * we DON'T skip anything here.
//      *
//      * The effect below will apply startAt
//      * after the intro completes.
//      */

//     applyStartPosition();
//   };

//   /*
//    * ==========================================
//    * APPLY START POSITION AFTER INTRO
//    * ==========================================
//    */

//   useEffect(() => {
//     if (!introCompleted) {
//       return;
//     }

//     applyStartPosition();
//   }, [introCompleted, playback]);

//   /*
//    * ==========================================
//    * RESET WHEN VIDEO CHANGES
//    * ==========================================
//    */

//   useEffect(() => {
//     hasAppliedStartPosition.current = false;

//     setCurrentTime(0);
//     setDuration(0);
//     setIsPlaying(false);
//     setPlaybackRate(1);

//     if (videoRef.current) {
//       videoRef.current.currentTime = 0;
//     }
//   }, [video]);

//   /*
//    * ==========================================
//    * PLAY / PAUSE
//    * ==========================================
//    */

//   const togglePlay = async () => {
//     const videoElement = videoRef.current;

//     if (!videoElement) return;

//     try {
//       if (videoElement.paused) {
//         await videoElement.play();
//       } else {
//         videoElement.pause();
//       }
//     } catch (error) {
//       console.error(
//         "Video playback failed:",
//         error
//       );
//     }
//   };

//   /*
//    * ==========================================
//    * TIME UPDATE
//    * ==========================================
//    */

//   const handleTimeUpdate = () => {
//     if (!videoRef.current) return;

//     setCurrentTime(
//       videoRef.current.currentTime
//     );
//   };

//   /*
//    * ==========================================
//    * SEEK
//    * ==========================================
//    */

//   const handleSeek = (event) => {
//     const value = Number(event.target.value);

//     if (!videoRef.current) return;

//     videoRef.current.currentTime = value;

//     setCurrentTime(value);
//   };

//   /*
//    * ==========================================
//    * SKIP
//    * ==========================================
//    */

//   const skip = (seconds) => {
//     if (!videoRef.current) return;

//     const newTime = Math.min(
//       Math.max(
//         videoRef.current.currentTime + seconds,
//         0
//       ),
//       duration
//     );

//     videoRef.current.currentTime = newTime;

//     setCurrentTime(newTime);
//   };

//   /*
//    * ==========================================
//    * VOLUME
//    * ==========================================
//    */

//   const handleVolume = (event) => {
//     const value = Number(event.target.value);

//     setVolume(value);

//     if (!videoRef.current) return;

//     videoRef.current.volume = value;

//     if (value === 0) {
//       videoRef.current.muted = true;
//       setIsMuted(true);
//     } else {
//       videoRef.current.muted = false;
//       setIsMuted(false);
//     }
//   };

//   /*
//    * ==========================================
//    * MUTE
//    * ==========================================
//    */

//   const toggleMute = () => {
//     if (!videoRef.current) return;

//     if (videoRef.current.muted) {
//       videoRef.current.muted = false;

//       videoRef.current.volume =
//         volume || 1;

//       setIsMuted(false);
//     } else {
//       videoRef.current.muted = true;

//       setIsMuted(true);
//     }
//   };

//   /*
//    * ==========================================
//    * PLAYBACK SPEED
//    * ==========================================
//    */

//   const changePlaybackRate = (rate) => {
//     if (!videoRef.current) return;

//     videoRef.current.playbackRate = rate;

//     setPlaybackRate(rate);

//     setShowSettings(false);
//   };

//   /*
//    * ==========================================
//    * FULLSCREEN
//    * ==========================================
//    */

//   const toggleFullscreen = async () => {
//     if (!containerRef.current) return;

//     try {
//       if (!document.fullscreenElement) {
//         await containerRef.current.requestFullscreen();
//       } else {
//         await document.exitFullscreen();
//       }
//     } catch (error) {
//       console.error(
//         "Fullscreen failed:",
//         error
//       );
//     }
//   };

//   /*
//    * ==========================================
//    * FULLSCREEN STATE
//    * ==========================================
//    */

//   const handleFullscreenChange = () => {
//     setIsFullscreen(
//       Boolean(document.fullscreenElement)
//     );
//   };

//   /*
//    * ==========================================
//    * PICTURE IN PICTURE
//    * ==========================================
//    */

//   const enterPictureInPicture = async () => {
//     const videoElement = videoRef.current;

//     if (!videoElement) return;

//     try {
//       if (document.pictureInPictureElement) {
//         await document.exitPictureInPicture();
//       } else if (
//         document.pictureInPictureEnabled
//       ) {
//         await videoElement.requestPictureInPicture();
//       }
//     } catch (error) {
//       console.error(
//         "Picture-in-Picture failed:",
//         error
//       );
//     }
//   };

//   /*
//    * ==========================================
//    * FORMAT TIME
//    * ==========================================
//    */

//   const formatTime = (seconds) => {
//     if (!Number.isFinite(seconds)) {
//       return "00:00";
//     }

//     const hours = Math.floor(
//       seconds / 3600
//     );

//     const minutes = Math.floor(
//       (seconds % 3600) / 60
//     );

//     const secs = Math.floor(seconds % 60);

//     if (hours > 0) {
//       return `${String(hours).padStart(
//         2,
//         "0"
//       )}:${String(minutes).padStart(
//         2,
//         "0"
//       )}:${String(secs).padStart(
//         2,
//         "0"
//       )}`;
//     }

//     return `${String(minutes).padStart(
//       2,
//       "0"
//     )}:${String(secs).padStart(
//       2,
//       "0"
//     )}`;
//   };

//   /*
//    * ==========================================
//    * AUTO HIDE CONTROLS
//    * ==========================================
//    */

//   const showPlayerControls = () => {
//     setShowControls(true);

//     clearTimeout(
//       controlsTimerRef.current
//     );

//     controlsTimerRef.current =
//       setTimeout(() => {
//         if (isPlaying) {
//           setShowControls(false);
//         }
//       }, 3000);
//   };

//   /*
//    * ==========================================
//    * KEYBOARD CONTROLS
//    * ==========================================
//    */

//   useEffect(() => {
//     const handleKeyboard = (event) => {
//       const tag = event.target.tagName;

//       if (
//         tag === "INPUT" ||
//         tag === "BUTTON" ||
//         tag === "SELECT"
//       ) {
//         return;
//       }

//       switch (event.key.toLowerCase()) {
//         case " ":
//         case "k":
//           event.preventDefault();
//           togglePlay();
//           break;

//         case "arrowleft":
//           skip(-10);
//           break;

//         case "arrowright":
//           skip(10);
//           break;

//         case "m":
//           toggleMute();
//           break;

//         case "f":
//           toggleFullscreen();
//           break;

//         case "p":
//           enterPictureInPicture();
//           break;

//         default:
//           break;
//       }
//     };

//     window.addEventListener(
//       "keydown",
//       handleKeyboard
//     );

//     return () => {
//       window.removeEventListener(
//         "keydown",
//         handleKeyboard
//       );
//     };
//   });

//   /*
//    * ==========================================
//    * FULLSCREEN LISTENER
//    * ==========================================
//    */

//   useEffect(() => {
//     document.addEventListener(
//       "fullscreenchange",
//       handleFullscreenChange
//     );

//     return () => {
//       document.removeEventListener(
//         "fullscreenchange",
//         handleFullscreenChange
//       );
//     };
//   }, []);

//   /*
//    * ==========================================
//    * CLEANUP
//    * ==========================================
//    */

//   useEffect(() => {
//     return () => {
//       clearTimeout(
//         controlsTimerRef.current
//       );
//     };
//   }, []);

//   /*
//    * ==========================================
//    * UI
//    * ==========================================
//    */

//   return (
//     <div className="w-full">

//       {/* ====================================
//           VIDEO PLAYER
//       ==================================== */}

//       <div
//         ref={containerRef}
//         onMouseMove={showPlayerControls}
//         onMouseLeave={() => {
//           if (isPlaying) {
//             setShowControls(false);
//           }
//         }}
//         className={`group relative mx-auto overflow-hidden bg-black ${
//           isFullscreen
//             ? "fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center"
//             : "aspect-video w-full max-w-[1400px] rounded-2xl border border-white/10 shadow-2xl"
//         }`}
//       >

//         {/* VIDEO */}

//         <video
//           ref={videoRef}
//           src={video}
//           preload="metadata"
//           playsInline
//           onLoadedMetadata={
//             handleLoadedMetadata
//           }
//           onTimeUpdate={
//             handleTimeUpdate
//           }
//           onPlay={() =>
//             setIsPlaying(true)
//           }
//           onPause={() =>
//             setIsPlaying(false)
//           }
//           onEnded={() =>
//             setIsPlaying(false)
//           }
//           onClick={togglePlay}
//           className="h-full w-full object-contain"
//         />

//         {/* ====================================
//             CENTER PLAY BUTTON
//         ==================================== */}

//         {!isPlaying && (
//           <button
//             type="button"
//             onClick={togglePlay}
//             className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-500 text-black shadow-[0_0_40px_rgba(245,158,11,0.25)] transition duration-300 hover:scale-110 hover:bg-amber-400"
//           >
//             <Play
//               size={32}
//               fill="currentColor"
//               className="ml-1"
//             />
//           </button>
//         )}

//         {/* ====================================
//             BOTTOM GRADIENT
//         ==================================== */}

//         <div
//           className={`pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 ${
//             showControls
//               ? "opacity-100"
//               : "opacity-0"
//           }`}
//         />

//         {/* ====================================
//             CONTROLS
//         ==================================== */}

//         <div
//           className={`absolute inset-x-0 bottom-0 z-20 px-4 pb-4 transition-all duration-300 sm:px-6 ${
//             showControls
//               ? "translate-y-0 opacity-100"
//               : "translate-y-3 opacity-0"
//           }`}
//         >

//           {/* PROGRESS */}

//           <input
//             type="range"
//             min="0"
//             max={duration || 0}
//             step="0.1"
//             value={currentTime}
//             onChange={handleSeek}
//             className="mb-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-white/30 accent-amber-500"
//           />

//           <div className="flex items-center justify-between gap-3">

//             {/* LEFT CONTROLS */}

//             <div className="flex items-center gap-1 sm:gap-2">

//               {/* PLAY */}

//               <button
//                 type="button"
//                 onClick={togglePlay}
//                 title={
//                   isPlaying
//                     ? "Pause"
//                     : "Play"
//                 }
//                 className="rounded-lg p-2 text-white transition hover:bg-white/10"
//               >
//                 {isPlaying ? (
//                   <Pause size={21} />
//                 ) : (
//                   <Play
//                     size={21}
//                     fill="currentColor"
//                   />
//                 )}
//               </button>

//               {/* BACK 10 */}

//               <button
//                 type="button"
//                 onClick={() =>
//                   skip(-10)
//                 }
//                 title="Back 10 seconds"
//                 className="rounded-lg p-2 text-white transition hover:bg-white/10"
//               >
//                 <RotateCcw size={20} />
//               </button>

//               {/* FORWARD 10 */}

//               <button
//                 type="button"
//                 onClick={() =>
//                   skip(10)
//                 }
//                 title="Forward 10 seconds"
//                 className="rounded-lg p-2 text-white transition hover:bg-white/10"
//               >
//                 <RotateCw size={20} />
//               </button>

//               {/* MUTE */}

//               <button
//                 type="button"
//                 onClick={toggleMute}
//                 title={
//                   isMuted
//                     ? "Unmute"
//                     : "Mute"
//                 }
//                 className="rounded-lg p-2 text-white transition hover:bg-white/10"
//               >
//                 {isMuted ||
//                 volume === 0 ? (
//                   <VolumeX size={21} />
//                 ) : (
//                   <Volume2 size={21} />
//                 )}
//               </button>

//               {/* VOLUME */}

//               <input
//                 type="range"
//                 min="0"
//                 max="1"
//                 step="0.05"
//                 value={
//                   isMuted ? 0 : volume
//                 }
//                 onChange={handleVolume}
//                 className="hidden w-20 cursor-pointer accent-amber-500 sm:block"
//               />

//               {/* TIME */}

//               <span className="ml-1 text-xs font-medium text-zinc-300 sm:text-sm">
//                 {formatTime(currentTime)}
//                 {" / "}
//                 {formatTime(duration)}
//               </span>

//             </div>

//             {/* RIGHT CONTROLS */}

//             <div className="flex items-center gap-1 sm:gap-2">

//               {/* SETTINGS */}

//               <div className="relative">

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setShowSettings(
//                       (value) => !value
//                     )
//                   }
//                   title="Playback settings"
//                   className="flex items-center gap-1 rounded-lg p-2 text-white transition hover:bg-white/10"
//                 >
//                   <Settings size={20} />

//                   <span className="hidden text-xs sm:inline">
//                     {playbackRate}x
//                   </span>
//                 </button>

//                 {showSettings && (
//                   <div className="absolute bottom-12 right-0 w-36 rounded-xl border border-white/10 bg-zinc-950 p-2 shadow-2xl">

//                     <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
//                       Speed
//                     </p>

//                     {[0.5, 0.75, 1, 1.25, 1.5, 2].map(
//                       (rate) => (
//                         <button
//                           key={rate}
//                           type="button"
//                           onClick={() =>
//                             changePlaybackRate(
//                               rate
//                             )
//                           }
//                           className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
//                             playbackRate ===
//                             rate
//                               ? "bg-amber-500 text-black"
//                               : "text-zinc-300 hover:bg-white/10 hover:text-white"
//                           }`}
//                         >
//                           {rate}x
//                         </button>
//                       )
//                     )}

//                   </div>
//                 )}

//               </div>

//               {/* PICTURE IN PICTURE */}

//               <button
//                 type="button"
//                 onClick={
//                   enterPictureInPicture
//                 }
//                 title="Picture in Picture"
//                 className="hidden rounded-lg p-2 text-white transition hover:bg-white/10 sm:block"
//               >
//                 <PictureInPicture2
//                   size={20}
//                 />
//               </button>

//               {/* FULLSCREEN */}

//               <button
//                 type="button"
//                 onClick={
//                   toggleFullscreen
//                 }
//                 title={
//                   isFullscreen
//                     ? "Exit fullscreen"
//                     : "Fullscreen"
//                 }
//                 className="rounded-lg p-2 text-white transition hover:bg-white/10"
//               >
//                 {isFullscreen ? (
//                   <Minimize size={21} />
//                 ) : (
//                   <Maximize size={21} />
//                 )}
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* ====================================
//           VIDEO INFORMATION
//       ==================================== */}

//       <div className="mx-auto mt-6 max-w-[1100px]">

//         <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500">
//           RamFlix
//         </p>

//         <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
//           {title}
//         </h1>

//       </div>

//     </div>
//   );
// };

// export default VideoPlayer;

import { useEffect, useRef, useState } from "react";

import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Settings,
  Maximize,
  Minimize,
  PictureInPicture2,
} from "lucide-react";

const VideoPlayer = ({
  video,
  title,
  playback,
  introCompleted = false,
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimerRef = useRef(null);

  /*
   * ==========================================
   * START POSITION
   * ==========================================
   *
   * Prevents the 6-second skip from happening
   * more than once.
   */

  const hasAppliedStartPosition = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(1);

  const [isMuted, setIsMuted] = useState(false);

  const [playbackRate, setPlaybackRate] = useState(1);

  const [showSettings, setShowSettings] =
    useState(false);

  const [isFullscreen, setIsFullscreen] =
    useState(false);

  const [showControls, setShowControls] =
    useState(true);

  /*
   * ==========================================
   * APPLY START POSITION
   * ==========================================
   */

  const applyStartPosition = () => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    /*
     * IMPORTANT:
     *
     * Do not skip while RamFlix intro
     * is playing.
     */

    if (!introCompleted) return;

    /*
     * Prevent applying startAt repeatedly.
     */

    if (hasAppliedStartPosition.current) {
      return;
    }

    const startAt = playback?.startAt ?? 0;

    if (
      startAt > 0 &&
      Number.isFinite(videoElement.duration) &&
      videoElement.duration > startAt
    ) {
      videoElement.currentTime = startAt;

      setCurrentTime(startAt);
    }

    hasAppliedStartPosition.current = true;
  };

  /*
   * ==========================================
   * VIDEO METADATA
   * ==========================================
   */

  const handleLoadedMetadata = () => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    setDuration(videoElement.duration);

    applyStartPosition();
  };

  /*
   * ==========================================
   * AFTER RAMFLIX INTRO
   * ==========================================
   */

  useEffect(() => {
    if (!introCompleted) {
      return;
    }

    applyStartPosition();
  }, [introCompleted, playback]);

  /*
   * ==========================================
   * RESET WHEN EPISODE CHANGES
   * ==========================================
   */

  useEffect(() => {
    hasAppliedStartPosition.current = false;

    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setPlaybackRate(1);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [video]);

  /*
   * ==========================================
   * PLAY / PAUSE
   * ==========================================
   */

  const togglePlay = async () => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    try {
      if (videoElement.paused) {
        await videoElement.play();
      } else {
        videoElement.pause();
      }
    } catch (error) {
      console.error(
        "Video playback failed:",
        error
      );
    }
  };

  /*
   * ==========================================
   * TIME UPDATE
   * ==========================================
   */

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    setCurrentTime(
      videoRef.current.currentTime
    );
  };

  /*
   * ==========================================
   * SEEK
   * ==========================================
   */

  const handleSeek = (event) => {
    const value = Number(event.target.value);

    if (!videoRef.current) return;

    videoRef.current.currentTime = value;

    setCurrentTime(value);
  };

  /*
   * ==========================================
   * SKIP
   * ==========================================
   */

  const skip = (seconds) => {
    if (!videoRef.current) return;

    const newTime = Math.min(
      Math.max(
        videoRef.current.currentTime +
          seconds,
        0
      ),
      duration
    );

    videoRef.current.currentTime = newTime;

    setCurrentTime(newTime);
  };

  /*
   * ==========================================
   * VOLUME
   * ==========================================
   */

  const handleVolume = (event) => {
    const value = Number(event.target.value);

    setVolume(value);

    if (!videoRef.current) return;

    videoRef.current.volume = value;

    if (value === 0) {
      videoRef.current.muted = true;

      setIsMuted(true);
    } else {
      videoRef.current.muted = false;

      setIsMuted(false);
    }
  };

  /*
   * ==========================================
   * MUTE
   * ==========================================
   */

  const toggleMute = () => {
    if (!videoRef.current) return;

    if (videoRef.current.muted) {
      videoRef.current.muted = false;

      videoRef.current.volume =
        volume || 1;

      setIsMuted(false);
    } else {
      videoRef.current.muted = true;

      setIsMuted(true);
    }
  };

  /*
   * ==========================================
   * PLAYBACK SPEED
   * ==========================================
   */

  const changePlaybackRate = (rate) => {
    if (!videoRef.current) return;

    videoRef.current.playbackRate = rate;

    setPlaybackRate(rate);

    setShowSettings(false);
  };

  /*
   * ==========================================
   * FULLSCREEN
   * ==========================================
   */

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error(
        "Fullscreen failed:",
        error
      );
    }
  };

  /*
   * ==========================================
   * FULLSCREEN STATE
   * ==========================================
   */

  const handleFullscreenChange = () => {
    setIsFullscreen(
      Boolean(document.fullscreenElement)
    );
  };

  /*
   * ==========================================
   * PICTURE IN PICTURE
   * ==========================================
   */

  const enterPictureInPicture = async () => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (
        document.pictureInPictureEnabled
      ) {
        await videoElement.requestPictureInPicture();
      }
    } catch (error) {
      console.error(
        "Picture-in-Picture failed:",
        error
      );
    }
  };

  /*
   * ==========================================
   * FORMAT TIME
   * ==========================================
   */

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) {
      return "00:00";
    }

    const hours = Math.floor(
      seconds / 3600
    );

    const minutes = Math.floor(
      (seconds % 3600) / 60
    );

    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${String(hours).padStart(
        2,
        "0"
      )}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(secs).padStart(
        2,
        "0"
      )}`;
    }

    return `${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  /*
   * ==========================================
   * AUTO HIDE CONTROLS
   * ==========================================
   */

  const showPlayerControls = () => {
    setShowControls(true);

    clearTimeout(
      controlsTimerRef.current
    );

    controlsTimerRef.current =
      setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
  };

  /*
   * ==========================================
   * KEYBOARD CONTROLS
   * ==========================================
   */

  useEffect(() => {
    const handleKeyboard = (event) => {
      const tag = event.target.tagName;

      if (
        tag === "INPUT" ||
        tag === "BUTTON" ||
        tag === "SELECT"
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case " ":
        case "k":
          event.preventDefault();
          togglePlay();
          break;

        case "arrowleft":
          skip(-10);
          break;

        case "arrowright":
          skip(10);
          break;

        case "m":
          toggleMute();
          break;

        case "f":
          toggleFullscreen();
          break;

        case "p":
          enterPictureInPicture();
          break;

        default:
          break;
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  });

  /*
   * ==========================================
   * FULLSCREEN LISTENER
   * ==========================================
   */

  useEffect(() => {
    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  /*
   * ==========================================
   * CLEANUP
   * ==========================================
   */

  useEffect(() => {
    return () => {
      clearTimeout(
        controlsTimerRef.current
      );
    };
  }, []);

  /*
   * ==========================================
   * RENDER
   * ==========================================
   */

  return (
    <div className="w-full">

      {/* ======================================
          VIDEO PLAYER
      ====================================== */}

      <div
        ref={containerRef}
        onMouseMove={showPlayerControls}
        onMouseLeave={() => {
          if (isPlaying) {
            setShowControls(false);
          }
        }}
        className={`group relative mx-auto overflow-hidden bg-black ${
          isFullscreen
            ? "fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center"
            : "aspect-video w-full max-w-[1400px] rounded-2xl border border-white/10 shadow-2xl"
        }`}
      >

        {/* ====================================
            VIDEO
        ==================================== */}

        <video
          ref={videoRef}
          src={video}
          preload="metadata"
          playsInline
          onLoadedMetadata={
            handleLoadedMetadata
          }
          onTimeUpdate={
            handleTimeUpdate
          }
          onPlay={() =>
            setIsPlaying(true)
          }
          onPause={() =>
            setIsPlaying(false)
          }
          onEnded={() =>
            setIsPlaying(false)
          }
          onClick={togglePlay}
          className="h-full w-full object-contain"
        />

        {/* ====================================
            RAMFLIX LOGO OVERLAY
        ====================================

            This sits over the original
            broadcaster logo.

            It uses your:

            /images/logo.png
        ==================================== */}

       {/* ====================================
    RAMFLIX BRAND OVERLAY
    Covers original Jaya TV logo
==================================== */}

<div
  className="
    pointer-events-none
    absolute

    left-[20%]
    bottom-[17%]

    z-10

    flex
    h-[12%]
    w-[15%]

    min-h-[55px]
    min-w-[90px]

    max-h-[100px]
    max-w-[170px]

    items-center
    justify-center

    overflow-hidden

    rounded-full

    border
    border-amber-500/20

    bg-black/90

    shadow-[0_5px_25px_rgba(0,0,0,0.8)]

    backdrop-blur-sm
  "
>
  <img
    src="/images/logo.png"
    alt="RamFlix"
    className="
      h-[50%]
      w-[80%]
      object-contain
      opacity-95
      drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
    "
  />
</div>

        {/* ====================================
            SOFT RAMFLIX GLOW
        ==================================== */}

        <div
          className="
            pointer-events-none
            absolute

            left-[12%]
            top-[5%]

            z-[9]

            h-[18%]
            w-[18%]

            min-h-[90px]
            min-w-[145px]

            max-h-[170px]
            max-w-[260px]

            rounded-[50%]

            bg-black/20

            blur-2xl
          "
        />

        {/* ====================================
            CENTER PLAY BUTTON
        ==================================== */}

        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            className="
              absolute
              left-1/2
              top-1/2

              z-30

              flex
              h-20
              w-20

              -translate-x-1/2
              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              bg-amber-500

              text-black

              shadow-[0_0_45px_rgba(245,158,11,0.3)]

              transition-all
              duration-300

              hover:scale-110
              hover:bg-amber-400

              active:scale-95
            "
          >
            <Play
              size={32}
              fill="currentColor"
              className="ml-1"
            />
          </button>
        )}

        {/* ====================================
            BOTTOM GRADIENT
        ==================================== */}

        <div
          className={`
            pointer-events-none

            absolute
            inset-x-0
            bottom-0

            z-[11]

            h-40

            bg-gradient-to-t
            from-black/95
            via-black/60
            to-transparent

            transition-opacity
            duration-300

            ${
              showControls
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* ====================================
            CONTROLS
        ==================================== */}

        <div
          className={`
            absolute
            inset-x-0
            bottom-0

            z-20

            px-4
            pb-4

            transition-all
            duration-300

            ${
              showControls
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }

            sm:px-6
          `}
        >

          {/* ==================================
              PROGRESS BAR
          ================================== */}

          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="
              mb-3
              h-1
              w-full

              cursor-pointer

              appearance-none

              rounded-full

              bg-white/30

              accent-amber-500
            "
          />

          <div className="flex items-center justify-between gap-3">

            {/* ==================================
                LEFT CONTROLS
            ================================== */}

            <div className="flex items-center gap-1 sm:gap-2">

              {/* PLAY / PAUSE */}

              <button
                type="button"
                onClick={togglePlay}
                title={
                  isPlaying
                    ? "Pause"
                    : "Play"
                }
                className="
                  rounded-lg
                  p-2

                  text-white

                  transition

                  hover:bg-white/10
                "
              >
                {isPlaying ? (
                  <Pause size={21} />
                ) : (
                  <Play
                    size={21}
                    fill="currentColor"
                  />
                )}
              </button>

              {/* BACK 10 */}

              <button
                type="button"
                onClick={() =>
                  skip(-10)
                }
                title="Back 10 seconds"
                className="
                  rounded-lg
                  p-2

                  text-white

                  transition

                  hover:bg-white/10
                "
              >
                <RotateCcw size={20} />
              </button>

              {/* FORWARD 10 */}

              <button
                type="button"
                onClick={() =>
                  skip(10)
                }
                title="Forward 10 seconds"
                className="
                  rounded-lg
                  p-2

                  text-white

                  transition

                  hover:bg-white/10
                "
              >
                <RotateCw size={20} />
              </button>

              {/* MUTE */}

              <button
                type="button"
                onClick={toggleMute}
                title={
                  isMuted
                    ? "Unmute"
                    : "Mute"
                }
                className="
                  rounded-lg
                  p-2

                  text-white

                  transition

                  hover:bg-white/10
                "
              >
                {isMuted ||
                volume === 0 ? (
                  <VolumeX size={21} />
                ) : (
                  <Volume2 size={21} />
                )}
              </button>

              {/* VOLUME */}

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={
                  isMuted ? 0 : volume
                }
                onChange={handleVolume}
                className="
                  hidden
                  w-20

                  cursor-pointer

                  accent-amber-500

                  sm:block
                "
              />

              {/* TIME */}

              <span
                className="
                  ml-1

                  text-xs
                  font-medium

                  text-zinc-300

                  sm:text-sm
                "
              >
                {formatTime(currentTime)}

                {" / "}

                {formatTime(duration)}
              </span>

            </div>

            {/* ==================================
                RIGHT CONTROLS
            ================================== */}

            <div className="flex items-center gap-1 sm:gap-2">

              {/* SETTINGS */}

              <div className="relative">

                <button
                  type="button"
                  onClick={() =>
                    setShowSettings(
                      (value) => !value
                    )
                  }
                  title="Playback settings"
                  className="
                    flex
                    items-center
                    gap-1

                    rounded-lg
                    p-2

                    text-white

                    transition

                    hover:bg-white/10
                  "
                >
                  <Settings size={20} />

                  <span
                    className="
                      hidden
                      text-xs
                      sm:inline
                    "
                  >
                    {playbackRate}x
                  </span>
                </button>

                {/* SPEED MENU */}

                {showSettings && (
                  <div
                    className="
                      absolute
                      bottom-12
                      right-0

                      w-36

                      rounded-xl

                      border
                      border-white/10

                      bg-zinc-950

                      p-2

                      shadow-2xl
                    "
                  >

                    <p
                      className="
                        px-3
                        py-2

                        text-xs
                        font-semibold

                        uppercase
                        tracking-wider

                        text-zinc-500
                      "
                    >
                      Speed
                    </p>

                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map(
                      (rate) => (
                        <button
                          key={rate}
                          type="button"
                          onClick={() =>
                            changePlaybackRate(
                              rate
                            )
                          }
                          className={`
                            w-full

                            rounded-lg

                            px-3
                            py-2

                            text-left
                            text-sm

                            transition

                            ${
                              playbackRate ===
                              rate
                                ? "bg-amber-500 text-black"
                                : "text-zinc-300 hover:bg-white/10 hover:text-white"
                            }
                          `}
                        >
                          {rate}x
                        </button>
                      )
                    )}

                  </div>
                )}

              </div>

              {/* PICTURE IN PICTURE */}

              <button
                type="button"
                onClick={
                  enterPictureInPicture
                }
                title="Picture in Picture"
                className="
                  hidden

                  rounded-lg
                  p-2

                  text-white

                  transition

                  hover:bg-white/10

                  sm:block
                "
              >
                <PictureInPicture2
                  size={20}
                />
              </button>

              {/* FULLSCREEN */}

              <button
                type="button"
                onClick={
                  toggleFullscreen
                }
                title={
                  isFullscreen
                    ? "Exit fullscreen"
                    : "Fullscreen"
                }
                className="
                  rounded-lg
                  p-2

                  text-white

                  transition

                  hover:bg-white/10
                "
              >
                {isFullscreen ? (
                  <Minimize size={21} />
                ) : (
                  <Maximize size={21} />
                )}
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================
          VIDEO INFORMATION
      ====================================== */}

      <div
        className="
          mx-auto
          mt-6
          max-w-[1100px]
        "
      >

        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
            text-amber-500
          "
        >
          RamFlix
        </p>

        <h1
          className="
            mt-2

            text-2xl
            font-bold

            text-white

            sm:text-3xl
          "
        >
          {title}
        </h1>

      </div>

    </div>
  );
};

export default VideoPlayer;