function Logo() {
  return (
    <>
      <div className="logo">
        <span role="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="32"
            height="32"
          >
            <path
              d="M16 20L48 20L44 56L20 56Z"
              fill="#FFD54F"
              stroke="#E65100"
              strokeWidth="2"
            />
            <path
              d="M22 20L26 56M32 20L34 56M42 20L38 56"
              stroke="#E65100"
              strokeWidth="2"
            />
            <circle cx="22" cy="16" r="5" fill="#FFF9C4" stroke="#E6D37B" />
            <circle cx="30" cy="14" r="6" fill="#FFF9C4" stroke="#E6D37B" />
            <circle cx="38" cy="15" r="5" fill="#FFF9C4" stroke="#E6D37B" />
            <circle cx="46" cy="16" r="4" fill="#FFF9C4" stroke="#E6D37B" />
          </svg>
        </span>
        <h1>usePopcorn</h1>
      </div>
    </>
  );
}
export default Logo;
