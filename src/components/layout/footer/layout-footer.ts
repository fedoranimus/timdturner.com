export class LayoutFooter {
    links: FooterLink[] = [
        { 
            uri: "https://github.com/fedoranimus",
            name: "Github",
            icon: "github"
        },
        {
            uri: "https://www.linkedin.com/pub/tim-turner/55/264/648",
            name: "LinkedIn",
            icon: "linkedin"
        },
        {
            uri: "https://standardresume.co/id/-JmZWb8Smht7rOHRLpdZ",
            name: "Résumé",
            icon: "file-text"
        }
    ];

    constructor() {
        
    }
}

interface FooterLink {
    uri: string;
    name: string;
    icon: string;
}