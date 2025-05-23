import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function ConnectedDiscordCard({
  username,
  discriminator,
}: {
  username: string;
  discriminator: string;
}) {
  return (
    <div className="bg-[#4237af] w-5/12 gap-3 p-5 rounded-2xl flex flex-col items-center ">
      <FontAwesomeIcon icon={faDiscord} size="3x" />

      <div>
        <p className="text-xl font-semibold">Connected to Discord</p>
      </div>

      <div>
        <h2 className="text-[#cccefc]">
          You are now connected to Discord as{" "}
          <span className="font-bold ">
            {username} {discriminator}
          </span>
        </h2>
      </div>

      <div className="text-[#cccefc]">
        <p>Install the bot by clicking below, if you haven&apos;t already</p>
      </div>
      <Link href="https://discord.com/oauth2/authorize?client_id=1374068197539713216&permissions=563501856910448&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard%2Fautomation-tools&integration_type=0&scope=identify+guilds+applications.commands+bot">
        <button className="bg-[#3451ff] px-5 py-1 text-xl font-bold rounded-lg">
          Install Bot
        </button>
      </Link>
    </div>
  );
}

export default ConnectedDiscordCard;
