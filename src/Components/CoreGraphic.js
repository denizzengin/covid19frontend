import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class CoreGraphic extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
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
  }
}

export default CoreGraphic;
