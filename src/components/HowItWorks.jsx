import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width="auto" height="auto" />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A complete ecosystem of IVD analyzers <br /> reagents & medical
            software.
          </h2>

          <p className="hiw-subtitle">There’s an product for every needs. </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Advance technology in hematology High processing speed with Alphatec
            hematology analyzers
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              <p>
                Alphatec Scientific 3 Part Diff, 22 Parameters. Only 2 Reagents.
                High Tech, Fast Performance. 42 Tests/Hour. Built-in thermal
                printer. Touch screen color display.
              </p>{" "}
              <span className="text-white">
                3 and 5 part diff analyzers for better identification of blood
                cell populations
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn">
              Alphatec Scientific{" "}
              <span className="text-white">
                Result of modern design for big laboratories.{" "}
              </span>
              110 Test / Hour. 34 Parameters. Sample Loader. Quality Control.{" "}
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">
              Multi angle scatter separation Friendly software
            </p>
            <p className="hiw-text">with Quality Control</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
