import axios from 'axios';
import { useEffect, useState } from 'react';
import Char from 'react-apexcharts';
import { SaleSucess } from 'types/sales';
import { BASE_URL } from 'utils/requests';
import { round } from 'utils/format';

type SeriesData = {
    name: string;
    data: number[];
}



type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];    
}


const BarChar = () => {
    const [ ChartData, setChartData] = useState <ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    });
    

    useEffect(() => {
   
        axios.get(`${BASE_URL}/sales/Sucess-by-seller`)
            .then(response => {
    
                const data = response.data as SaleSucess[];
                const mylabels = data.map(x => x.sellerName);
                const myseries = data.map(x => round(100.0 * x.deals / x.visited, 1));    
    
                setChartData ({
                    labels: {
                        categories: mylabels
                    },
                    series: [
                        {
                            name: "%Sucess",
                            data: myseries                  
                        }
                    ]
                });
    
            });
} , []);
    

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    

    return (
      <Char 
         options={{...options, xaxis: ChartData.labels}}
         series={ChartData.series}
         type="bar" 
         height="240"
      />  

    );
}

export default BarChar;





