import angular from 'angular';

import fileBrowser from './components/file-browser/';
import file from './components/file/';

import offClick from './directives/off-click/';

export default angular
    .module('angular-filebrowser', [])
    .component('fileBrowser', fileBrowser)
    .component('file', file)
    .directive('offClick', offClick)
    .name;