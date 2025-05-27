"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
import { useEffect, useState } from "react";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function LineChartDashBoard({
  data,
}: {
  data: {
    week: string;
    participants: number;
  }[];
}) {
  const [isGraphDataAvailable, setIsGraphDataAvailable] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      const isParticipantsAvailable = data.filter(
        (item) => item.participants > 0
      );

      if (isParticipantsAvailable.length > 0) {
        setIsGraphDataAvailable(true);
      } else {
        setIsGraphDataAvailable(false);
      }
    }
  }, [data]);

  const transformed = data.map((item) => {
    const [start, end] = item.week
      .split("–")
      .map((date) => date.trim().split("/")[0]);
    return {
      ...item,
      week: `${start} - ${end}`,
    };
  });

  transformed.unshift({
    week: "July - August",
    participants: 0,
  });

  return (
    <div className="mt-3 mb-5">
      <Card className="bg-[#3f3faf] border border-[#6b6bc8]">
        <CardHeader>
          <CardTitle className="text-white text-xl">
            {" "}
            {isGraphDataAvailable ? (
              <p>Total participants overtime</p>
            ) : (
              <p>
                No data available
                <br />
                <span className="font-light">
                  0 participants for the last 28 days
                </span>
              </p>
            )}
          </CardTitle>
          <CardDescription>Last 28 days</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <LineChart
              accessibilityLayer
              data={transformed}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} opacity={0.2} />
              <XAxis
                dataKey="week"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="participants"
                type="basis"
                stroke="#252474"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
      </Card>
    </div>
  );
}
