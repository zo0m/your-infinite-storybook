import { RouterLink } from '@angular/router';

export interface DefaultOptions {
    target?: string;
    linkPrefix?: string;
    linkPostfix?: string;
    outlet?: string;
    routerLink?: RouterLink;
}

export interface DefaultOptionsFactoryParams extends DefaultOptions {
    relativePath?: string;
}
