import TransportsItem from "./TransportsItem";

export default function TableArray(props) {

  return (
    <div className="queue-container">
      {props.transportarray.map((items, index) => {
        return (
          <div className="TlArray" key={index}>
            {items.map((subItems, sIndex) => {  // Katram objektam tiek izveidots JSX objekts, kas atrodas TransportsItem.js, tajā failā papildus tiek pārbaudīts vai beigu laiks ir null
              return (
                <div className="Tl-wrapper" key={subItems.id}>    
                  <TransportsItem
                    key={subItems.id}
                    id={subItems.id}
                    numurs={subItems.numurs}
                    rn={subItems.rn}
                    datums={subItems.datums}
                    s_datums={subItems.s_datums}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
