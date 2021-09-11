import axios from 'axios';
import Char from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'types/sales';

type ChartData = {
        
        labels : string [];
        series : number [];
}

const DonutChart = () => {

    //FORMA ERRADA
    let chartData : ChartData = { labels:[], series : [] };

    //FORMA ERRADA
    
    
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {

            const data = response.data as SaleSum[];
            const mylabels = data.map(x => x.sellerName);
            const myseries = data.map(x => x.sum);    

            chartData = { labels: mylabels, series: myseries};    
             console.log(chartData);

        });



    


    //const mockData = {
        //series: [477138, 499928, 444867, 220426, 473088],
        //labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}

    
        const options = {
        legend: {
            show: true
        }
    }

    return (
      <Char
         options={{...options, labels: chartData.labels}}
         series={chartData.series}
         type="donut" 
         height="240"
      />  

    );
}

export default DonutChart;

