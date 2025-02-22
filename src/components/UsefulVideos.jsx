import React from "react";

const UsefulVideos = () => {
  return (
    <div>
      <h2>📹 Safety & Emergency Videos</h2>

      <div style={{ marginBottom: "20px" }}>
        <iframe
          width="400"
          height="225"
          src="https://www.youtube.com/embed/Vc7ZqtGNmTY"
          title="YouTube Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div>
        <iframe
          width="400"
          height="225"
          src="https://www.youtube.com/embed/qvf_74DM880"
          title="Safety Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

      </div>

    </div>
  );
};

export default UsefulVideos;
