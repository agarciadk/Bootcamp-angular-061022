/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

const navigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'home',
        title: 'Home',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/home2'
    },
    {
        id   : 'owner',
        title: 'Owner',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/owner'
    }
];

export const defaultNavigation: FuseNavigationItem[] = navigation;
export const compactNavigation: FuseNavigationItem[] = navigation;
export const futuristicNavigation: FuseNavigationItem[] = navigation;
export const horizontalNavigation: FuseNavigationItem[] = navigation;
