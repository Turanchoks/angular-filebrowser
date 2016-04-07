import angular from 'angular';

import './styles.scss';

import angularFileBrowser from  '../index';

angular
    .module('app', [
        angularFileBrowser
    ])
    .run(($http, $rootScope) => {
        $http
            .get('files.json')
            .then((response) => {
                $rootScope.files = response.data;
            });
    });
