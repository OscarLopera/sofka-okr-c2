import React from 'react'
import { Pie } from 'react-chartjs-2'

function PieChart({okr}){
  let krs="";
  let arraylabels = [];
  let datapercent = [];
  let datacolor = [];
  let acum = 0;
  let krinOKR = 0;
  //Funcion para los colores
  function r() { return Math.floor(Math.random() * 255) }
  //Obtener numero de KRS
  if (okr !== null) {
    krs = okr.krs;
    //Arreglo de titulos
    krs.forEach(kr => {
      arraylabels.push(kr.id);
      krinOKR = kr.loadValue*kr.progress/100
      acum = krinOKR + acum;
      datapercent.push(krinOKR);
      let color = 'rgb(' + r() + "," + r() + "," + r() + ')';
      datacolor.push(color);
    });
    let krfaltante = 100-acum;
    datapercent.push(krfaltante);
    arraylabels.push('Faltante');
    datacolor.push('#EDEDEC');
    console.log(datacolor);
    //Arreglo de porcentajes
  }
  
  //CONFIGURACION DE PARAMETROS DE LA GRAFICA
  const data={
    //PARAMETROS A COMPARAR
    labels:arraylabels,
    //PORCENTAJE DE CUMPLIMIENTO kRS 
    datasets:[{
      data:datapercent,
      backgroundColor:datacolor,
    }]
  };
  const opciones={
    responsive: true
  }
  return (
    <div className="PieChart"style={{width:"50%", margin:"50px"}}>
      <Pie data={data} options={opciones}/>
    </div>
  );
  

}
export default PieChart;