import { FactoryProvider, InjectionToken } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    DefaultOptions,
    DefaultOptionsFactoryParams
} from './link-options-providers-api';

export function provideDefaultOptionsForLink(
    token: InjectionToken<DefaultOptions>,
    params?: DefaultOptionsFactoryParams
): FactoryProvider {
    const defaultParams = { relativePath: './', linkPrefix: '' };

    const { relativePath, linkPrefix, linkPostfix, target } = {
        ...defaultParams,
        ...params
    };

    return {
        provide: token,
        deps: [ActivatedRoute, Router],
        useFactory: (
            activatedRoute: ActivatedRoute,
            router: Router
        ): DefaultOptions => {
            const urlTree = router.createUrlTree([relativePath], {
                relativeTo: activatedRoute
            });
            const activeRoutePath = router.serializeUrl(urlTree);

            return {
                linkPrefix: activeRoutePath + linkPrefix,
                linkPostfix,
                target
            };
        }
    };
}
