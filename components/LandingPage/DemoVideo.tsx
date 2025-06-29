"use client";

export function DemoVideo() {
  return (
    <>
      {/* <!-- ===== Demo Video Start ===== --> */}
      <section
        id="demo"
        className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0"
      >
        <div className="max-w-c-1390 mx-auto">
          {/* Section Header */}
          <div className="mb-15 text-center">
            <h2 className="mb-4 text-7xl font-bold text-black lg:text-5xl xl:text-6xl dark:text-white">
              See it in Action
            </h2>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Watch how easy it is to reconcile your bank statements in minutes
            </p>
          </div>

          {/* Video Container */}
          <div className="relative mx-auto max-w-4xl">
            {/* Video Background with gradient */}
            <div className="shadow-solid-8 dark:shadow-solid-2 relative overflow-hidden rounded-lg bg-gradient-to-br from-[#F8F9FF] to-[#DEE7FF] p-6 dark:from-[#1A1A1A] dark:to-[#2A2A2A]">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

              {/* Video player */}
              <div className="relative z-10">
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "16/9" }}
                >
                  <video
                    className="shadow-solid-8 dark:shadow-solid-2 h-full w-full rounded-lg object-cover"
                    controls
                    preload="metadata"
                    poster="/public/images/video-thumbnail.png"
                    playsInline
                    muted
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                  >
                    <source src="/videos/Demo Video.mp4" type="video/mp4" />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Bottom description */}
            <div className="mt-8 text-center">
              <p className="text-body-color dark:text-body-color-dark text-sm">
                Upload your statements • Get instant matches • Export results
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Demo Video End ===== --> */}
    </>
  );
}
