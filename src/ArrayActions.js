import database from "./db.json";

function filterByTime(array, datefilter) {      // Funkcija, kas pārbauda vai lietotāja izvēlētais laiks ir pa vidu start sākuma laiku un beigu laiku
  return array.filter(function (obj) {
    let startDate = Date.parse(obj.datums);
    let inputDate = Date.parse(datefilter);
    let endDate = Date.parse(obj.s_datums);
    endDate = endDate || inputDate + 1; // Ja beigu laiks ir null, tad tiek uzskatīts ka beigu laiks ir lielāks par izvēlēto laiku

    if (startDate < inputDate && inputDate < endDate) {
      return true;
    } else {
      return false;
    }
  });
}

function createTlArray(datefilter) {
  let tlArray = database.items.map(function (tl) {        // No JSON faila tiek izveidots objektu array
    let tlobject = {
      id: tl.id,
      numurs: tl.numurs,
      rn: tl.rn,
      datums: tl.datums,
      s_datums: tl.s_datums,
    };
    return tlobject;
  });
  const filteredArray = filterByTime(tlArray, datefilter);  // No izveidotā array tiek atfiltrēti ieraksti, kuri neiekļaujas norādītā laika rāmī
  return filteredArray;
}

export default function Splitinqueue(datefilter) {
  let TableArray = [];  //Array, kas tiks izmantots kā divdimensionāls array, kurā tiek ievietota katra individuālā rinda
  let rowArray = [];  //Array, kas veidos katru individuālo rindu
  for (let i = 1; i < 13; i++) {
    rowArray = createTlArray(datefilter).filter((tl) => tl.numurs === i);   //Tiek izveidots katras individuālās rindas array un padots tālāk kārtošanai pēc ID
    rowArray.sort((a, b) => {
      return a.id - b.id;
    });
    rowArray.length = 14; //Tiek nodrošināts ka rindā ir maksimāli 14 ieraksti
    TableArray.push(rowArray);  //Rinda tiek nodota tālāk uz TableArray tabulu, kas ir divdimensionāls tabula
  }

  return TableArray;
}
