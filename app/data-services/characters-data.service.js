(function() {
    'use strict';

    angular.module('app').controller('charactersController', ['charService', '$http', '$log', characters])

    function characters(charService) {

        var self = this;

        self.characterList = [];
        self.selected = null;
        self.selectChar = selectChar;

        charService
            .getAllCharacters()
            .then(function(list) {
                self.characterList = [].concat(list);
                self.selected = list[0];
            });

        console.log(self.characterList[0]);

        function selectChar(char) {
            var self = this;
            self.selected = char;
        }
    }
})();