import React from "react";

const SpotifyLogin = () => {
  const clientId = "965f2a5b91494dfa96339fc552e712db"; // 🔁 Replace this with your real client ID
  const redirectUri = "https://fusion-online.netlify.app/songs"; // Must match Spotify Dashboard settings

  const scopes = [
    "user-read-private",
    "user-read-email",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "playlist-read-private",
  ];

  const loginWithSpotify = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scopes.join(" "))}`;

    window.location.href = authUrl;
  };

  return (
    <div className="flex flex-col items-stretch justify-start w-full">
      <h2 className="text-4xl font-bold text-gradient-dark self-center mb-4">
        Connect with Spotify
      </h2>
      <button
        onClick={loginWithSpotify}
        className="px-6 py-3 glass text-white rounded hover:opacity-95 hover:scale-95 transition-all"
      >
        Login with Spotify
      </button>
    </div>
  );
};

export default SpotifyLogin;
