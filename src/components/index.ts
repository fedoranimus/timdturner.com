import { Aurelia, PLATFORM, FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources(
        [
            PLATFORM.moduleName('./layout/footer/layout-footer'),
            PLATFORM.moduleName('./layout/subtitle/subtitles') 
        ]);
}