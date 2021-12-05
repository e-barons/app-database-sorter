import { useState } from "react/cjs/react.development";

export default function TransportsItem(props) {
  let [selectedClass, setSelectedClass] = useState("false");            

  const nullHandler = () => {
    if (window.confirm('Vai tu vēlies dzēst ierakstu ?')) {
        setSelectedClass(!setSelectedClass)                     //Izvēloties dzēst ierakstu tiek mainīts State un komponente tiek rerenderota ar jauno klasi
      } else {
        return
      }



  };
 const nullstyle = {                    //Lai vieglāk saprast, kuru ieraksti ir izdzēšami tie tiek iekrāsoti sarkanā krāsā
      color: "red"
  }

  if (props.s_datums == null) {             //Atkarībā no s_datums vērtības tiek pielikts klāt onClick eventlisteners, kas ļauj ierakstam tikt izdzēstam vajadzības brīdī.
    return (
      <p
        style={nullstyle}
        className={selectedClass ? "Tl" : "hidden-element"}     //Izmantojot State selectedClass ir iespējams paslēpt ierakstu pārslēdzot klases no Tl uz hidden-element
        onClick={nullHandler}                   //Izsauc funkciju, lai pajautātu lietotāja vēlmi izdzēst ierakstu, uzspiežot ok, ieraksts tiek paslēpts.
      >
        {props.rn}
      </p>
    );
  } else {
    return <p className="Tl">{props.rn}</p>;            //Atgriež auto numuru priekš katra individuālā ieraksta
  }
}
