countries = [
  {
    name: 'USA',
    population: '350 million'
  },
  {
    name: 'China',
    population: '1.4 billion'
  },
  {
    name: 'Russia',
    population: '145 million'
  }
];

console.log();
console.log("DUMP:");
console.log(countries);

console.log();
console.log("SANITIZED:");
countries.forEach(function(country) {
  console.log("{ :name => " + country['name'] + ", :population => " + country['population'] + " }");
});

console.log();
console.log("TABLE:");
console.log("Countries | Population");
var border = '-'.repeat('Countries | Population'.length)
console.log(border);
countries.forEach(function(country) {
    var space = " ".repeat("Countries ".length - country['name'].length)
    console.log(country['name'] + space + "|" + country['population']);
});
console.log()