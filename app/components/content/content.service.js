(function () {

    'use strict';

    angular.module('app').factory('charFactory', charFactory);

    charFactory.$inject = ['$q'];

    function charFactory($q) {
        var list = [
            {
                "name": "Anna Kebabs",
                "avatar": "img/avatar-f.svg",
                "age": 23,
                "info": "Angry and worldhating young women, who wanna destroy the world",
                "firstPhrase": "Hello, nice to meet you :)"
            },
            {
                "name": "John Leads",
                "avatar": "img/avatar-m.svg",
                "age": 28,
                "info": "Leader in everything. Must be first in every contest even if it is not a contest.",
                "firstPhrase": "Lets the show begin!"
            }
        ];
        return {
            charList: charList,
            openAddCharModal: openAddCharModal,
            addNewCharacter: addNewCharacter
        };

        function charList() {
            return $q.when(list);
        }

        function openAddCharModal() {
            var ctrl = this;
            ctrl.isModalOpen = true;
        }

        function addNewCharacter(character) {
            var ctrl = this;
            character.id = ctrl.characterList.length + 1;
            ctrl.characterList.push(character);
        }

    }


})();