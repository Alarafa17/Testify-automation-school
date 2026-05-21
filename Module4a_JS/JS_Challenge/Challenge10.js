function filterNagativeNumbers(numbers){
    return (numbers>=0)
}
const values= [-9,-4, 0, 45, 78, 90, -12]
const result = filterNagativeNumbers(values);
console.log(result)