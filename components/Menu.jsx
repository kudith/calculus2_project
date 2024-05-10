"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useScrollTo } from "hooks";
import { initial, animate, exit, transition } from "utils";
import { SITE_ROUTES } from "../constants";

export function Menu({ onClick = () => {} }) {
  const pathname = usePathname();
  const { scrollToEl } = useScrollTo();
  const router = useRouter();

  // Fungsi untuk menangani klik pada tautan
  const handleOnClick = (e, url) => {
    e.preventDefault(); // Mencegah perilaku default tautan

    if (url) {
      // Jika URL diberikan, gunakan router.push untuk mengarahkan ke halaman lain
      router.push(url);
      // Tutup menu setelah pengalihan
      onClick();
    } else {
      // Jika tidak ada URL, gulir ke bagian tertentu dari halaman
      scrollToEl(e);
      // Tutup menu setelah pengguliran
      setTimeout(() => onClick(), 350);
    }
  };

  // Menu utama (link navigasi dan pengguliran)
  const mainMenu = (
    <m.nav
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      role="menu"
    >
      <ul className="flex justify-center gap-5 flex-col md:flex-row items-start md:items-center">
        <li>
          <Link
            href={pathname === SITE_ROUTES.course ? "/" : "#intro"}
            onClick={(e) =>
              handleOnClick(e, pathname === SITE_ROUTES.course ? "/" : null)
            }
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={pathname === SITE_ROUTES.course ? "/" : "#about"}
            onClick={(e) =>
              handleOnClick(e, pathname === SITE_ROUTES.course ? "/" : null)
            }
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={pathname === SITE_ROUTES.course ? "/" : "#calculator"}
            onClick={(e) =>
              handleOnClick(e, pathname === SITE_ROUTES.course ? "/" : null)
            }
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Calculator
          </Link>
        </li>
        <li>
          <Link
            href={pathname === SITE_ROUTES.course ? "/" : "#team"}
            onClick={(e) =>
              handleOnClick(e, pathname === SITE_ROUTES.course ? "/" : null)
            }
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            href="/course" // Menentukan href langsung ke /course
            onClick={(e) => handleOnClick(e, "/course")} // Mengarahkan langsung ke halaman /course
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Course
          </Link>
        </li>
      </ul>
    </m.nav>
  );

  // Menu untuk halaman kursus
  const backMenu = (
    <m.nav
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      role="menu"
    >
      <ul className="flex justify-center gap-5 flex-col md:flex-row items-start md:items-center">
        <li>
          <Link
            href="/"
            onClick={(e) => handleOnClick(e, "/")}
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 setelah:bg-current setelah:transition-width setelah:duration-300 setelah:ease-in-out hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            onClick={(e) => handleOnClick(e, "/#about")}
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] setelah:w-0 setelah:bg-current setelah:transition-width setelah:duration-300 setelah:ease-in-out hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#calculator"
            onClick={(e) => handleOnClick(e, "/#calculator")}
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] setelah:h-[2px] setelah:w-0 setelah:bg-current setelah:transition-width setelah:duration-300 setelah:ease-in-out hover:after:w-full"
          >
            Calculator
          </Link>
        </li>
        <li>
          <Link
            href="/#team"
            onClick={(e) => handleOnClick(e, "/#team")}
            className="relative text-xl hover:no-underline after:absolute after:left-0 setelah:-bottom-[3px] setelah:h-[2px] setelah:w-0 setelah:bg-current setelah:transition-width setelah:duration-300 setelah:ease-in-out hover:after:w-full"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            href="/course"
            onClick={(e) => handleOnClick(e, "/course")}
            className="relative text-xl hover:no-underline after:absolute after:left-0 setelah:-bottom-[3px] setelah:h-[2px] setelah:w-0 setelah:bg-current setelah:transition-width setelah:duration-300 setelah:ease-in-out hover:after:w-full"
          >
            Course
          </Link>
        </li>
      </ul>
    </m.nav>
  );

  // Pilih konten yang akan ditampilkan berdasarkan `pathname`
  const content = pathname === SITE_ROUTES.course ? backMenu : mainMenu;

  // Kembalikan konten yang dipilih
  return <LazyMotion features={domAnimation}>{content}</LazyMotion>;
}
