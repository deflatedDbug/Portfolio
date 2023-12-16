import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-400">
      <small className="mb-2 block text-xs">
        &copy; 2024 Subin Lebow. All rights reserved.
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> {" "}
          Built with React & Next.js, Typescript, Tailwind CSS, Framer Motion,
          React Email & Resend.
        </p>
      </small>
    </footer>
  );
}
