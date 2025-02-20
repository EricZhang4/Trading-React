import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    label: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    label: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    label: "1 Month",
    value: 30,
  },
];

const StockChart = () => {
    
    const [activeLabel, setActiveLabel] = useState("1 Day");

  const series = [
    {
      data: [
        [1736719442372, 94290.5196736908],
        [1736723023099, 93873.3704055025],
        [1736726436404, 94454.7708963881],
        [1736730244515, 95230.5013635734],
        [1736733798201, 94129.1856393411],
        [1736741019288, 94124.6851331951],
        [1736744650854, 94466.3549182907],
        [1736748223466, 94137.938359676],
        [1736751763832, 93330.9010942089],
        [1736755278929, 93493.6901474369],
        [1736759025504, 92923.1643244505],
        [1736762617047, 92965.673056223],
        [1736766498214, 91618.1627755342],
        [1736769818313, 91066.5096907206],
        [1736773705727, 90897.722821227],
        [1736777014838, 91046.8826430159],
        [1736780625868, 91673.9888547046],
        [1736784208725, 92196.8440602546],
        [1736787825245, 91203.8650436534],
        [1736791376846, 91929.4735169686],
        [1736795015992, 92048.1895936744],
        [1736798610727, 92270.7567426066],
        [1736802216362, 93565.1618405116],
        [1736805819183, 94163.8907477522],
        [1736809347487, 94358.1054114969],
        [1736813019758, 94504.2684951496],
        [1736816629692, 94451.9127217777],
        [1736820214882, 94804.2256180504],
        [1736823825339, 94883.6817763858],
        [1736827408110, 94835.8701289085],
        [1736831226814, 95164.6160620197],
        [1736834528027, 94861.4042763244],
        [1736838211814, 95026.5663493572],
        [1736841824142, 94835.0560550165],
      ],
    },
  ];

  const options = {

    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],

    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      strokeWidth: 1,
      strokeDashArray: 0,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };
  
  const handelActiveLabel = (value) => {
    setActiveLabel(value);
  }

  return (
    <div>
      <div className = "space-x-3">
        {timeSeries.map((item) => (
          <Button variant = {activeLabel == item.label ? "": "outline"} onClick = {() => handelActiveLabel(item.label)} key={item.label}>{item.label}</Button>
        ))}
      </div>

      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          height={450}
          type="area"
        />
      </div>
    </div>
  );
};

export default StockChart;
