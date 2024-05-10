"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./profile.css";

// Import gambar profil tim dan data
import slide_image_1 from "/public/assets/images/img_1.jpg";
import slide_image_2 from "/public/assets/images/img_2.jpg";
import slide_image_3 from "/public/assets/images/img_3.jpg";
import slide_image_4 from "/public/assets/images/img_4.jpg";
import slide_image_5 from "/public/assets/images/img_5.jpg";

const teamProfiles = [
  {
    image: slide_image_1,
    name: "Ginanjar Aditiya Prianata",
    role: "Lead Developer",
  },
  {
    image: slide_image_2,
    name: "Dimas Setiawan",
    role: "Developer",
  },
  {
    image: slide_image_3,
    name: "Dhiya Ulhaq Prima Yuga",
    role: "UI/UX Designer",
  },
  {
    image: slide_image_4,
    name: "Sekar Ayu Fatmasari",
    role: "Content Writer",
  },
  {
    image: slide_image_5,
    name: "Amelia Andini",
    role: "Content Writer",
  },
];

export function TeamProfile() {
  return (
    <div id="team" className="container">
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
        {teamProfiles.map((profile, index) => (
          <SwiperSlide key={index}>
            {/* Gambar profil */}
            <div className="profile-card">
              <Image
                src={profile.image}
                alt={`Profile of ${profile.name}`}
                width={200}
                height={200}
                className="profile-image"
              />

              {/* Informasi anggota tim */}
              <div className="profile-info">
                <h3 className="profile-name">{profile.name}</h3>
                <p className="profile-role">{profile.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

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
