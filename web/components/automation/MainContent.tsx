"use client";

import { getDiscordUser, handleAuthDiscord } from "@/utils/discord";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConnectedDiscordCard from "./ConnectedDiscordCard";

function MainContent() {
  const [isCodeAvailable, setIsCodeAvailable] = useState(false);
  const [userDiscord, setUserDiscord] = useState<{
    id: string;
    discordId: string;
    discordUsername: string;
    discordDiscriminator: string;
  } | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!code && !userDiscord) {
      toast.promise(getDiscordUser(), {
        loading: null,
        success: (data) => {
          setUserDiscord({ ...data.data });
          setLoading(false);
          return null;
        },
        error: () => {
          setLoading(false);
          return null;
        },
      });
    }
  }, [code, userDiscord]);

  useEffect(() => {
    if (code) {
      setIsCodeAvailable(true);
      toast.promise(handleAuthDiscord(code), {
        loading: "Connecting to Discord...",
        success: (data) => {
          const user = data.discordUserDb;
          setUserDiscord({
            id: user.id,
            discordId: user.discordId,
            discordUsername: user.discordUsername,
            discordDiscriminator: user.discordDiscriminator,
          });
          setLoading(false);
          setError(null);
          setIsCodeAvailable(false);
          router.push("/dashboard/automation-tools");
          return "Connected to Discord!";
        },
        error: () => {
          setIsCodeAvailable(false);
          setLoading(false);
          setError("Error connecting to Discord");
          return "Error connecting to Discord";
        },
      });
    }
  }, [code, router]);

  if (loading) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Loading...</h1>
        <p className="text-lg mt-4">Please wait while we load your data.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Error</h1>
        <p className="text-lg mt-4">{error}</p>
      </div>
    );
  }

  if (userDiscord) {
    return (
      <div className="text-white p-10">
        <ConnectedDiscordCard
          username={userDiscord.discordUsername}
          discriminator={userDiscord.discordDiscriminator}
        />
      </div>
    );
  }

  return (
    <div className="p-10">
      <Link href="https://discord.com/oauth2/authorize?client_id=1374068197539713216&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard%2Fautomation-tools&scope=identify">
        <button
          className={`text-white ${
            isCodeAvailable ? "bg-[#4a40a4]" : "bg-[#3b2fa9]"
          }  rounded-2xl text-lg font-semibold px-3 py-3 flex gap-4 items-center cursor-pointer`}
          disabled={isCodeAvailable}
        >
          {isCodeAvailable && <FontAwesomeIcon icon={faSpinner} spinPulse />}
          Connect to discord
        </button>
      </Link>
    </div>
  );
}

export default MainContent;
