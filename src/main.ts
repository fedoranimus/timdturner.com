import { Aurelia, PLATFORM } from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {    
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .feature(PLATFORM.moduleName('components/index'));

    aurelia.start().then(() => {
            aurelia.setRoot(PLATFORM.moduleName('app'));
    });
}