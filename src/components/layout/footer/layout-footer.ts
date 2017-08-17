export class LayoutFooter {
    links: FooterLink[] = [
        { 
            uri: "https://github.com/fedoranimus",
            name: "Github",
        },
        {
            uri: "https://www.linkedin.com/pub/tim-turner/55/264/648",
            name: "LinkedIn"
        },
        {
            uri: "https://standardresume.co/id/-JmZWb8Smht7rOHRLpdZ",
            name: "Résumé"
        }
    ];

    constructor() {
        
    }
}

interface FooterLink {
    uri: string;
    name: string;
}