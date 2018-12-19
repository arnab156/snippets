
//replace, slice
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}


//Capitalize The First Letter of a String
const titleCase = (title, minorWords) => {
  if (!title) 
    return title;

  let cap = word => 
    word[0].toUpperCase() + word.slice(1);

  let minors = (minorWords || '')
    .toLowerCase()
    .split(' ');

  let result = title
    .toLowerCase()
    .replace(/\S+/g, w => minors.indexOf(w) === -1 ? cap(w) : w);

  return cap(result);
}

// Alternate with Regex - Capitalize The First Letter of a String

function titleCase(title, minorWords) {
  minorWords = (minorWords || "").toLowerCase().split(' ');
  title = title.toLowerCase();
  return title.replace(/(\w)\w*/g, (word, firstChar, index) => {
    if (index === 0 || minorWords.indexOf(word) === -1)
      word = word.replace(firstChar, firstChar.toUpperCase());
    return word;
  });
}
