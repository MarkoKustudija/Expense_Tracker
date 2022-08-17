import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const dataPointsValues = props.dataPoints.map(dataPoint =>  dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return(
        // dataPont is a object that have prop value
        <ChartBar
          key={dataPoint.label} // we are using label as a unique identifer (id)
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      )})}
    </div>
  );
};

export default Chart;

