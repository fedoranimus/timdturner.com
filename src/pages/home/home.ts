export class Home {

    titles: SkillTitles[] = [{
        text: "Software Engineer"
    },
    {
        text: "Information Architect"
    },
    {
        text: "Product Designer"
    },
    {
        text: "Voice Actor",
        comingSoon: true
    }];

    constructor() {

    }
}

interface SkillTitles {
    text: string;
    comingSoon?: boolean;
}