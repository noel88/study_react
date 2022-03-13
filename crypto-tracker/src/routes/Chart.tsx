import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts"

interface CharProps {
  coinId : string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ISeries {
  name: string;
  data: number[];
}

function Chart({coinId}: CharProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId],
    () => fetchCoinHistory(coinId), {
    refetchInterval: 10000,
    })

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map(price => price.close),
            }
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close)
            },
            fill: { type: "gradient", gradient: { gradientToColors: ["#0be881"], stops: [0, 100]  }},
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (val) => `$${val.toFixed(2)}`
              }
            }
          }}
        />
      )}
    </div>
  )
}

export default Chart;
