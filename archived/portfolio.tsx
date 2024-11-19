import Particles from "@/components/Misc/ParticleComp";
import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import { darkPrimary1, lightPrimary1, lightPrimary2 } from "@/constants/color";
import getScrollAnimation from "@/utils/getScrollAnimation";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useEffect, useMemo, useState } from "react";
import { MdOutlineLink } from "react-icons/md";
import { TbHexagonFilled } from "react-icons/tb";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function portfolio({ isOpen: open }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const primary1 = useColorModeValue(lightPrimary1, darkPrimary1);

  const primary2 = useColorModeValue(lightPrimary2, darkPrimary1);

  const detailsDesc = useColorModeValue(lightPrimary1, "#FFFFFF");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [hoveredDiv, setHoveredDiv] = useState<null | number>(null);

  const [clickedDiv, setClickedDiv] = useState<null | number>(null);

  const handleMouseEnter = (divId: number) => setHoveredDiv(divId);

  const { colorMode } = useColorMode();

  const [deviceType, setDeviceType] = useState(0);

  useEffect(() => {
    fetch("/api/device")
      .then((response) => response.json())
      .then((data) => {
        setDeviceType(data.deviceType);
      });
  }, []);

  const handleDivClick = (divId: number) => {
    setClickedDiv(divId);
    onOpen();
  };

  const handleMouseLeave = () => setHoveredDiv(null);

  return (
    <div
      className={`max-w-screen-2xl mt-12 xl:mt-[5%] lg:mt-[15%] md:mt-[10%] px-6 xl:px-16 mx-auto overflow-x-hidden`}
      style={{
        filter: open ? "blur(2px)" : "none",
        transition: "filter 0.3s ease-in-out",
      }}
    >
      <Particles />
      <ScrollAnimationWrapper
        className={`flex justify-start items-center ${roboto.className}`}
      >
        <motion.div
          variants={scrollAnimation}
          initial={{
            y: 150,
            opacity: 0,
          }}
          animate={{
            y: 50,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 2,
            },
          }}
          className={`flex w-full flex-col justify-center items-start gap-10 ${roboto.className}`}
        >
          <div className="flex flex-col justify-center items-start lg:items-start gap-6 lg:gap-16 w-full max-w-3xl">
            <div className="flex flex-col justify-start items-start">
              <h1
                className="text-4xl lg:text-5xl font-extrabold"
                style={{
                  color: primary2,
                }}
              >
                My
              </h1>
              <div className="flex flex-col lg:flex-row justify-center items-start lg:items-end lg:gap-20 text-[#445964] max-w-2xl">
                <h1 className="text-4xl lg:text-5xl font-extrabold ">
                  Portfolio
                </h1>
                <h4
                  className="text-lg lg:text-xl font-semibold"
                  style={{
                    color: primary1,
                  }}
                >
                  These are some of the works and projects I have already
                  carried out
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full pt-0 lg:pt-10">
            <div
              className={`flex  w-full flex-col items-center justify-center ${roboto.className}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  onClick={() => handleDivClick(1)}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                  className={`flex relative justify-center items-center rounded-2xl shadow-md row-span-3 lg:row-span-6 w-[calc(100vw-50px)] md:w-80 xl:w-96 h-[180px] lg:h-[230px] select-none cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: "url('/fuota-login.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: hoveredDiv === 1 ? "brightness(20%)" : "none",
                      transition: "filter 0.5s ease-in-out",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderRadius: "16px",
                    }}
                  ></div>
                  {hoveredDiv === 1 ? <OverlayComponent divId={1} /> : <></>}
                </div>
                <div
                  onClick={() => handleDivClick(2)}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  className={`flex relative justify-center items-center bg-[#DFDFDF] p-6 rounded-2xl shadow-md row-span-3 w-[calc(100vw-50px)] md:w-80 xl:w-96 h-[180px] select-none cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: "url('/bpt-dashboard.png')",
                      backgroundSize: "100%",
                      backgroundPositionY: "top",
                      backgroundPositionX: "center",
                      filter: hoveredDiv === 2 ? "brightness(20%)" : "none",
                      transition: "filter 0.5s ease-in-out",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderRadius: "16px",
                    }}
                  ></div>
                  {hoveredDiv === 2 ? <OverlayComponent divId={2} /> : <></>}
                </div>
                <div
                  onClick={() => handleDivClick(3)}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                  className={`flex relative justify-center items-center bg-[#DFDFDF] p-6 rounded-2xl shadow-md row-span-3 lg:row-span-6 w-[calc(100vw-50px)] md:w-80 xl:w-96 h-[180px] lg:h-[230px] select-none cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: "url('/helperplace.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: hoveredDiv === 3 ? "brightness(20%)" : "none",
                      transition: "filter 0.5s ease-in-out",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderRadius: "14px",
                    }}
                  ></div>
                  {hoveredDiv === 3 ? <OverlayComponent divId={3} /> : <></>}
                </div>
                <div
                  onClick={() => handleDivClick(4)}
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={handleMouseLeave}
                  className={`flex relative justify-center items-center  bg-[#263138] text-[#DFDFDF] p-6 rounded-2xl shadow-md row-span-3 lg:row-span-6 w-[calc(100vw-50px)] md:w-80 xl:w-96 h-[180px] lg:h-[230px] select-none cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: "url('/cn-login.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: hoveredDiv === 4 ? "brightness(20%)" : "none",
                      transition: "filter 0.5s ease-in-out",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderRadius: "14px",
                    }}
                  ></div>
                  {hoveredDiv === 4 ? <OverlayComponent divId={4} /> : <></>}
                </div>
                <div
                  onClick={() => handleDivClick(5)}
                  onMouseEnter={() => handleMouseEnter(5)}
                  onMouseLeave={handleMouseLeave}
                  className={`flex relative justify-center items-center bg-[#DFDFDF] p-6 rounded-2xl shadow-md row-span-3 w-[calc(100vw-50px)] md:w-80 xl:w-96 h-[180px] select-none cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: "url('/portfolio.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: hoveredDiv === 5 ? "brightness(20%)" : "none",
                      transition: "filter 0.5s ease-in-out",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderRadius: "14px",
                    }}
                  ></div>
                  {hoveredDiv === 5 ? <OverlayComponent divId={5} /> : <></>}
                </div>
                <div
                  onMouseEnter={() => handleMouseEnter(6)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleDivClick(6)}
                  className={`flex relative justify-center items-center bg-[#445964] text-[#FFFFFF] p-6 rounded-2xl shadow-md row-span-3 w-[calc(100vw-50px)] md:w-80 xl:w-96 h-[180px] select-none cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: "url('/kirtan.png')",
                      backgroundSize: "cover",
                      backgroundPositionY: "top",
                      backgroundPositionX: "right",
                      filter: hoveredDiv === 6 ? "brightness(20%)" : "none",
                      transition: "filter 0.5s ease-in-out",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderRadius: "14px",
                    }}
                  ></div>
                  {hoveredDiv === 6 ? <OverlayComponent divId={6} /> : <></>}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      <Drawer onClose={onClose} isOpen={isOpen} placement="bottom">
        <DrawerOverlay />
        <DrawerContent borderTopRadius={"16px"} h={"auto"}>
          <DrawerCloseButton autoFocus={false} />

          <DrawerHeader>
            <Box className="flex flex-col w-full gap-2">
              <Box className="flex gap-3 items-start lg:items-center">
                <Text
                  className={`text-2xl ${roboto.className}`}
                  style={{
                    color: colorMode === "light" ? primary1 : "#FFFFFF",
                  }}
                >
                  {clickedDiv && detailedContent[clickedDiv - 1].title}
                </Text>
                {clickedDiv && detailedContent[clickedDiv - 1].url && (
                  <Tooltip label="Visit the URL">
                    <IconButton
                      aria-label="link"
                      onClick={() => {
                        window.open(
                          detailedContent[clickedDiv - 1].url,
                          "_blank"
                        );
                      }}
                    >
                      <MdOutlineLink size={28} />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
              <Text
                className={`text-base font-medium ${roboto.className}`}
                style={{
                  color: primary2,
                }}
              >
                {clickedDiv && detailedContent[clickedDiv - 1].tagLine}
              </Text>
            </Box>
          </DrawerHeader>

          <DrawerBody maxH={"100vh"} overflowY={"auto"}>
            {clickedDiv &&
              detailedContent[clickedDiv - 1].desc.map((item, index) => (
                <Box className="flex w-full items-start gap-2 pt-4">
                  <Box className="">
                    <Icon className="w-6 h-6">
                      <TbHexagonFilled
                        size={20}
                        color={
                          colorMode === "light" ? lightPrimary2 : "#FFFFFF"
                        }
                      />
                    </Icon>
                  </Box>
                  <Text
                    key={index}
                    color={detailsDesc}
                    className={`text-sm flex items-center ${
                      colorMode === "light" && "font-semibold"
                    } lg:text-md opacity-90 ${
                      colorMode === "dark" ? "tracking-wider" : "tracking-wide"
                    }   ${roboto.className}`}
                  >
                    {item}
                  </Text>
                </Box>
              ))}
            <Box className="h-6" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <div className="h-10" />
    </div>
  );
}

export default portfolio;

const OverlayComponent = ({ divId }: { divId: number }) => {
  const contentMap = [
    {
      id: 1,
      title: "Fuota.io",
      desc: "A portal for Managing Firmware Updates for LoRaWAN IoT Devices",
    },
    {
      id: 2,
      title: "BPT",
      desc: "An Offline desktop app, to generate secure & upload ready binary files",
    },
    {
      id: 3,
      title: "HelperPlace",
      desc: "HelperPlace connects employers and domestic helpers in just a few clicks.",
    },
    {
      id: 4,
      title: "Kuberns",
      desc: "An easy solution to deploy your web app on the cloud with just a few clicks",
    },
    {
      id: 5,
      title: "Portfolio",
      desc: "Platform to showcase my awesome skills",
    },
    // {
    //   id: 6,
    //   title: "Come back in Future..",
    //   desc: "Secretly brewing dank ideas, y'all ain't ready for this epic sauce yet! 🔥👽",
    // },
    {
      id: 6,
      title: "Swaminarayan Kirtan App",
      desc: "A tool for managing Swaminarayan Kirtan while singing live kirtan.",
    },
  ];

  return (
    <Box
      className={`overlay flex flex-col justify-center items-center w-full gap-2 relative ${roboto.className}`}
    >
      <Text className="text-white font-bold text-xl lg:text-2xl tracking-widest">
        {contentMap[divId - 1].title}
      </Text>
      <Text className="text-gray-200 font-medium text-md tracking-widest text-center w-3/4">
        {contentMap[divId - 1].desc}
      </Text>
    </Box>
  );
};

const detailedContent = [
  {
    id: 1,
    title: "Fuota.io",
    tagLine: "Firmware Update Over The Air",
    desc: [
      "FUOTA.IO is a cloud service for managing your LoRaWAN devices, built for remote firmware update as per LoRaWAN Alliance’s FUOTA Specifications.",
      "FUOTA.IO integrates with your existing LoRaWAN network server and starts working in the most secure manner without any development.",
      "Doing FUOTA on your entire batch of devices is just 3 simple steps: Enter the FUOTA session details, select the number of devices to be updated, and confirm.",
      "FUOTA.IO provides a summary of progress and success/failure rate during FUOTA sessions and allows you to export the report of each session.",
      "FUOTA.IO supports Delta Binary update to reduce firmware update size, and integrates with your software IDE to automatically generate signed and encrypted Delta builds.",
      "FUOTA.IO offers features beyond FUOTA process, like product management, generating unique credentials in factory settings, and managing LoRaWAN devices across multiple LNS environments.",
      "With FUOTA.IO, ensure the longevity and security of your IoT devices with efficient, reliable, and secure firmware updates.",
    ],
    url: "https://fuota.io/",
  },
  {
    id: 2,
    title: "BPT",
    tagLine: "Binary Preparation Tool",
    desc: [
      "BPT is a cutting-edge desktop application for enhancing the security of binary files for IoT devices.",
      "Initiate security tasks by creating organized projects and release channels, streamlining the process.",
      "Easily configure critical security aspects like encryption and integrity checks with a user-friendly interface.",
      "Protect binary files with advanced encryption, ensuring confidentiality during transmission.",
      "Implement integrity checks to prevent tampering and ensure the authenticity of your binary files.",
      "Optimize updates with delta generation, enhancing the efficiency of data transmission to IoT devices.",
      "Secure your files with digital signatures for heightened authentication and trust.",
      "Choose between direct server storage or local machine storage for your secured binary files.",
      "Transform unsecured firmware into secure versions with applied configured settings, ready for safe IoT deployment.",
    ],
    url: "",
  },
  {
    id: 3,
    title: "HelperPlace",
    tagLine:
      "HelperPlace connects employers and domestic helpers in Hong Kong, Macau Singapore, United Arab Emirates & Saudi Arabia, in just a few clicks.",
    desc: [
      "Contributed significantly to the HelperPlace project, a leading Hong Kong and Singapore platform",
      "Aimed to enhance the mobile user experience for the platform.",
      "Converted the job details page into a mobile-friendly format using Google AMP.",
      "Achieved notable reduction in loading times for users with low-end devices.",
      "Successfully demonstrated the new feature's performance, leading to its approval and further development.",
      "Currently mentoring an intern to extend Google AMP across all features of HelperPlace.",
      "Ensured uniform and efficient user experience across HelperPlace.",
      "Enhanced overall user satisfaction and platform usability, adhering to HelperPlace's commitment to quality service.",
    ],
    url: "https://www.helperplace.com/",
  },
  {
    id: 4,
    title: "Kuberns",
    tagLine:
      "Kuberns is an easy solution to deploy your web app on the cloud with just a few clicks",
    desc: [
      "Spearheaded the front-end development of Kuberns, ensuring a smooth and intuitive user experience with an emphasis on functionality and ease of use.",
      "Crafted a responsive design for Kuberns, adaptable to all device sizes, from smartphones to large desktop screens.",
      "Implemented a 'few-click deployment' feature, streamlining the process for users to launch and manage their web projects quickly and efficiently.",
      "Developed an informative overview dashboard for Kuberns, providing users with comprehensive insights into resources, analytics, build history, and live logs.",
      "Focused on creating a seamless user interface that combines efficiency with a visually appealing design, tailored to modern web standards.",
      "Played a key role in ensuring Kuberns's front-end was scalable, maintainable, and responsive, meeting the needs of a diverse user base.",
      "Received accolades for the user-friendly design of Kuberns, especially for its straightforward navigation and robust feature set.",
      "Prioritized the integration of advanced features like real-time analytics and live logs to offer users a comprehensive view of their web activities.",
    ],
    url: "https://dashboard.kuberns.com/",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    tagLine: "Where Art Meets Code: Front-End Perfection",
    desc: [
      "Expertly crafted front-end solutions using Next.js for optimal performance and scalability.",
      "Dynamic and engaging user interfaces brought to life with Framer Motion animations.",
      "Incorporating Lottie animations for visually captivating and interactive designs.",
      "Enhanced interactivity and visual appeal with ts-particle for particle-based effects.",
      "Developed with TypeScript (TS) for robust, type-safe code and maintainability.",
      "A showcase of cutting-edge web technologies blended with creative design solutions.",
      "Demonstrating a blend of technical proficiency and artistic creativity in web development.",
    ],
    url: "https://abhishek-kumbhani.vercel.app/",
  },
  {
    id: 6,
    title: "Swaminarayan Kirtan App",
    tagLine: "Where Art Meets Code: Front-End Perfection",
    desc: [
      "Developed a user-friendly software for Swaminarayan temples, enabling seamless addition and switching between multiple kirtans.",
      "Implemented a dual-section interface where the complete kirtan text is displayed, with features to highlight and update the current line using keyboard navigation.",
      "Introduced a dedicated section for frequently repeated lines, with the first 9 lines assigned numeric shortcuts for easy selection during satsangs.",
      "Ensured selected kirtans are prominently displayed in a larger font at the bottom of the webpage, perfect for multicasting on large monitors during spiritual gatherings.",
      "Each kirtan can be personalized with adjustable fontsize, fontweight, color, border color, and thickness to enhance readability and aesthetic appeal.",
      "Utilized the IndexedDB database of web browsers for efficient data management, ensuring smooth performance and data integrity.",
      "Integrated the ability to edit and delete kirtans with keyboard shortcuts, minimizing mouse dependency for a more streamlined user experience.",
      "This project represents a blend of spirituality and modern technology, revolutionizing the way devotional songs are managed and presented in religious settings.",
    ],
    url: "http://kirtan.pcb.click/",
  },
];
