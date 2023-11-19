import React, { useState, useEffect } from "react";
import LaftMenu from "../components/LaftMenu";
import ChatDetail from "../components/ChatDetail";
import LoadingScreen from "../components/LoadingScreen";
// import Contact from "../components/Contact";

function WhatsApp() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 8;
        setProgress(progress + increment);
      }
    }, 200);

    return () => clearTimeout(id);
  }, [progress]);

  return (
    <>
      {loading ? (
        <LoadingScreen progress={progress} />
      ) : (
        // main app container
        <div className="w-screen h-screen overflow-hidden">
          {/* 2 components cointainer */}
          <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">
            {/* LeftMenu */}
            <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-100 h-100">
              <LaftMenu />
            </div>

            {/* ChatDetail */}
            <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100">
              <ChatDetail />
            </div>

            {/* Contact */}
            {/* <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-100 h-100">
              <Contact />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsApp;
