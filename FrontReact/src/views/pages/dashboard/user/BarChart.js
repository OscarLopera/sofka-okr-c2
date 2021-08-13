import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart({okr}){

    let historicalProgress="";
    let arraylabels = [];
    let datapercent = [];
    let datacolor = [];
    //Funcion para los colores
    function r() { return Math.floor(Math.random() * 255) }
    //Obtener numero de KRS
    if (okr !== null) {
      //Arreglo de titulos
      historicalProgress=okr.historicalProgress;
      historicalProgress.forEach(kr => {
        arraylabels.push(kr.date);
        datapercent.push(kr.progress);
        let color = 'rgba(' + r() + "," + r() + "," + r() + ',0.6)';
         datacolor.push(color);
      });
      datapercent.push('100');
      console.log(datacolor);
      //Arreglo de porcentajes
    }
  
      const data = {
          labels:arraylabels,
          datasets:[{
              label:'Avances',
              backgroundColor: datacolor,
              borderColor: "rgba(0,0,255,.2)",
              hoverBackgroundColor: "rgba(0,0,255,.2)",
              borderWidth:1,
              data:datapercent
          }]
      };
      const opciones ={
          maintainAspectRadio: false,
          response : true
      }
      return(
          <div className="BarChart" style={{width: '100%', height:'300px'}}>
              <h5>Avance de OKR por semana</h5>
              <Bar data={data} options={opciones}/>
          </div>
      )
  
  }
    export default BarChart;