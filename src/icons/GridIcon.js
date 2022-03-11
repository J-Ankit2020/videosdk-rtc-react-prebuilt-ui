import * as React from "react";

const GridIcon = ({ props, fillColor, strokeColor }) => (
  <svg
    width={92}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.75}
      y={0.75}
      width={90.5}
      height={54.5}
      rx={5.25}
      stroke={strokeColor}
      strokeWidth={1.5}
    />
    <rect x={6} y={6} width={24} height={20} rx={2} fill={fillColor} />
    <rect x={6} y={30} width={24} height={20} rx={2} fill={fillColor} />
    <rect x={34} y={6} width={24} height={20} rx={2} fill={fillColor} />
    <rect x={34} y={30} width={24} height={20} rx={2} fill={fillColor} />
    <rect x={62} y={6} width={24} height={20} rx={2} fill={fillColor} />
    <rect x={62} y={30} width={24} height={20} rx={2} fill={fillColor} />
    <path
      d="M15 18.222v1.334c0 .245.196.444.438.444h6.124a.441.441 0 0 0 .438-.444v-1.334c0-.982-.784-1.778-1.75-1.778h-3.5c-.966 0-1.75.796-1.75 1.778Zm5.25-4.444c0 .982-.784 1.778-1.75 1.778s-1.75-.796-1.75-1.778S17.534 12 18.5 12s1.75.796 1.75 1.778ZM15 42.222v1.334c0 .245.196.444.438.444h6.124a.441.441 0 0 0 .438-.444v-1.334c0-.982-.784-1.778-1.75-1.778h-3.5c-.966 0-1.75.796-1.75 1.778Zm5.25-4.444c0 .982-.784 1.778-1.75 1.778s-1.75-.796-1.75-1.778S17.534 36 18.5 36s1.75.796 1.75 1.778ZM43 18.222v1.334c0 .245.196.444.438.444h6.124a.441.441 0 0 0 .438-.444v-1.334c0-.982-.783-1.778-1.75-1.778h-3.5c-.967 0-1.75.796-1.75 1.778Zm5.25-4.444c0 .982-.783 1.778-1.75 1.778s-1.75-.796-1.75-1.778S45.533 12 46.5 12s1.75.796 1.75 1.778ZM43 42.222v1.334c0 .245.196.444.438.444h6.124a.441.441 0 0 0 .438-.444v-1.334c0-.982-.783-1.778-1.75-1.778h-3.5c-.967 0-1.75.796-1.75 1.778Zm5.25-4.444c0 .982-.783 1.778-1.75 1.778s-1.75-.796-1.75-1.778S45.533 36 46.5 36s1.75.796 1.75 1.778ZM71 18.222v1.334c0 .245.196.444.438.444h6.124a.441.441 0 0 0 .438-.444v-1.334c0-.982-.784-1.778-1.75-1.778h-3.5c-.966 0-1.75.796-1.75 1.778Zm5.25-4.444c0 .982-.784 1.778-1.75 1.778s-1.75-.796-1.75-1.778S73.534 12 74.5 12s1.75.796 1.75 1.778ZM71 42.222v1.334c0 .245.196.444.438.444h6.124a.441.441 0 0 0 .438-.444v-1.334c0-.982-.784-1.778-1.75-1.778h-3.5c-.966 0-1.75.796-1.75 1.778Zm5.25-4.444c0 .982-.784 1.778-1.75 1.778s-1.75-.796-1.75-1.778S73.534 36 74.5 36s1.75.796 1.75 1.778Z"
      fill="#333244"
    />
  </svg>
);

export default GridIcon;
