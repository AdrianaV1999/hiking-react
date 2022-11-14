import ReactEcharts from "echarts-for-react"

  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      type: "category",
      data: ["Mount Kosciuszko", "Mount Fuji", "Jbel Toubkal", "Mauna Kea", "Mount Kilimanjaro", "Chimborazo", "Mera Peak"],
    },
    yAxis: {
      type: "value",

    },
    series: [
      {
        data: [2228, 3776, 4167, 4207, 5895, 6268, 6476],
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  }
  
  function Stats() {
    return (
        <div>
            <h1>Best mountains to climb</h1>
            <h5>7 summits anyone can conquer</h5>
      <ReactEcharts
        option={options}
        style={{ width: "1200px", height: "700px" }}
      ></ReactEcharts>
      </div>
    )
  }

  

  export default Stats