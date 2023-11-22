"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import StreamingMain from "@/components/StreamingMain";
import getAnimeResponse from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = ({ params: { id, slug } }) => {
  const [episode, setEpisode] = useState(1);
  const [videoLink, setVideoLink] = useState("");

  const fetchData = async () => {
    try {
      const animeData = await getAnimeResponse(`anime/${id}/${slug}`);
      setEpisode(animeData);
      setVideoLink(animeData.videoPlayer[`${slug}`].url);
      console.log(animeData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4">
        <Header route={`Nonton Anime > ${id} ${slug}`} />
        <div className="py-4 flex justify-end gap-4"></div>
        <StreamingMain videoLink={videoLink} />
      </div>
    </>
  );
};

export default Page;
