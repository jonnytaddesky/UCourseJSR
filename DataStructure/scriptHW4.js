/*
underscore_case
  first_name
next_Variable
   Calculate_AGE
arrived_flight
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const lines = text.split('\n');
    // console.log(lines);
    for (const line of lines) {
        const [firstWord, secondWord] = line.toLowerCase().trim().split('_');
        const ouput = `${firstWord}${secondWord.replace(
            secondWord[0],
            secondWord[0].toUpperCase()
        )}`;
        console.log(ouput);
    }
});
