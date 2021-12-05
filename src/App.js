import { useState } from "react";
import TableArray from "./TableArray";
import splitInQueues from "./ArrayActions";

function App() {
  const rowHeader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];    //Tiek izmantots tabulas rindu un kolonnu noformēšanai
  const columnHeader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const initDate = "2020-06-01T00:00";  
  const initarray = splitInQueues("2020-06-01T00:00"); // Izveido pirmo tabulas renderu
  const [selectedDate, setSelectedDate] = useState(initDate);
  let [TransportArray, setTransportArray] = useState(initarray);  //Reģistrē sākuma stāvokli tabulas array

  function onChangeHandler(event) {                             
    setSelectedDate(event.target.value);                
    setTransportArray(splitInQueues(event.target.value));   //Izsauc jaunu tabulas izveidi izmantojot jauno filtru, kas ir lietotāja norādītais laiks un datums
  } //

  return (
    <div className="main-app">
      <form className="control-panel">
        <input
          step="1"
          type="datetime-local"
          value={selectedDate}
          onChange={onChangeHandler}            //Tā vietā, lai nospiestu atsevišķu pogu, pie vērtības izmaiņām automātiski tiek izsaukts tabulas pārtaisīšana pēc jaunā filtra
          min="2020-06-01T00:00"                //izsaucot onChangeHandler tiek izsaukta funkcija splitInQueues no ArrayActions.js kamā notiek viss array izveidošana un filtrēšana
          max="2020-06-30T23:59"
          className="input-panel"
        ></input>
      </form>

      <div className="grid-container">    
        <div className="row-header">
          {rowHeader.map((rowNumber, index) => {
            return <div className="row-text">{rowNumber}</div>;
          })}
        </div>
        <div className="column-header">
          {columnHeader.map((colNumber, index) => {
            return <div className="column-text">{colNumber}</div>;
          })}
        </div>

        <TableArray transportarray={TransportArray}></TableArray>
      </div>
    </div>
  );
}
export default App;
