import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart,
} from "recharts";
import * as chartTypes from "../Constants/ChartTypes";

class CoreGraphic extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";
  state = { ChartType: chartTypes.None };
  renderSwitch = () => {
    switch (this.props.chartType) {
      case chartTypes.BAR_CHART:
        return (
          <ResponsiveContainer width="100%" aspect={4.0 / 2.5}>
            <BarChart width={800} height={300} data={this.props.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip wrapper="span" />
              <Legend />
              <Bar dataKey="Turkey" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        );

      case chartTypes.AREA_CHART:
        return (
          <ResponsiveContainer width="100%" aspect={4.0 / 2.5}>
            <AreaChart width={400} height={300} data={this.props.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip wrapper="span" />
              <Legend />

              <Area
                type="monotone"
                dataKey="Turkey"
                stroke="#ffc658"
                activeDot={{ r: 8 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      case chartTypes.LINE_CHART:
        return (
          <ResponsiveContainer width="100%" aspect={4.0 / 2.5}>
            <LineChart width={400} height={300} data={this.props.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip wrapper="span" />
              <Legend />

              <Line
                type="monotone"
                dataKey="Turkey"
                stroke="#ffc658"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case chartTypes.COMPOSED_CHART:
        return (
          <ResponsiveContainer width="100%" aspect={4.0 / 2.5}>
            <ComposedChart width={400} height={300} data={this.props.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip wrapper="span" />
              <Legend />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Line
                type="monotone"
                dataKey="Turkey"
                stroke="#ffc658"
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        );

      default:
        break;
    }
  };

  render() {
    return this.renderSwitch();
  }
}

export default CoreGraphic;
