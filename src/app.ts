import { PLATFORM } from 'aurelia-framework';
import { ConfiguresRouter, Router, RouterConfiguration } from 'aurelia-router';

export class App implements ConfiguresRouter {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Tim Turner";

        config.map([
            { route: '', moduleId: PLATFORM.moduleName('./pages/home/home'), name: 'home', nav: false, title: 'Home' },
            { route: 'about', moduleId: PLATFORM.moduleName('./pages/about/about'), name: 'about', nav: true, title: 'About Me' },
            { route: 'projects', moduleId: PLATFORM.moduleName('./pages/project-list/project-list'), name: 'projects', nav: false, title: 'Projects' }
        ]).mapUnknownRoutes(PLATFORM.moduleName('./pages/not-found'));
        this.router = router;
    }
    
}