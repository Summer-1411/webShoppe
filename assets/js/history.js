//Search history
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var inputSearch = $('#input_search');
var searchHistory = $('.search__history');
var historyList = $$('.history__item');



inputSearch.onclick = function(e){
    e.stopPropagation();
    searchHistory.classList.add('flex');
}

document.onclick = function(){
    searchHistory.classList.remove('flex');
}
document.onkeydown = function(){
    searchHistory.classList.remove('flex');
}