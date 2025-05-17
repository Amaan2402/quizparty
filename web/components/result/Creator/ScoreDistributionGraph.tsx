import React from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// const chartData = [
//   { month: "January", desktop: 186, fill: "#252474" },
//   { month: "February", desktop: 305, fill: "#252474" },
//   { month: "March", desktop: 237, fill: "#252474" },
//   { month: "April", desktop: 73, fill: "#252474" },
//   { month: "May", desktop: 209, fill: "#252474" },
//   { month: "June", desktop: 214, fill: "#252474" },
// ];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

function ScoreDistributionGraph({
  scoreDistributionGraph,
}: {
  scoreDistributionGraph: {
    id: string;
    quizId: string;
    count: number;
    label: string;
  }[];
}) {
  const chartData = scoreDistributionGraph.map((data) => ({
    participants: data.count,
    label: data.label,
    fill: "#252474",
  }));
  return (
    <div className="mt-3 mb-5">
      <Card className="bg-[#3f3faf] border border-[#6b6bc8]">
        <CardHeader>
          <CardTitle className="text-white font-semibold text-2xl">
            Score Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} opacity={0.2} />
              <XAxis
                dataKey="label"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                color="#fff"
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="participants"
                fill="var(--color-desktop)"
                radius={5}
                barSize={90}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Participants scores breakdown by Range
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ScoreDistributionGraph;
