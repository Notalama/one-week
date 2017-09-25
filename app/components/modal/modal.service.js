(function () {

    'use strict';

    angular.module('app').factory('modalService', modalService);

    modalService.$inject = [];

    function modalService() {
        return {
            closeModal: closeModal,
            submitModal: submitModal
        }

        function closeModal() {
            var ctrl = this;
            ctrl.isModalOpen = false;
        }

        function submitModal(form) {
            var ctrl = this;
            if(!form.$invalid) {
                ctrl.saveModal({'character': ctrl.customCharacter});
                ctrl.closeModal();
            } else {
                ctrl.isFormInvalid = true;
            }
        }


    }


})();