"use client";
import Head from "next/head";
import { NavigationBar } from "../components/navigation/NavigationBar";
import { useState } from "react";

import { ReactTyped } from "react-typed";
import SectionIndicator from "../components/navigation/SectionIndicator";
import Image from "next/image";

import { TabsDefault } from "../components/navigation/Tabs";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    { label: "All", value: "All" },
    { label: "Frontend", value: "Frontend" },
    { label: "Mobile", value: "Mobile" },
    { label: "Design", value: "Design" },
  ];

  return (
    <>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta
          name="description"
          content="A portfolio showcasing my skills, projects, and experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />

      <SectionIndicator />

      <main className="flex flex-col items-center justify-center min-h-screen font-sans ">
        <section
          id="introduction"
          className="w-full flex flex-col lg:flex-row "
        >
          <div className="bg-custom-blue w-full lg:w-3/4 lg:p-30 p-4  py-10 flex flex-col justify-center h-[500px] lg:h-[700px]">
            <div className="container mx-auto w-[80%] lg:w-[60%]">
              <h1 className="text-custom-green  font-extrabold text-4xl lg:text-6xl pt-8 h-[180px] w-[40%] lg:w-[30%] lg:h-[250px]">
                <ReactTyped
                  strings={[
                    "Frontend Developer.",
                    "Mobile Apps Developer.",
                    "UI/UX Designer.",
                  ]}
                  typeSpeed={120}
                  backSpeed={80}
                  backDelay={3000}
                  loop
                />
              </h1>
              <p className="text-white lg:text-2xl lg:w-3/4 w-full ">
                I like to craft solid and scalable frontend and mobile products
                with great user experiences.
              </p>

              <div className="flex flex-row pt-10 lg:pt-20 lg:w-[80%] justify-between">
                <div className="w-full md:w-1/2 py-2 lg:w-[40%]">
                  <p className="text-xs lg:text-lg font-semibold leading-tight text-gradient-orange text-custom-green ">
                    Highly skilled at progressive enhancement, design systems &
                    UI Engineering.
                  </p>
                </div>
                <div className="w-full md:w-1/2 py-2 lg:w-[40%] ">
                  <p className="text-xs lg:text-lg font-semibold leading-tight text-custom-green">
                    Proven experience building successful products for clients
                    across different domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-custom-green w-full lg:w-[40.1%] lg:flex lg:flex-col lg:justify-center">
            <div className="flex justify-center items-center lg:absolute  lg:top-[40%] lg:left-[] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 p-10 lg:p-0">
              <Image
                src="/profile2.jpeg"
                alt="Your Photo"
                className="rounded-none"
                width={350}
                height={300}
              />
            </div>
          </div>
        </section>

        <section id="about-me" className="w-full bg-white">
          <div className="w-full bg-white">
            {/* Technologies section */}
            <div className="w-full bg-white py-6 lg:py-28">
              <div className="container mx-auto px-10 lg:px-0 w-full lg:w-3/4">
                <div className="flex flex-col space-y-8 lg:space-y-0">
                  <div className="flex flex-col lg:flex-row lg:justify-start lg:space-x-4 w-full">
                    <div className="w-full lg:w-1/2 p-4 pt-8 flex flex-col items-start">
                      <h3 className="text-custom-blue text-start text-3xl font-extrabold mb-4 lg:text-5xl ">
                        Frontend
                      </h3>
                      <p className="text-custom-purple text-start text-sm lg:text-lg">
                        Diving headfirst into the world of frontend development,
                        I thrive on crafting responsive and interactive user
                        interfaces that not only perform flawlessly but also
                        prioritize accessibility. With every line of code, I aim
                        to bridge the gap between technology and usability,
                        ensuring that digital experiences are seamless and
                        enjoyable for all users.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end lg:justify-end lg:space-x-4 w-full">
                    <div className="w-full lg:w-1/2 p-4 flex flex-col items-start">
                      <h3 className="text-custom-blue text-3xl font-extrabold mb-4 lg:text-5xl ">
                        Mobile
                      </h3>
                      <p className="text-custom-purple text-start text-sm lg:text-lg">
                        As a mobile developer, I&apos;m passionate about
                        bringing ideas to life on the go. I specialize in
                        developing cross-platform mobile applications that offer
                        smooth user experiences and unmatched functionality.
                        Whether it&apos;s iOS or Android, my goal is to create
                        apps that resonate with users, providing them with tools
                        and services that enrich their daily lives.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:justify-start lg:space-x-4 w-full">
                    <div className="w-full lg:w-1/2 p-4 flex flex-col items-start">
                      <h3 className="text-custom-blue text-3xl font-extrabold mb-4 lg:text-5xl ">
                        Design
                      </h3>
                      <p className="text-custom-purple text-start text-sm lg:text-lg">
                        I&apos;m probably not the typical designer positioned
                        behind an Illustrator artboard adjusting pixels, but I
                        design. I utilize tools like Figma and Canva to create
                        intuitive and visually appealing interfaces that enhance
                        user engagement and satisfaction. My goal is to ensure
                        that every design decision contributes to a fluent and
                        enjoyable user experience while maintaining a modern and
                        fashionable aesthetic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Over the Years Section */}
            <div className="bg-custom-blue  p-8 mt-8  lg:py-40 flex flex-col items-center">
              <div className="container mx-auto  w-full lg:w-3/4">
                <h2 className="lg:text-6xl font-extrabold text-4xl text-custom-green mb-4 lg:mb-12">
                  Over the years,
                </h2>

                <div className="flex flex-col lg:flex-row gap-4 lg:justify-between">
                  <div className="flex flex-col items-start gap-4  text-sm lg:text-lg lg:w-[80%]">
                    <p className="text-white text-start ">
                      I&apos;ve built products for companies and businesses
                      around the globe ranging from marketing websites to
                      complex solutions and enterprise apps with a focus on
                      fast, elegant, and accessible user experiences.
                    </p>

                    <p className="text-white  text-start">
                      Currently, I work at TAJJI LTD as the team lead for mobile
                      development. My role involves overseeing the development
                      of the Tajji Boma mobile application, ensuring that it
                      provides seamless and intuitive experiences for managing
                      residential and commercial properties.
                    </p>

                    <p className="text-white  text-start ">
                      Before becoming the mobile team lead, I started at TAJJI
                      LTD as a frontend engineering intern. During my
                      internship, I worked on developing the landing page and
                      the Progressive Web App (PWA) for Tajji Boma, using
                      SvelteKit, Tailwind CSS, TypeScript, and JavaScript.
                    </p>

                    <p className="text-white  text-start ">
                      As a freelance UI/UX Designer, I worked with 10xbeast, an
                      AI-powered email marketing platform. My role involved
                      creating designs on Figma that met user goals and
                      contributed to the product&apos;s success. The platform
                      helps businesses create effective marketing emails using
                      AI.
                    </p>

                    <p className="text-white  text-start">
                      At Golden Heart Nursing, I served as a Frontend Developer.
                      I utilized JavaScript, Tailwind CSS, and TypeScript with
                      Svelte to build their website. The focus was on delivering
                      a highly responsive and user-friendly web application that
                      enhanced accessibility for their healthcare staffing
                      services.
                    </p>

                    <a
                      href="/Lazarus_Mugo.pdf"
                      download
                      className="relative items-start justify-start inline-block px-6 py-3 my-6 text-custom-green border border-custom-green hover:text-custom-blue font-bold overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-custom-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                      <span className="relative">Download Resume</span>
                    </a>
                  </div>
                  {/* <Image
                    src="/profile2.jpeg"
                    alt="Your Photo"
                    className="rounded-none"
                    width={350}
                    height={300}
                  /> */}
                  <svg
                    className="w-full h-auto"
                    viewBox="0 0 834 690"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <svg
                      width="834"
                      height="690"
                      viewBox="0 0 834 690"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="undraw_dev_productivity_umsq 1"
                        clip-path="url(#clip0)"
                      >
                        <g
                          id="man"
                          className="animate-manBody"
                          style={{
                            transformBox: "fill-box",
                            transformOrigin: "bottom",
                          }}
                        >
                          <path
                            id="Vector"
                            d="M435.922 191.941C476.534 191.941 509.458 159.018 509.458 118.405C509.458 77.7923 476.534 44.869 435.922 44.869C395.309 44.869 362.385 77.7923 362.385 118.405C362.385 159.018 395.309 191.941 435.922 191.941Z"
                            fill="#A0616A"
                          />
                          <path
                            id="Vector_2"
                            d="M381.036 155.173C381.036 155.173 394.891 259.616 373.576 271.339C352.261 283.062 500.399 284.128 500.399 284.128C500.399 284.128 467.361 193.54 482.281 165.831L381.036 155.173Z"
                            fill="#A0616A"
                          />
                          <path
                            id="Vector_3"
                            d="M608.57 284.656L596.25 340.756L570.2 459.446L569.42 465.946L560.43 541.196L554.45 591.186L550.44 624.766C526.06 637.296 508.39 645.946 508.39 645.946C508.39 645.946 506.87 638.326 504.42 628.576C487.31 633.706 455.65 642.216 428.82 643.916C438.59 654.806 443.08 665.036 436.99 672.586C418.61 695.346 342.73 647.666 316.19 629.886C315.572 634.143 315.338 638.447 315.49 642.746L295.18 627.126L297.19 591.186L300.58 530.376L304.84 454.116C303.497 450.851 302.371 447.5 301.47 444.086C295.25 421.966 287.7 377.796 281.91 340.756C277.25 310.946 273.75 285.756 273.01 280.396C272.91 279.696 272.86 279.336 272.86 279.336L385.29 229.656C393.28 248.186 430.59 253.756 430.59 253.756C461.5 251.626 485.73 235.326 485.73 235.326L608.57 284.656Z"
                            fill="#D0CDE1"
                          />
                          <path
                            id="Vector_4"
                            d="M374.746 48.8468L360.997 43.3423C360.997 43.3423 389.746 11.6915 429.744 14.4439L418.494 2.05865C418.494 2.05865 445.993 -8.95021 470.992 19.9482C484.134 35.1394 499.339 52.996 508.817 73.1112H523.542L517.396 86.643L538.906 100.175L516.828 97.7442C518.144 105.154 518.346 112.719 517.428 120.189C516.48 127.661 512.667 134.473 506.793 139.187C506.793 139.187 489.741 103.891 489.741 98.387V112.148C489.741 112.148 475.992 99.7631 475.992 91.5065L468.492 101.139L464.742 86.0019L418.494 101.139L425.994 88.7543L397.245 92.8826L408.495 77.7452C408.495 77.7452 375.997 95.6348 374.746 110.772C373.497 125.909 363.984 140.253 363.984 140.253C363.984 140.253 338.498 69.4885 374.746 48.8468Z"
                            fill="#2F2E41"
                          />
                          <g id="rightHand">
                            <path
                              id="Vector_5"
                              d="M516.92 624.636C516.92 624.636 512.16 626.266 504.42 628.576C487.31 633.706 455.65 642.216 428.82 643.916C405.72 645.396 386.2 641.836 382.63 626.766C381.1 620.286 383.27 614.956 388 610.576C402.12 597.486 439 592.796 468.25 591.186C476.51 590.736 484.15 590.526 490.51 590.446C501.31 590.306 508.39 590.526 508.39 590.526L508.56 591.186L516.92 624.636Z"
                              fill="#A0616A"
                            />
                            <path
                              id="Vector_6"
                              d="M688.5 542.566C681.01 550.686 662.45 562.916 639.95 576.156C631.58 581.076 622.67 586.146 613.58 591.186C591.89 603.216 569.18 615.136 550.44 624.766C526.06 637.296 508.39 645.946 508.39 645.946C508.39 645.946 506.87 638.326 504.42 628.576C501.14 615.526 496.2 598.656 491.05 591.186C490.87 590.926 490.69 590.686 490.51 590.446C489.01 588.476 487.5 587.326 486.01 587.326L560.43 541.196L592.59 521.256L569.42 465.946L540.36 396.566L557.9 340.756L575.53 284.656H608.57C608.57 284.656 619.51 308.536 633.5 341.836C635.59 346.816 637.75 352.006 639.95 357.366C668.73 427.366 704.61 525.116 688.5 542.566Z"
                              fill="#D0CDE1"
                            />
                          </g>
                          <g id="leftHand">
                            <path
                              id="Vector_7"
                              d="M436.99 672.586C418.61 695.346 342.73 647.666 316.19 629.886C310.41 626.016 306.97 623.566 306.97 623.566L331.25 591.186L338.94 580.936C338.94 580.936 345.82 584.586 355.99 590.526C356.36 590.746 356.73 590.966 357.11 591.186C365.88 596.336 376.89 603.066 388 610.576C403.33 620.946 418.83 632.776 428.82 643.916C438.59 654.806 443.08 665.036 436.99 672.586Z"
                              fill="#A0616A"
                            />
                            <path
                              id="Vector_8"
                              d="M355.99 590.526C353.276 590.516 350.567 590.736 347.89 591.186C324.9 595.136 318.12 615.946 316.19 629.886C315.572 634.143 315.338 638.447 315.49 642.746L295.18 627.126L287.78 621.436C269.97 615.226 254.1 604.196 240.34 591.186C228.403 579.7 217.695 567.001 208.39 553.296C199.122 539.788 190.86 525.616 183.67 510.896C181.664 506.788 180.586 502.29 180.512 497.719C180.437 493.148 181.369 488.617 183.24 484.446L208.39 428.396L245.15 346.476C245.42 344.526 245.717 342.619 246.04 340.756C253.33 298.956 272.86 280.396 272.86 280.396H287.78L297.76 340.756L310.16 415.746L301.47 444.086L281.39 509.536L300.58 530.376L355.99 590.526Z"
                              fill="#D0CDE1"
                            />
                          </g>
                          <path
                            id="Vector_9"
                            d="M372.877 415.806L385.631 430.687C390.37 429.783 395.319 428.721 400.416 427.529L396.752 415.806L405.71 426.256C459.707 412.976 526.637 387.155 526.637 387.155C526.637 387.155 454.38 392.453 400.428 380.666C376.558 375.451 351.998 387.284 342.202 409.669C336.509 422.679 337.403 433.952 357.596 433.952C364.419 433.835 371.224 433.195 377.949 432.037L372.877 415.806Z"
                            fill="#6C63FF"
                          />
                        </g>
                        <g id="allOther">
                          <path
                            id="Vector_10"
                            d="M663.65 660.386V666.456C663.654 668.122 663.345 669.774 662.74 671.326C662.472 672.018 662.147 672.687 661.77 673.326C660.579 675.327 658.887 676.983 656.863 678.133C654.838 679.283 652.549 679.887 650.22 679.886H203.67C201.342 679.887 199.053 679.283 197.028 678.133C195.003 676.983 193.312 675.327 192.12 673.326C191.743 672.687 191.419 672.018 191.15 671.326C190.546 669.774 190.237 668.122 190.24 666.456V660.386C190.24 658.622 190.587 656.876 191.262 655.246C191.936 653.616 192.926 652.136 194.173 650.889C195.42 649.641 196.901 648.652 198.53 647.977C200.16 647.303 201.907 646.956 203.67 646.956H229.41V644.126C229.41 644.053 229.425 643.98 229.453 643.912C229.481 643.844 229.522 643.782 229.574 643.73C229.626 643.678 229.688 643.637 229.756 643.608C229.824 643.58 229.897 643.566 229.97 643.566H243.4C243.474 643.566 243.547 643.58 243.615 643.608C243.683 643.637 243.745 643.678 243.797 643.73C243.849 643.782 243.89 643.844 243.918 643.912C243.946 643.98 243.96 644.053 243.96 644.126V646.956H252.35V644.126C252.35 644.053 252.365 643.98 252.393 643.912C252.421 643.844 252.462 643.782 252.514 643.73C252.566 643.678 252.628 643.637 252.696 643.608C252.764 643.58 252.837 643.566 252.91 643.566H266.34C266.414 643.566 266.487 643.58 266.555 643.608C266.623 643.637 266.684 643.678 266.736 643.73C266.789 643.782 266.83 643.844 266.858 643.912C266.886 643.98 266.9 644.053 266.9 644.126V646.956H275.3V644.126C275.3 644.053 275.315 643.98 275.343 643.912C275.371 643.844 275.412 643.782 275.464 643.73C275.516 643.678 275.578 643.637 275.646 643.608C275.714 643.58 275.787 643.566 275.86 643.566H289.29C289.364 643.566 289.437 643.58 289.505 643.608C289.573 643.637 289.634 643.678 289.687 643.73C289.739 643.782 289.78 643.844 289.808 643.912C289.836 643.98 289.85 644.053 289.85 644.126V646.956H298.24V644.126C298.24 644.053 298.255 643.98 298.283 643.912C298.311 643.844 298.352 643.782 298.404 643.73C298.456 643.678 298.518 643.637 298.586 643.608C298.654 643.58 298.727 643.566 298.8 643.566H312.23C312.304 643.566 312.377 643.58 312.445 643.608C312.513 643.637 312.574 643.678 312.626 643.73C312.679 643.782 312.72 643.844 312.748 643.912C312.776 643.98 312.79 644.053 312.79 644.126V646.956H321.18V644.126C321.18 644.053 321.195 643.98 321.223 643.912C321.251 643.844 321.292 643.782 321.344 643.73C321.396 643.678 321.458 643.637 321.526 643.608C321.594 643.58 321.667 643.566 321.74 643.566H335.17C335.244 643.566 335.317 643.58 335.385 643.608C335.453 643.637 335.514 643.678 335.566 643.73C335.619 643.782 335.66 643.844 335.688 643.912C335.716 643.98 335.73 644.053 335.73 644.126V646.956H344.13V644.126C344.13 644.053 344.145 643.98 344.173 643.912C344.201 643.844 344.242 643.782 344.294 643.73C344.346 643.678 344.408 643.637 344.476 643.608C344.544 643.58 344.617 643.566 344.69 643.566H358.12C358.194 643.566 358.267 643.58 358.335 643.608C358.403 643.637 358.464 643.678 358.516 643.73C358.569 643.782 358.61 643.844 358.638 643.912C358.666 643.98 358.68 644.053 358.68 644.126V646.956H367.07V644.126C367.07 644.053 367.085 643.98 367.113 643.912C367.141 643.844 367.182 643.782 367.234 643.73C367.286 643.678 367.348 643.637 367.416 643.608C367.484 643.58 367.557 643.566 367.63 643.566H472.83C472.904 643.566 472.977 643.58 473.045 643.608C473.113 643.637 473.174 643.678 473.227 643.73C473.279 643.782 473.32 643.844 473.348 643.912C473.376 643.98 473.39 644.053 473.39 644.126V646.956H481.79V644.126C481.79 644.053 481.805 643.98 481.833 643.912C481.861 643.844 481.902 643.782 481.954 643.73C482.006 643.678 482.068 643.637 482.136 643.608C482.204 643.58 482.277 643.566 482.35 643.566H495.78C495.928 643.568 496.07 643.627 496.175 643.732C496.279 643.836 496.339 643.978 496.34 644.126V646.956H504.73V644.126C504.73 644.053 504.745 643.98 504.773 643.912C504.801 643.844 504.842 643.782 504.894 643.73C504.946 643.678 505.008 643.637 505.076 643.608C505.144 643.58 505.217 643.566 505.29 643.566H518.72C518.794 643.566 518.867 643.58 518.935 643.608C519.003 643.637 519.065 643.678 519.117 643.73C519.169 643.782 519.21 643.844 519.238 643.912C519.266 643.98 519.28 644.053 519.28 644.126V646.956H527.67V644.126C527.67 644.053 527.685 643.98 527.713 643.912C527.741 643.844 527.782 643.782 527.834 643.73C527.886 643.678 527.948 643.637 528.016 643.608C528.084 643.58 528.157 643.566 528.23 643.566H541.66C541.734 643.566 541.807 643.58 541.875 643.608C541.943 643.637 542.005 643.678 542.057 643.73C542.109 643.782 542.15 643.844 542.178 643.912C542.206 643.98 542.22 644.053 542.22 644.126V646.956H550.62V644.126C550.62 644.053 550.635 643.98 550.663 643.912C550.691 643.844 550.732 643.782 550.784 643.73C550.836 643.678 550.898 643.637 550.966 643.608C551.034 643.58 551.107 643.566 551.18 643.566H564.61C564.757 643.568 564.898 643.628 565.001 643.733C565.104 643.838 565.161 643.979 565.16 644.126V646.956H573.56V644.126C573.56 644.053 573.575 643.98 573.603 643.912C573.631 643.844 573.672 643.782 573.724 643.73C573.776 643.678 573.838 643.637 573.906 643.608C573.974 643.58 574.047 643.566 574.12 643.566H587.55C587.624 643.566 587.697 643.58 587.765 643.608C587.833 643.637 587.895 643.678 587.947 643.73C587.999 643.782 588.04 643.844 588.068 643.912C588.096 643.98 588.111 644.053 588.11 644.126V646.956H596.5V644.126C596.5 644.053 596.515 643.98 596.543 643.912C596.571 643.844 596.612 643.782 596.664 643.73C596.716 643.678 596.778 643.637 596.846 643.608C596.914 643.58 596.987 643.566 597.06 643.566H610.49C610.564 643.566 610.637 643.58 610.705 643.608C610.773 643.637 610.835 643.678 610.887 643.73C610.939 643.782 610.98 643.844 611.008 643.912C611.036 643.98 611.051 644.053 611.05 644.126V646.956H650.22C651.984 646.956 653.731 647.303 655.36 647.977C656.99 648.652 658.471 649.641 659.718 650.889C660.965 652.136 661.954 653.616 662.629 655.246C663.304 656.876 663.651 658.622 663.65 660.386Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_11"
                            d="M833.5 671.326H60.5002V673.326H833.5V671.326Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_12"
                            d="M627.695 404.757H461.252V401.326H385.78V404.757H218.651C215.665 404.757 212.801 405.943 210.69 408.054C208.579 410.166 207.392 413.029 207.392 416.015V643.927C207.392 646.913 208.578 649.776 210.69 651.888C212.801 653.999 215.665 655.185 218.651 655.185H627.695C630.68 655.185 633.544 653.999 635.656 651.888C637.767 649.776 638.953 646.913 638.953 643.927V416.015C638.953 414.537 638.662 413.073 638.096 411.707C637.53 410.341 636.701 409.1 635.656 408.054C634.61 407.009 633.369 406.179 632.003 405.614C630.637 405.048 629.173 404.757 627.695 404.757Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_13"
                            d="M108.446 661.223H80.446V689.223H108.446V661.223Z"
                            fill="#D0CDE1"
                          />
                          <path
                            id="Vector_14"
                            d="M91.45 639.223V673.223H125.45V639.223H91.45ZM123.97 671.743H92.92V640.703H123.97V671.743Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_15"
                            d="M756.446 661.223H728.446V689.223H756.446V661.223Z"
                            fill="#D0CDE1"
                          />
                          <path
                            id="Vector_16"
                            d="M739.45 639.223V673.223H773.45V639.223H739.45ZM771.97 671.743H740.92V640.703H771.97V671.743Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_17"
                            d="M94.5801 230.113C138.399 230.113 173.921 194.591 173.921 150.773C173.921 106.954 138.399 71.4324 94.5801 71.4324C50.7616 71.4324 15.2396 106.954 15.2396 150.773C15.2396 194.591 50.7616 230.113 94.5801 230.113Z"
                            fill="#6C63FF"
                          />
                          <path
                            id="Vector_18"
                            d="M122.229 56.49C115.045 55.5764 107.775 55.5764 100.591 56.49C84.5863 58.5914 69.5206 65.2399 57.1812 75.6466C44.8419 86.0533 35.747 99.7814 30.9756 115.202C28.8056 122.229 27.5767 129.514 27.3211 136.864C27.2851 137.886 27.261 138.92 27.261 139.954C27.2833 162.265 36.1561 183.655 51.9323 199.431C67.7084 215.208 89.0991 224.08 111.41 224.103C113.201 224.103 114.992 224.043 116.759 223.934C120.908 223.674 125.03 223.103 129.093 222.227C148.495 218.055 165.798 207.161 177.947 191.468C190.096 175.776 196.308 156.295 195.487 136.467C194.666 116.638 186.864 97.7381 173.459 83.104C160.054 68.4699 141.909 59.0436 122.229 56.49H122.229ZM137.748 217.347H137.736C130.959 219.659 123.905 221.062 116.759 221.518C114.992 221.638 113.201 221.698 111.41 221.698C89.7379 221.672 68.9613 213.051 53.6369 197.727C38.3126 182.402 29.6917 161.626 29.6652 139.954C29.6652 138.92 29.6892 137.886 29.7253 136.864C30.5517 115.744 39.5159 95.7617 54.7414 81.1009C69.9669 66.4401 90.2733 58.2371 111.41 58.209C130.776 58.2101 149.513 65.0866 164.283 77.6132C179.052 90.1399 188.895 107.503 192.057 126.61C195.22 145.716 191.496 165.325 181.55 181.942C171.604 198.559 156.082 211.106 137.748 217.347H137.748Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_19"
                            d="M112.612 63.0175H110.208V79.8473H112.612V63.0175Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_20"
                            d="M57.8578 84.7016L56.1577 86.4017L68.0582 98.3021L69.7582 96.6021L57.8578 84.7016Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_21"
                            d="M34.4738 138.752V141.156H51.3035V138.752H34.4738Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_22"
                            d="M56.1577 193.506L57.8578 195.206L69.7582 183.305L68.0582 181.605L56.1577 193.506Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_23"
                            d="M153.061 96.602L154.762 98.3021L166.662 86.4016L164.962 84.7016L153.061 96.602Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_24"
                            d="M171.516 138.752V141.156H188.346V138.752H171.516Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_25"
                            d="M154.762 181.605L153.061 183.305L164.962 195.206L166.662 193.506L154.762 181.605Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_26"
                            d="M112.612 200.06H110.208V216.89H112.612V200.06Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_27"
                            d="M122.229 35.3686H100.591V57.0069H122.229V35.3686Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_28"
                            d="M111.41 38.975C127.344 38.975 140.261 34.4002 140.261 28.7569C140.261 23.1136 127.344 18.5388 111.41 18.5388C95.4759 18.5388 82.5588 23.1136 82.5588 28.7569C82.5588 34.4002 95.4759 38.975 111.41 38.975Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_29"
                            d="M226 220.44H0V222.844H226V220.44Z"
                            fill="#3F3D56"
                          />
                        </g>
                        <g
                          id="clock"
                          className="animate-clockHand  "
                          style={{
                            transformBox: "fill-box",
                            transformOrigin: "bottom",
                          }}
                        >
                          <path
                            id="Vector_30"
                            d="M115.016 94.2729H107.803V135.145H115.016V94.2729Z"
                            fill="#3F3D56"
                          />
                          <path
                            id="Vector_31"
                            d="M115.016 135.145C113.976 134.365 112.71 133.943 111.41 133.943C110.109 133.943 108.844 134.365 107.803 135.145C107.091 135.686 106.505 136.375 106.084 137.165C105.552 138.181 105.322 139.329 105.421 140.473C105.52 141.616 105.944 142.707 106.643 143.617C107.343 144.527 108.288 145.218 109.368 145.608C110.447 145.998 111.616 146.07 112.735 145.817C113.855 145.564 114.878 144.996 115.685 144.179C116.492 143.363 117.048 142.333 117.288 141.211C117.528 140.088 117.441 138.921 117.039 137.846C116.636 136.771 115.934 135.834 115.016 135.145H115.016ZM111.41 143.56C110.454 143.557 109.539 143.176 108.863 142.501C108.187 141.825 107.806 140.909 107.803 139.954C107.808 139.224 108.03 138.513 108.441 137.91C108.793 137.4 109.271 136.989 109.828 136.718C110.385 136.447 111.003 136.324 111.622 136.361C112.241 136.398 112.84 136.595 113.361 136.931C113.881 137.267 114.306 137.732 114.595 138.281C114.883 138.83 115.025 139.444 115.007 140.063C114.988 140.683 114.811 141.288 114.49 141.818C114.17 142.349 113.718 142.788 113.179 143.093C112.639 143.399 112.03 143.559 111.41 143.56V143.56Z"
                            fill="#3F3D56"
                          />
                        </g>
                        <g
                          id="leftTree"
                          className="animate-tree"
                          style={{
                            transformBox: "fill-box",
                            transformOrigin: "bottom",
                          }}
                        >
                          <path
                            id="Vector_32"
                            d="M150.594 599.754C151.527 631.704 132.859 643.413 109.43 644.097C108.886 644.113 108.345 644.123 107.805 644.126C106.719 644.135 105.643 644.117 104.577 644.072C83.3891 643.193 66.6173 631.945 65.7495 602.232C64.8515 571.482 103.018 531.529 105.882 528.574L105.887 528.571C105.996 528.458 106.052 528.402 106.052 528.402C106.052 528.402 149.661 567.807 150.594 599.754Z"
                            fill="#D0CDE1"
                          />
                          <path
                            id="Vector_33"
                            d="M107.744 639.255L122.626 617.124L107.774 641.636L107.805 644.126C106.719 644.135 105.643 644.117 104.577 644.072L105.316 612.06L105.295 611.813L105.323 611.766L105.393 608.741L89.0953 585.078L105.374 606.477L105.432 607.116L105.989 582.93L91.9123 558.397L106.029 578.681L105.882 528.574L105.882 528.407L105.887 528.571L106.822 568.062L119.651 552.021L106.864 571.464L107.144 593.098L118.949 571.984L107.187 596.279L107.343 608.309L124.512 578.897L107.395 612.505L107.744 639.255Z"
                            fill="#3F3D56"
                          />
                        </g>
                        <g
                          id="righTree"
                          className="animate-tree"
                          style={{
                            transformBox: "fill-box",
                            transformOrigin: "bottom",
                          }}
                        >
                          <path
                            id="Vector_34"
                            d="M798.594 599.754C799.527 631.704 780.859 643.413 757.43 644.097C756.886 644.113 756.345 644.123 755.805 644.126C754.719 644.135 753.643 644.117 752.577 644.072C731.389 643.193 714.617 631.945 713.75 602.232C712.852 571.482 751.018 531.529 753.882 528.574L753.887 528.571C753.996 528.458 754.052 528.402 754.052 528.402C754.052 528.402 797.661 567.807 798.594 599.754Z"
                            fill="#D0CDE1"
                          />
                          <path
                            id="Vector_35"
                            d="M755.744 639.255L770.626 617.124L755.774 641.636L755.805 644.126C754.719 644.135 753.643 644.117 752.577 644.072L753.316 612.06L753.295 611.813L753.323 611.766L753.393 608.741L737.095 585.078L753.374 606.477L753.432 607.116L753.989 582.93L739.912 558.397L754.029 578.681L753.882 528.574L753.882 528.407L753.887 528.571L754.822 568.062L767.651 552.021L754.864 571.464L755.144 593.098L766.949 571.984L755.187 596.279L755.343 608.309L772.512 578.897L755.395 612.505L755.744 639.255Z"
                            fill="#3F3D56"
                          />
                        </g>
                        <g id="pc-circle" className="animate-changeLight">
                          <path
                            id="Vector_36"
                            d="M422.5 512.326C436.307 512.326 447.5 501.133 447.5 487.326C447.5 473.519 436.307 462.326 422.5 462.326C408.693 462.326 397.5 473.519 397.5 487.326C397.5 501.133 408.693 512.326 422.5 512.326Z"
                            fill="#3F3D56"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="833.5" height="689.223" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full p-8 bg-gray-200">
          <div className="container mx-auto px-4 lg:px-0 py-12 lg:py-20">
            <div className="text-center mb-10 lg:mb-20">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-custom-blue mb-4">
                I build & design stuff
              </h2>
              <p className="text-lg lg:text-xl text-custom-purple">
                Selected work I&apos;ve taken on in the past.
              </p>
            </div>

            <TabsDefault />
          </div>
        </section>

        <section id="contact-me" className="w-full p-8 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-0 py-12 lg:py-20">
            <div className="text-center mb-10 lg:mb-20">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-custom-blue mb-4">
                Send me a message!
              </h2>
              <p className="text-lg lg:text-xl text-custom-purple">
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>
            </div>

            <form
              action="https://formsubmit.co/mugolazarusk@gmail.com"
              method="POST"
              className="space-y-8 lg:w-1/2 mx-auto"
            >
              <input
                type="hidden"
                name="_next"
                value="https://lazarusmugo.github.io"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div className="lg:flex lg:space-x-8">
                <div className="lg:flex-1">
                  <label
                    className="block text-md font-medium text-custom-purple mb-4  lg:text-lg"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full border-b-2 border-custom-purple placeholder-gray-600 focus:border-custom-blue  focus:outline-none bg-transparent text-custom-blue h-12 lg:h-16 text-lg"
                    required
                  />
                </div>

                <div className="lg:flex-1 pt-8 lg:pt-0">
                  <label
                    className="block text-md lg:text-lg font-medium text-custom-purple mb-4"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full border-b-2 border-custom-purple placeholder-gray-600 focus:border-custom-blue focus:outline-none bg-transparent text-custom-blue h:12 lg:h-16 text-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-md font-medium text-custom-purple mb-4  lg:text-lg"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi, I think we need a landing page at Company X. How soon can you hop on to discuss this?"
                  className="w-full border-b-2 border-custom-purple placeholder-gray-600 focus:border-custom-blue focus:outline-none h-28 lg:h-14 bg-transparent text-custom-blue text:lg"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="relative inline-block px-20 py-5 mt-6 text-custom-blue border border-custom-blue hover:text-white font-bold overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-custom-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative">Shoot</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="w-full p-4 bg-custom-purple text-white text-center">
          <p>
            &copy; {new Date().getFullYear()} Mugo Lazarus. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
};

export default Portfolio;
