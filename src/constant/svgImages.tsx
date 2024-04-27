
export function USERICON({ color }: { color: "white" | "orange" }) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={
          color === "orange"
            ? "#E25319"
            : color === "white"
            ? "#FFFFFF"
            : "#FFFFFF"
        }
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="12"
          cy="17.5"
          rx="7"
          ry="3.5"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="7" r="4" stroke-width="1.5" stroke-linejoin="round" />
      </svg>
    );
  }
  export function BREAFCASE({ color }: { color: "white" | "orange" }) {
    const strokeColor = color === "white" ? "#000000" : "#000000";
  
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={color === "white" ? "#FFFFFF" : "#E25319"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          stroke={strokeColor}
        />
        <path
          d="M14 12.1602V13.1602C14 13.1702 14 13.1702 14 13.1802C14 14.2702 13.99 15.1602 12 15.1602C10.02 15.1602 10 14.2802 10 13.1902V12.1602C10 11.1602 10 11.1602 11 11.1602H13C14 11.1602 14 11.1602 14 12.1602Z"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={strokeColor}
        />
      </svg>
    );
  }
  
  export function DOCUMENT({ color }: { color: "white" | "orange" }) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={
          color === "orange"
            ? "#E25319"
            : color === "white"
            ? "#FFFFFF"
            : "#FFFFFF"
        }
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 2C4.79086 2 3 3.79086 3 6V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V7.65685C21 6.59599 20.5786 5.57857 19.8284 4.82843L18.1716 3.17157C17.4214 2.42143 16.404 2 15.3431 2H7ZM8 6.25C7.58579 6.25 7.25 6.58579 7.25 7C7.25 7.41421 7.58579 7.75 8 7.75H16C16.4142 7.75 16.75 7.41421 16.75 7C16.75 6.58579 16.4142 6.25 16 6.25H8ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H12C12.4142 17.75 12.75 17.4142 12.75 17C12.75 16.5858 12.4142 16.25 12 16.25H8Z"
          fill={color}
        />
      </svg>
    );
  }
  
  export function LOCK({ color }: { color: "white" | "orange" }) {
    const strokeColor = color === "white" ? "#E25319" : "#FFFFFF";
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={
          color === "orange"
            ? "#E25319"
            : color === "white"
            ? "#FFFFFF"
            : "#FFFFFF"
        }
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8H8M16 8C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12C4 9.79086 5.79086 8 8 8M16 8V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V8M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z"
          stroke={strokeColor}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  