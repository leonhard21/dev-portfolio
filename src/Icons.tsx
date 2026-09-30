type IconProps = { className?: string }

export function CodeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 6 2 12l6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 2 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
    </svg>
  )
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeLinecap="round" />
    </svg>
  )
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.14v3.17c0 .3.21.66.79.55 4.51-1.51 7.77-5.76 7.77-10.78C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.78 14.09c-.24.68-1.4 1.32-1.93 1.4-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.93 0-1.4.73-2.08 1-2.36.26-.28.57-.35.76-.35h.55c.18 0 .42-.03.65.5.24.55.81 1.9.88 2.04.07.14.11.3.02.49-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.71 1.18 1.53 1.9 1.05.94 1.94 1.24 2.21 1.38.28.14.44.12.6-.07.16-.2.68-.8.87-1.07.18-.28.37-.23.61-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.67-.17 1.35Z" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 4h6v6M20 4 10 14M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ICONS_BY_KEY_MAP(key: string) {
  switch (key) {
    case 'code':
      return CodeIcon
    case 'layers':
      return LayersIcon
    case 'chart':
      return ChartIcon
    case 'briefcase':
      return BriefcaseIcon
    default:
      return CodeIcon
  }
}
