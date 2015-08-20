/*
	A particularly un-useful method, but mostly
	displaying how you can manipulate more than
	just the document. The window location is
	also at your disposal for doing whatever
	you please. There's also a regex
	example and alert usage example for
	various things you might want to do.
*/

// define our function, this is a named function which is parsed before non named functions and other javascript
function hashPopup() {
	// grab the hash value from the location
	var hash = window.location.hash;
	if (hash) {
		// if the hash is set, remove any non word characters
		hash = hash.replace(/\W/g, '');
		// then tell the user they are a trickster, based on what the hash was
		alert('You are such a trickster, ' + hash + '!');
	}
};
// call our function when this script is executed (right away)
hashPopup();
