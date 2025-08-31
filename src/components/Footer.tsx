// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-[#191F33] text-white mt-12">
      <div className="text-center py-12">
        <a className="flex justify-center items-center gap-4 mb-4" href="/">
          <img src="https://baitussalam.org/images/logo-2.svg" width="50" alt="Logo" />
          <span className="text-3xl font-semibold">Bait-us-Salam</span>
        </a>
        <p className="text-lg font-medium">Shop Today!</p>
      </div>
      <div className="bg-[#2E3447] text-center py-3">
        <span className="text-[#767E94]">
          Coded with 💙 by{" "}
          <a href="https://www.linkedin.com/in/abdulbasitprofile/" className="text-white" target="_blank">
            Abdul Basit
          </a>{" "}
          in Karachi
        </span>
      </div>
    </footer>
  );
};

export default Footer;
