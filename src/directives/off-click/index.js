export default ($parse, $document) => {
    return {
        restrict: 'A',
        link: (scope, element, attr, controller) => {
            const fn = $parse(attr.offClick);

            var handler = (event) => {
                if (!element[0].contains(event.target)) {
                    scope.$apply(() => {
                        if (!scope.$parent.$ctrl.nameIsChanged() || confirm('Отменить изменения?')) {
                            fn(scope, {});
                        }
                    });
                }
            };

            $document.on("click", handler);
            scope.$on("$destroy", function() {
                $document.off("click", handler);
            });
        },
    };
}
