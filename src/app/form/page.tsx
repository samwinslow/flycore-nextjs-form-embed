"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.renderFlycore?.();
    }
  }, [])
  return (
    <div>
      <Script src="http://localhost:3000/custom_forms/formbuilder_spa.js" />
      <div id="flycore-custom-form" data-key-id="cm1rr8ph40001nht70e8gtwiq"></div>
    </div>
  );
}