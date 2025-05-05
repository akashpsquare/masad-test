export interface ISvgProp {
  width?: string;
  height?: string;
  color?: string;
}

export const HeartIcon = ({
  width = "30",
  height = "26",
  color = "white",
}: ISvgProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.89 17.951C30.1576 11.2717 28.7346 4.64678 24.9504 2.32554C21.3749 0.132305 18.2542 1.01615 16.3795 2.42402L15.0001 3.45545M24.89 17.951C23.6257 19.5542 21.976 21.1605 19.881 22.7111C17.8194 24.237 16.7886 25 15.0003 25C13.2121 25 12.1813 24.237 10.1197 22.7111C-0.704048 14.6998 0.35775 5.20391 5.05024 2.32554C8.62577 0.132305 11.7465 1.01615 13.6212 2.42402L15.0001 3.45545M24.89 17.951L17.5231 9.59306C17.2215 9.25094 16.7167 9.17729 16.3299 9.41899L13.4151 11.2408C12.3894 11.8818 11.0581 11.7376 10.1935 10.8916C9.05149 9.77416 9.16671 7.90358 10.4373 6.93474L15.0001 3.45545"
        stroke={color}
        stroke-opacity="0.87"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const BenefitsAddIcon = ({
  width = "30",
  height = "26",
  color = "white",
}: ISvgProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="51"
        height="51"
        rx="25.5"
        fill="url(#paint0_linear_654_2921)"
        fill-opacity="0.2"
      />
      <rect
        x="0.5"
        y="0.5"
        width="51"
        height="51"
        rx="25.5"
        stroke="url(#paint1_linear_654_2921)"
      />
      <path
        d="M22.1923 13.3334C18.6496 13.4144 16.5803 13.7528 15.1665 15.1666C13.7527 16.5804 13.4143 18.6497 13.3333 22.1924M29.8076 13.3334C33.3503 13.4144 35.4195 13.7528 36.8333 15.1666C38.2472 16.5804 38.5856 18.6497 38.6666 22.1924M29.8076 38.6667C33.3503 38.5857 35.4195 38.2473 36.8333 36.8335C38.2472 35.4196 38.5856 33.3504 38.6666 29.8077M22.1923 38.6667C18.6496 38.5857 16.5803 38.2473 15.1665 36.8335C13.7527 35.4196 13.4143 33.3504 13.3333 29.8077"
        stroke="#4B180F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.6662 20.6667H20.6782"
        stroke="#4B180F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.333 31.3334H31.345"
        stroke="#4B180F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.6665 31.3334L31.3332 20.6667"
        stroke="#4B180F"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_654_2921"
          x1="26"
          y1="0"
          x2="26"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#80291A" />
          <stop offset="1" stop-color="#2B0E08" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_654_2921"
          x1="22.5101"
          y1="4.58562e-07"
          x2="37.701"
          y2="50.5821"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#80291A" />
          <stop offset="1" stop-color="#2B0E08" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const CrossIcon = ({
  width = "12",
  height = "12",
  color = "white",
}: ISvgProp) => {
  console.log(color);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L6 6M6 6L1 11M6 6L1 1M6 6L11 11"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CrossButtonWithIcon = ({
  width = "12",
  height = "12",
  color = "white",
}: ISvgProp) => {
  console.log(color);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_722_11708)">
        <rect
          x="9"
          y="8"
          width="42"
          height="42"
          rx="21"
          fill="white"
          fill-opacity="0.28"
          shape-rendering="crispEdges"
        />
        <rect
          x="9.9"
          y="8.9"
          width="40.2"
          height="40.2"
          rx="20.1"
          stroke="url(#paint0_linear_722_11708)"
          stroke-width="1.8"
          shape-rendering="crispEdges"
        />
        <path
          d="M35 24L30 29M30 29L25 34M30 29L25 24M30 29L35 34"
          stroke="#4B180F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_722_11708"
          x="-51"
          y="-52"
          width="162"
          height="162"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_722_11708"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_722_11708"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_722_11708"
          x1="27.1812"
          y1="8"
          x2="39.4508"
          y2="48.8548"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#80291A" />
          <stop offset="1" stop-color="#2B0E08" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const DeleteIcon = ({
  width = "12",
  height = "12",
  color = "white",
}: ISvgProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 2.75L9.44014 7.76255C9.36097 9.04322 9.32138 9.68356 9.00038 10.1439C8.84167 10.3715 8.63733 10.5636 8.40035 10.708C7.92106 11 7.27949 11 5.99637 11C4.71156 11 4.06915 11 3.58953 10.7075C3.3524 10.5628 3.148 10.3704 2.98934 10.1424C2.66844 9.6813 2.62973 9.04006 2.5523 7.75758L2.25 2.75"
        stroke={color}
        stroke-linecap="round"
      />
      <path
        d="M1.5 2.75H10.5M8.02786 2.75L7.68653 2.04586C7.45979 1.57813 7.34642 1.34426 7.15086 1.1984C7.10748 1.16605 7.06155 1.13727 7.01351 1.11235C6.79696 1 6.53706 1 6.01726 1C5.48441 1 5.21799 1 4.99784 1.11706C4.94905 1.143 4.90249 1.17295 4.85865 1.20658C4.66082 1.35835 4.55031 1.60078 4.3293 2.08563L4.02646 2.75"
        stroke="#4B180F"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const UndoIcon = ({
  width = "12",
  height = "12",
  color = "white",
}: ISvgProp) => {
  console.log(color);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 9H7.75C8.99264 9 10 7.99264 10 6.75C10 5.50736 8.99264 4.5 7.75 4.5L2 4.5"
        stroke={color}
        stroke-opacity="0.87"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.49999 6C3.49999 6 2 4.89527 2 4.49999C2 4.10471 3.5 3 3.5 3"
        stroke={color}
        stroke-opacity="0.87"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
