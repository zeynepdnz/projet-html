function averageOfEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  const sum = evenNumbers.reduce((acc, number) => acc + number, 0);
  const average = evenNumbers.length > 0 ? sum / evenNumbers.length : 0;
  return average;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(averageOfEvenNumbers(numbersArray));

function longestWord(words) {
  return words.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
}

const wordsArray = ["apple", "banana", "orange", "strawberry"];
console.log(longestWord(wordsArray));

function averagePagesInBooks(books) {
  const totalPages = books.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
  const average = books.length > 0 ? totalPages / books.length : 0;
  return average;
}

const booksArray = [
  { title: "Book1", author: "Author1", pages: 100 },
  { title: "Book2", author: "Author2", pages: 150 },
  { title: "Book3", author: "Author3", pages: 120 }
];

console.log(averagePagesInBooks(booksArray));

function stringFrequency(strings) {
  return strings.reduce((frequency, str) => {
    frequency[str] = (frequency[str] || 0) + 1;
    return frequency;
  }, {});
}

const stringsArray = ["hello", "world", "hello"];
console.log(stringFrequency(stringsArray));

function countPeopleByCity(people) {
  return people.reduce((countByCity, person) => {
    countByCity[person.city] = (countByCity[person.city] || 0) + 1;
    return countByCity;
  }, {});
}

const peopleArray = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" }
];

console.log(countPeopleByCity(peopleArray));
