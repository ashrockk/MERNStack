// WAP to count the number of vowels in a given string.
const a = prompt("Enter a string: ")

function vowelcounter(string)
{
    const b = "AaEeIiOoUu";
    let count = 0;
    for(const character of string)
    {
        if(b.includes(character))
        {
            count++;
        }
    }
    return count;
}
const z = vowelcounter(a);
console.log("The number of vowels in the string is:", z);


