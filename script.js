const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	let userInput = str.toLowerCase();
	let results = fruit.filter(function(fruitName) {
		let lowercaseFruit = fruitName.toLowerCase();
    	return lowercaseFruit.includes(userInput);
  });

  if(str.length == 0){
	delSuggestions();
  }

  let boldInput = results.map(function(names) {
    let bolded = names.replace(new RegExp(userInput, 'gi'), function(match) {
      return '<strong>' + match + '</strong>';
    });
	return bolded;
  });
  
  //console.log(boldInput);
  //console.log(results);

  showSuggestions(boldInput);
  return results;

}


function searchHandler(e) {
	suggestions.innerHTML = '';
	let currentInput = e.target.value;
	search(currentInput);	
}


function showSuggestions(results) {  /*, inputVal) {*/
suggestions.innerHTML = '';
results.forEach(function(result) {
  let listItem = document.createElement('li');
  listItem.innerHTML = result;
  
  	listItem.addEventListener('click', function(){
  		useSuggestion(result)
	});
  
  suggestions.appendChild(listItem);	
	});
};


function delSuggestions(){
	document.querySelector('.suggestions ul li').remove();
}


function useSuggestion(suggestion) {
	input.value = suggestion.replace(/<\/?strong>/g, '');
	suggestions.innerHTML = '';
}



input.addEventListener('keyup', searchHandler);