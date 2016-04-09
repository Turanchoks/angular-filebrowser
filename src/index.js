import angular from 'angular';

import dndLists from 'angular-drag-and-drop-lists';

import fileBrowser from './components/file-browser/';
import file from './components/file/';

import offClick from './directives/off-click/';

export default angular
    .module('angular-filebrowser', ['dndLists'])
    .component('fileBrowser', fileBrowser)
    .component('file', file)
    .directive('offClick', offClick)
    .name;