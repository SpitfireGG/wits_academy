import type { SVGProps } from "react";

type Icon = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const CapIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    <path d="M22 10v5" />
  </svg>
);

export const BookIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 18.5" />
  </svg>
);

export const FlaskIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M9 3h6M10 3v6.5L5.5 17.4A2 2 0 0 0 7.3 20.5h9.4a2 2 0 0 0 1.8-3.1L14 9.5V3" />
    <path d="M7.5 14h9" />
  </svg>
);

export const GlobeIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
  </svg>
);

export const TorchIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3c1.5 2 2.5 3.2 2.5 5a2.5 2.5 0 0 1-5 0c0-.8.3-1.5.8-2.2" />
    <path d="M10.5 11h3l-.6 3.5h-1.8L10.5 11ZM11 15h2l1 6h-4l1-6Z" />
  </svg>
);

export const HeartIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20.5S3.5 15.4 3.5 9.3A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8.5 2.3c0 6.1-8.5 11.2-8.5 11.2Z" />
  </svg>
);

export const TrophyIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
    <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 20h6M10 16.5 9.5 20M14 16.5l.5 3.5" />
  </svg>
);

export const UsersIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.5a3 3 0 0 1 0 5.8M17 14.5a5 5 0 0 1 3.5 4.5" />
  </svg>
);

export const SparkIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

export const ShieldIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5.5C5 16 8 19.5 12 21c4-1.5 7-5 7-9.5V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const PinIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const PhoneIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5c0-1 .8-2 2-2h2l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V18c0 1.2-1 2-2 2A16 16 0 0 1 4 5Z" />
  </svg>
);

export const MailIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const ArrowIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const PlayIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" stroke="none" />
  </svg>
);

export const StarIcon: Icon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.2 20.5l1.1-6.5L2.5 9.4l6.6-.9 2.9-6Z" />
  </svg>
);

export const MenuIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const CheckIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12.5 9 17.5 20 6.5" />
  </svg>
);

export const MegaphoneIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H7l8 4V4.5L7 8.5H5.5A1.5 1.5 0 0 0 4 10Z" />
    <path d="M7 15.5v2.7a1.7 1.7 0 0 0 3.4.4" />
    <path d="M18.5 9.5a3.2 3.2 0 0 1 0 5" />
  </svg>
);

export const ChatIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M21 14.5a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z" />
    <path d="M8.5 10h7M8.5 13h4" />
  </svg>
);
