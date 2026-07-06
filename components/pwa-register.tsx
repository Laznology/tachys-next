"use client";

import { useEffect } from "react";

export const PwaRegister = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", async () => {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js");
          console.log("SW registered:", registration);
        } catch (registrationError) {
          console.log("SW registration failed:", registrationError);
        }
      });
    }
  }, []);

  return null;
};
