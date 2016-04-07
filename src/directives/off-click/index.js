($parse, $document) => {
    return {
        restrict: 'A',
        link: (scope, element, attr, controller) => {
            const fn = $parse(attr.offClick);

            var handler = (event) => {
                if ((element[0] !== event.target) && (0 === element.find(event.target).length)) {
                    console.log('q');
                    scope.$apply(() => {
                        fn(scope, {});
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
