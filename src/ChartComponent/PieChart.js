import React, {useState, useEffect} from 'react'
import { Chart as ChartJs, ArcElement, Tooltip, Legend} from 'chart.js'
import { Pie } from 'react-chartjs-2'


ChartJs.register(
    Tooltip,
    Legend,
    ArcElement
)

//////////////////////////////  Calling Function API URL ???????????????????///////////////////////

const PieChart = () => {

    const [chart, setChart] = useState([]);

    const baseUrl = "https://api.coinranking.com/v2/coins/?limit=20"
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiKey = 'coinrankingbba3c51339b76680925afbee2987a6a74c1c5d0d3bb71bee'

    ////////////////????????    Calling Rest API Using ReactUseEffect   ??????????????????????//////////////////////

    useEffect(() => {
  const fetchApi = async () => {
         await fetch(`${proxyUrl}${baseUrl}`, {
              method: 'GET',
              headers: {
                  'Content-Type' : 'application/json',
                  'x-access-token': `${apiKey}`,
                  'Access-Control-Allow-Origin': '*'
              }
         }).then((response) => {
             response.json().then((json) => {
                setChart(json.data)
             })
         }).catch(error => {
             console.log(error);
         })
          
     }
     fetchApi()
    }, [baseUrl,proxyUrl,apiKey])

//////////////////////////////////   Chart Data Information    ///////////////////////////////////////////////

    //console.log("chart", chart)
   const data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
            label: `${chart?.coins?.length} Coins Available`,
            data: chart?.coins?.map(x => x.price),
            backgroundColor: [
                '#2ECC71',
                '#F1C40F',
                '#3498DB',
                '#E74C3C',
                '#7D3C98',
                '#7B241C'
            ],
            borderColor: [
                '#2ECC71',
                '#F1C40F',
                '#3498DB',
                '#E74C3C',
                '#7D3C98',
                '#7B241C'
            ],
            borderWidth: 1
        }]
    }

  const  options = {
      maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }

     /////////////////////////////    Return Data Part  Bar Chart  /////////////////////////////////////////
     
  return (
    <div>
      <Pie
      data={data}
      height={400}
      options={options}/>
    </div>
  )
}

export default PieChart