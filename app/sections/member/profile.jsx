"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./profile.css";

// Import gambar profil tim dan data
import slide_image_1 from "/public/assets/images/adit.jpeg";
import slide_image_2 from "/public/assets/images/dimas.jpeg";
import slide_image_3 from "/public/assets/images/dhiya.jpg";
import slide_image_4 from "/public/assets/images/sekar.jpeg";
import slide_image_5 from "/public/assets/images/amel.jpeg";

const teamProfiles = [
  {
    image: slide_image_1,
    name: "Ginanjar Aditiya Prianata",
    role: "Lead Developer",
    github: "https://github.com/kudith",
    instagram: "https://www.instagram.com/g.adty_/",
  },
  {
    image: slide_image_2,
    name: "Dimas Setiawan",
    role: "Developer",
    github: "https://github.com/dimasst",
    instagram: "https://instagram.com/dimasst",
  },
  {
    image: slide_image_3,
    name: "Dhiya Ulhaq Prima Yuga",
    role: "UI/UX Designer",
    github: "https://github.com/dhiyaulhaq",
    instagram: "https://instagram.com/dhiyaulhaq",
  },
  {
    image: slide_image_4,
    name: "Sekar Ayu Fatmasari",
    role: "Developer",
    github: "https://github.com/strawberrieez",
    instagram: "https://instagram.com/xyjnee_",
  },
  {
    image: slide_image_5,
    name: "Amelia Andini",
    role: "Content Writer",
    github: "https://github.com/ameliaandini",
    instagram: "https://instagram.com/ameliaandini",
  },
];

export function TeamProfile() {
  const textRef = useRef(null);
  const stackRef = useRef(null);

  // Animasi untuk profil card
  const cardAnimations = {
    initial: { opacity: 0, y: 0, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 1.5 },
  };

  return (
    <div id="team" className="container md:mt-32 mt-10">
      <div className="flex justify-center items-center">
        <motion.p
          className="text-5xl mb-12 font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.17, 0.55, 0.55, 1],
            delay: 0.5,
          }}
        >
          detrix<mark>Calc</mark> Team
        </motion.p>
      </div>
      <p
        ref={textRef}
        tabIndex="0"
        className="my-5 text-2xl"
        style={{
          transform: `translateX(${useInView(textRef) ? "0" : "-200px"})`,
          opacity: useInView(textRef) ? 1 : 0,
          transition: "all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      ></p>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {/* Iterasi melalui profil tim */}
        {teamProfiles.map((profile, index) => {
          const profileRef = useRef(null);
          const inView = useInView(profileRef);

          return (
            <SwiperSlide key={index}>
              {/* animasi ke kartu profil */}
              <motion.div
                className="profile-card"
                ref={profileRef}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                variants={cardAnimations}
              >
                {/* Gambar profil */}
                <Image
                  src={profile.image}
                  alt={`Profile of ${profile.name}`}
                  width={200}
                  height={200}
                  className="profile-image"
                />

                {/* Informasi anggota tim */}
                <div className="profile-info dark:text-gray-900">
                  <h3 className="profile-name">{profile.name}</h3>
                  <p className="profile-role">{profile.role}</p>
                  <div className="profile-socials">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="social-icon" />
                    </a>
                    <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="social-icon" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}

        {/* Tombol navigasi */}
        <div className="swiper-pagination"></div>
        <FaChevronLeft className="swiper-button-prev slider-arrow" />
        <FaChevronRight className="swiper-button-next slider-arrow" />
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default TeamProfile;
