import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-primary">
      <div className="container mx-auto">
      <p className="mb-4">&copy; {currentYear} @AzeezF. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;