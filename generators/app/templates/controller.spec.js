'use strict';

describe('<%= ctrlName %>', function() {
    var scope;

    var <%= ctrlName %>;

    beforeEach(module('<%= name %>.controller'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        <%= ctrlName %> = $controller('<%= ctrlName %>', {
            $scope: scope
        });
    }));

    it('should be defined', function() {
        expect(<%= ctrlName %>).toBeDefined();
    });

    it('should declared a loaded flag', function() {
        expect(<%= ctrlName %>.loaded).toBeDefined();
    });

    it('should set the loaded flag to true on activation', function() {
        expect(<%= ctrlName %>.loaded).toBeTruthy();
    });

});
