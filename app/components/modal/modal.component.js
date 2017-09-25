(function () {

    'use strict';

    angular.module('app').component('modalComponent', {
        bindings: {
            isModalOpen: '=',
            saveModal: '&'
        },
        templateUrl: 'components/modal/modal.template.html',
        controller: modalController
    });

    modalController.$inject = ['modalService'];

    function modalController(modalService) {
        var self = this;
        self.isFormInvalid = false;

        self.closeModal = modalService.closeModal;
        self.submitModal = modalService.submitModal;
        self.customCharacter = null;

        self.$doCheck = function () {
            if(self.customCharacter === null && self.isModalOpen) {
                self.customCharacter = {};
            }
        };
    }
})();