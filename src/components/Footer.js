import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section id="footer" className="text-black text-center p-5">
      <p>© {year} Indiana Santana</p>
    </section>
  );
}
