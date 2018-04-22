export class ProjectList {
    projects: Project[] = [
        {
            title: "Aspen Unified",
            image: "aspen",
            status: "Released",
            summary: "Web-based oil refinery optimization platform.",
            link: "https://www.aspentech.com/en/resources/video/planning-is-personal---introducing-unified-pims",
            linkTitle: "Visit Website",
            role: "Senior Developer & UX Lead",
            github: null
        },
        {
            title: "Massive Deeps",
            image: "massive-deeps",
            status: "Personal Brand",
            summary: "Branding for my personal projects and homelab",
            link: "https://www.figma.com/file/SmMmBJOq9TBgUHEigjVPh6p8/Massive-Deeps",
            linkTitle: "View on Figma",
            role: "Designer",
            github: null
        },
        {
            title: "Radarr",
            image: "radarr",
            status: "Released",
            summary: "Open Source Movie PVR, used with Plex",
            link: "http://radarr.video/",
            linkTitle: "Visit Website",
            role: "Lead Designer (UI & UX), Lead Frontend Developer",
            github: "https://github.com/Radarr/Radarr",
        },
        {
            title: "VR Meditations",
            image: "vr-meditations",
            status: "In Development",
            summary: "Meditation scenes for WebVR",
            link: "https://fedoranimus.github.io/vr-meditations/",
            linkTitle: "Visit Website",
            role: "Personal Project",
            github: "https://github.com/fedoranimus/vr-meditations"
        },
        {
            title: "Today",
            image: "today",
            status: "Open Beta",
            summary: "Chrome extension for completing Todoist tasks via the Pomodoro method.",
            link: "https://chrome.google.com/webstore/detail/today/nlaopmodobgckcknfffmkpcgfoilbeig",
            linkTitle: "Visit Website",
            role: "Personal Project",
            github: "https://github.com/fedoranimus/today-app"
        },
        {
            title: "Covalence",
            image: "covalence",
            status: "In Development",
            summary: "Web app to help people to find mentors. Targeted towards college educated individuals in STEM fields.",
            link: "https://becovalent.com",
            linkTitle: "Visit Website",
            role: "Personal Project",
            github: "https://github.com/fedoranimus/Covalence"
        },
        {
            title: "Timesheet Tug o' War",
            image: "timesheet",
            status: "Internal",
            summary: "Gamified Timesheet tracking built for Modern Climate during Internship.",
            link: null,
            role: "Lead Developer",
            linkTitle: "Case Study coming soon",
            github: null
        },
        {
            title: "Scratchpad Fever",
            image: "scratchpad",
            status: "Sunset",
            summary: "An early augmented reality game built while interning at Modern Climate. Nominated for a Webby award.",
            link: "http://www.modernclimate.com/work/scratch-pad-fever",
            linkTitle: "Visit Website",
            role: "Developer",
            github: null
        }
    ];
    
    constructor(){

    }
}

interface Project {
    title: string;
    image: string;
    status: string;
    summary: string;
    link: string | null;
    linkTitle: string;
    github: string | null;
    role: string;
}