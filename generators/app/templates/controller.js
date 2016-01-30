(function() {
  'use strict';

  angular
    .module('<%= name %>.controller', [])
    .controller('<%= ctrlName %>', <%= ctrlName %>);

  /* @ngInject */
  function <%= ctrlName %>($scope) {
    var vm = this;

    vm.loaded = false;

    activate();

    function activate() {
      vm.loaded = true;
    }

  }

})();
