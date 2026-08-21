function Header() {
  return (
    <header className="text-center">
      <h1
        className="bg-gradient-to-b from-[#B9FFF7] via-[#4DE8DC] to-[#14B8B0] bg-clip-text font-serif text-4xl font-bold tracking-tight text-transparent md:text-5xl"
        style={{ textShadow: "0 0 30px rgba(34,211,200,0.25)" }}
      >
        Meeting Summarizer
      </h1>

      <svg
        className="mx-auto mt-5 h-6 w-72"
        viewBox="0 0 300 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="12" r="2" fill="#22D3C8" />
        <path
          d="M14 12c10-8 20 8 30 0s20-8 30 0 20 8 30 0"
          stroke="#22D3C8"
          strokeWidth="1"
          opacity="0.8"
        />
        <path
          d="M104 12c8-6 18 6 24 0"
          stroke="#22D3C8"
          strokeWidth="1"
          opacity="0.5"
        />
        <g transform="translate(150,12)">
          <path
            d="M0 -6 L2 -2 L6 0 L2 2 L0 6 L-2 2 L-6 0 L-2 -2 Z"
            fill="#2DEEDF"
          />
        </g>
        <path
          d="M172 12c6-6 16 6 24 0"
          stroke="#22D3C8"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M196 12c10-8 20 8 30 0s20-8 30 0 20 8 30 0"
          stroke="#22D3C8"
          strokeWidth="1"
          opacity="0.8"
        />
        <circle cx="296" cy="12" r="2" fill="#22D3C8" />
      </svg>
    </header>
  );
}

export default Header;
