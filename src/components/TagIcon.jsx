// components/TagIcon.tsx
const TagIcon = ({ className = "w-6 h-6 text-teal-500" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 5v4a2 2 0 002 2h4l7 7a2 2 0 002-2v-4a2 2 0 00-2-2H7a2 2 0 01-2-2V5a2 2 0 00-2 2v4a2 2 0 002 2h4l7 7a2 2 0 002-2v-4a2 2 0 00-2-2H7a2 2 0 01-2-2z"
    />
  </svg>
);

export default TagIcon;
