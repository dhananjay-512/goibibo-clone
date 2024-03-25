import * as React from "react";
const Hotel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <path fill="#969696" d="M7.58 49.769h9.353V28.225l-9.354-.038V49.77Z" />
    <path
      fill="url(#a)"
      d="M42.237 16.938h9.372c.525 0 .937.412.937.937v31.894H42.237V16.938Z"
    />
    <path fill="#969696" d="m17.889 49.75 6.56.019V11.313l-6.56.037v38.4Z" />
    <path fill="url(#b)" d="M20.7 28.188h-7.497V49.75H20.7V28.187Z" />
    <path
      fill="url(#c)"
      d="M24.449 11.313v38.456h20.618V12.25a.928.928 0 0 0-.937-.938H24.45Z"
    />
    <path
      fill="url(#d)"
      d="M49.735 29.125h-4.686v-2.813h4.686v2.813Zm0-8.438h-4.686V23.5h4.686v-2.813Zm0 11.25h-4.686v2.813h4.686v-2.813Zm0 5.625h-4.686v2.813h4.686v-2.813Zm0 5.626h-4.686V46h4.686v-2.813Zm-27.18-11.25h-7.497v2.812h7.498v-2.813Zm0 5.625h-7.497v2.812h7.498v-2.813Zm0 5.624h-7.497V46h7.498v-2.813Zm19.682-28.124H27.242v2.812h14.995v-2.813Zm0 5.624H27.242V23.5h14.995v-2.813Zm0 5.625H27.242v2.813h14.995v-2.813Z"
    />
    <path
      fill="#FF6400"
      d="M42.237 31.956H27.242v2.813h14.995v-2.813ZM24.43 8.5h-3.749v12.188h3.749V8.5Z"
    />
    <path
      fill="#666"
      d="M20.681 8.5h-.937v12.188h.937V8.5ZM9.435 25.375h-.937v12.188h.937V25.374Z"
    />
    <path fill="#FF6400" d="M13.202 25.375H9.454v12.188h3.748V25.374Z" />
    <path fill="url(#e)" d="M37.551 37.563h-5.623V49.75h5.623V37.562Z" />
    <path
      fill="url(#f)"
      d="M31.928 37.563V49.75h-4.686V39.419c0-1.031.768-1.856 1.706-1.856h2.98Zm8.604 0h-2.98V49.75h4.685V39.419c0-1.031-.75-1.856-1.706-1.856Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={47.392}
        x2={47.392}
        y1={49.469}
        y2={16.938}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#D9D9D9" />
        <stop offset={0.67} stopColor="#E0E0E0" />
        <stop offset={0.95} stopColor="#E6E6E6" />
        <stop offset={0.97} stopColor="#E3E3E3" />
        <stop offset={0.98} stopColor="#DADADA" />
        <stop offset={0.99} stopColor="#CACACA" />
        <stop offset={1} stopColor="#B3B3B3" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={16.951}
        x2={16.951}
        y1={49.675}
        y2={28.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.07} stopColor="#E6E6E6" />
        <stop offset={0.27} stopColor="#F2F2F2" />
        <stop offset={0.76} stopColor="#EAEAEA" />
        <stop offset={0.95} stopColor="#E6E6E6" />
        <stop offset={1} stopColor="#B3B3B3" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={34.758}
        x2={34.758}
        y1={50.013}
        y2={11.144}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.05} stopColor="#E6E6E6" />
        <stop offset={0.3} stopColor="#F2F2F2" />
        <stop offset={0.76} stopColor="#EAEAEA" />
        <stop offset={0.95} stopColor="#E6E6E6" />
        <stop offset={1} stopColor="#B3B3B3" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={32.396}
        x2={32.396}
        y1={15.119}
        y2={49.469}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C4C4C4" />
        <stop offset={1} stopColor="#4D4D4D" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={34.739}
        x2={34.739}
        y1={37.487}
        y2={49.431}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#666" />
        <stop offset={1} stopColor="#333" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={34.739}
        x2={34.739}
        y1={49.788}
        y2={36.962}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#999" />
        <stop offset={0.53} stopColor="#B3B3B3" />
        <stop offset={0.65} stopColor="#ABABAB" />
        <stop offset={0.84} stopColor="#979797" />
        <stop offset={1} stopColor="gray" />
      </linearGradient>
    </defs>
  </svg>
);
export default Hotel;
