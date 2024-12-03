import React from "react";
import ReactPlayer from "react-player";

export default function Testimonials() {
  const Infertility = [
    "https://youtu.be/SptC-_KJ2ws",
    "https://youtu.be/Jy0gsA35bPU",
    "https://youtu.be/WWfVZsWlC_c"
  ];
  const Piles = [
    "https://youtu.be/BTy91ksYDmc",
    "https://youtu.be/S1T67xnoPGg",
    "https://youtu.be/sZP8YSNU_MU"
  ];
  const KidneyFailure = [
    "https://youtu.be/b4Ue4u0XMZ4",
    "https://youtu.be/RvM3pekjmRs",
    "https://youtu.be/LiEP9yngb30"
  ];
  const Mind = [
    "https://youtu.be/Ln5qpH6wIC8",
    "https://youtu.be/dPI5QYynvcY",
    "https://youtu.be/11xfJKY_SW8"
  ];
  const MultipleOrganFailure = [
    "https://youtu.be/YKVHja9SREw",
    "https://youtu.be/ke6i7dNSbYo",
    "https://youtu.be/pggBNX-QUD4"
  ];
  const AutoImmuneDisease = [
    "https://youtu.be/h-z-74ZFi88",
    "https://youtu.be/QrcL1ftFIdI",
    "https://youtu.be/KM7gUURRaIw"
  ];
  const Liver = [
    "https://youtu.be/_o_DY4elrLk",
    "https://youtu.be/vZ9t39miH64",
    "https://youtu.be/hnzZHc9d-PM"
  ];
  const ENT = [
    "https://youtu.be/2KogUXjsS3A",
    "https://youtu.be/owBZrc15VdM",
    "https://youtu.be/8MDTFfWD2Go"
  ];
  const Cancer = [
    "https://youtu.be/RRjOrIuO_9Q",
    "https://youtu.be/26M5y7aI_nM",
    "https://youtu.be/DR6wbqEz714"
  ];
  const allVideos = [
    Infertility,
    Piles,
    KidneyFailure,
    Mind,
    MultipleOrganFailure,
    AutoImmuneDisease,
    Liver,
    ENT,
    Cancer,
  ];
  const allVideosNames = [
    "Infertility",
    "Piles",
    "Kidney Failure",
    "Mind",
    "Multiple Organ Failure",
    "Auto Immune Disease",
    "Liver",
    "ENT",
    "Cancer",
  ];
  return (
    <div className="container">
      {allVideos.map((v, i) => (
        <>
          <h1 className="text-formate ml-4">{allVideosNames[i]}</h1>
          <div className="row m-4">
            {v.map((video, i) => (
              <div
                key={i}
                className="col-12 col-xl-4 mb-4 d-flex justify-content-center align-items-center"
              >
                <ReactPlayer width={330} height={200} url={video} />
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
