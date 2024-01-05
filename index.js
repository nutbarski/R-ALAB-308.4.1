//part 1 & 2 // refactor and expand

let stringData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function parseData (stringData) {
    const rows = stringData.split('\n');
    const headers = rows[0].split(',');

    const columnNumber = headers.length;

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(',');
        if (cells.length === columnNumber) {
            console.log(...cells);
        }
    }
}

parseData(stringData);


// //part 3 --- transform the data

// let stringData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// function parseData(stringData) {
//     const rows = stringData.split('\n');
//     const headers = rows[0].split(',');

//     let results = [];

//     results.push(headers); // use row 1 as header

//     const columnNumber = headers.length;

//     for (let i = 1; i < rows.length; i++) {
//         const cells = rows[i].split(',');

//         if (cells.length === columnNumber) {
//             results.push(cells);
//         }
//     }

//     return results;

// }

// const outputProcess = parseData(stringData);

// //part 4
// let stringData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// function parseData(stringData) {

//     const rows = stringData.split('\n');
//     const headers = rows[0].split(',');

//     const columnNumber = headers.length;
//     const results = [];

//     //parse data
//     for (let i = 1; i < rows.length; i++) {
        
//         const cells = rows[i].split(',');

//         if (cells.length === columnNumber) {
//             const obj = {};

//             headers.forEach((header, index) => {
//                 obj[header.toLowerCase()] = cells[index];
//             });

//             //push new data into array
//             results.push(obj);
//         }
//     }

//     return results;
// }

// const outputProcess = parseData(stringData);
// console.log(outputProcess);


//part 5 -- final
