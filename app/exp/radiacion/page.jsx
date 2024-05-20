"use client";
import React, { useState, useEffect, useCallback, mergeInto } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { createClient } from "@supabase/supabase-js";

//import useLogAction from "hooks/use-logAction";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function UnityApp() {
  const awsUrl = "https://ust-mediciones-sp2.s3.sa-east-1.amazonaws.com";
  //ingresar aqui el nombre de la Build.
  const buildName ="UST_RadiacionIonizanteQA"

 
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    sendMessage,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: `${awsUrl}/${buildName}/Build/${buildName}.loader.js`,
    dataUrl: `${awsUrl}/${buildName}/Build/${buildName}.data`,
    frameworkUrl: `${awsUrl}/${buildName}/Build/${buildName}.framework.js`,
    codeUrl: `${awsUrl}/${buildName}/Build/${buildName}.wasm`,
  });

  //////// Session variables
  const [userSession, setUserSession] = useState(null);
  const [email, setEmail] = useState(null);
  
  //const logAction = useLogAction();
  
  
  //////// Loading Progression
  const loadingPercentage = Math.round(loadingProgression * 100);

  /// DETECT DOWNLOAD  ///////////////////////
//   useEffect(() => {
//     if (isLoaded) {
//       console.log("Unity has finished loading.");
//       // Call the log action or any other function related to the loading completion.
//       if (email) {
//         logAction(email, "Metaverse_Finish_Download");
//       }
//     }
//   }, [isLoaded, email, logAction]);

  //// USER SESSION ///////////////////////////////

  //// Check if User is Logged In

//   useEffect(() => {
//     const checkUserSession = async () => {
//       const userData = (await supabase.auth.getUser()).data.user;

//       if (userData) {
//         // Call your function here when there is a user
//         // yourFunctionToCallWhenUserExists();
//         console.log("user logged in:", userData.id);
//         console.log("user email:", userData.email);

//         setUserSession(userData.user);
//         setEmail(userData.email);
//         logAction(userData.email, "Metaverse_Start_Download");
//       } else {
//         console.log(`No user session found`);
//       }
//     };

//     checkUserSession();
//   }, []);

  //// DETECT DISCONNECTION ///////////////////////////////
//   useEffect(() => {
//     function handleUnload() {
//       // Perform the log action here
//       if (email) {
//         logAction(email, "Logout");
//       }
//     }
  
//     window.addEventListener('unload', handleUnload);
  
//     return () => {
//       window.removeEventListener('unload', handleUnload);
//     };
//   }, [email, logAction]);
  

  /// SET UNITY SIZE BASED ON WINDOW ///////////////////////
  const [unitySize, setUnitySize] = useState({ width: 1280, height: 720 });
  useEffect(() => {
    if (typeof window !== "undefined") {
      function updateUnitySize() {
        const aspectRatio = 16 / 9; // Change this to your desired aspect ratio

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let newWidth, newHeight;

        if (windowWidth / windowHeight < aspectRatio) {
          // If the window is narrower than the aspect ratio, use the window's width
          newWidth = windowWidth;
          newHeight = windowWidth / aspectRatio;
        } else {
          // If the window is wider than the aspect ratio, use the window's height
          newHeight = windowHeight;
          newWidth = windowHeight * aspectRatio;
        }

        setUnitySize({ width: newWidth, height: newHeight });
      }

      // Listen for window resize events and update Unity size accordingly
      window.addEventListener("resize", updateUnitySize);
      updateUnitySize(); // Set initial Unity size

      return () => {
        window.removeEventListener("resize", updateUnitySize);
      };
    }
  }, []);

  function handleUnityRequest() {
    sendMessage("SessionActivator", "Activate", email);
  }

  useEffect(() => {
    console.log("Unity Requesting event: email");
    addEventListener("ActivateSession", handleUnityRequest);
    return () => {
      removeEventListener("ActivateSession", handleUnityRequest);
    };
  }, [addEventListener, removeEventListener, handleUnityRequest]);

  /////////////// PIXEL RATIO DETECTION ///////////////////////
  // We'll use a state to store the device pixel ratio.
  //   if (typeof window !== "undefined") {
  //     const [devicePixelRatio, setDevicePixelRatio] = useState(
  //       window.devicePixelRatio
  //     );
  //   }

  //   useEffect(
  //     function () {
  //       if (typeof window !== "undefined") {
  //         // A function which will update the device pixel ratio of the Unity
  //         // Application to match the device pixel ratio of the browser.
  //         const updateDevicePixelRatio = function () {
  //           setDevicePixelRatio(window.devicePixelRatio);
  //         };
  //         // A media matcher which watches for changes in the device pixel ratio.
  //         const mediaMatcher = window.matchMedia(
  //           `screen and (resolution: ${devicePixelRatio}dppx)`
  //         );
  //         // Adding an event listener to the media matcher which will update the
  //         // device pixel ratio of the Unity Application when the device pixel
  //         // ratio changes.
  //         mediaMatcher.addEventListener("change", updateDevicePixelRatio);
  //         return function () {
  //           // Removing the event listener when the component unmounts.
  //           mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
  //           console.log("devicePixelRatio", devicePixelRatio);
  //         };
  //       }
  //     },
  //     [devicePixelRatio]
  //   );

  return (
    <div className="w-full flex flex-col  h-screen justify-center items-center ">
     
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay  flex items-center  text-black">
          <p>Cargando ... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={unitySize}
        // devicePixelRatio={devicePixelRatio}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Your other content */}
      <UnityApp />
    </div>
  );
}