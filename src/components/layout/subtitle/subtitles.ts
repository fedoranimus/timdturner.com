export class Subtitles {
    subtitles: SubtitleContent[] = [
        {
            name: "Software Engineer"
        },
        {
            name: "Information Architect"
        },
        {
            name: "Product Designer"
        },
        {
            name: "Voice Actor",
            isComingSoon: true
        }
    ];


    constructor() {

    }
}

interface SubtitleContent {
    name: string;
    isComingSoon?: boolean;
}