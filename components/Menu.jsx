"use client"
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

  const handleOnClick = (e, url) => {
    e.preventDefault();

    if (url) {
      router.push(url);
      onClick();
    } else {
      scrollToEl(e);
      setTimeout(() => onClick(), 350);
    }
  };

  const isCoursePage = pathname.startsWith('/course');

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
            href={isCoursePage ? "/" : "#intro"}
            onClick={(e) =>
              handleOnClick(e, isCoursePage ? "/" : null) 
            }
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
        <Link
            href={isCoursePage ? "/" : "#about"}
            onClick={(e) =>
              handleOnClick(e, isCoursePage ? "/#about" : null) 
            }
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li>
        <Link
            href={isCoursePage ? "/" : "#calculator"}
            onClick={(e) =>
              handleOnClick(e, isCoursePage ? "/#calculator" : null) 
            }
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Calculator
          </Link>
        </li>
        <li>
        <Link
            href={isCoursePage ? "/" : "#team"}
            onClick={(e) =>
              handleOnClick(e, isCoursePage ? "/#team" : null) 
            }
            className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Team
          </Link>
        </li>
        <li>
          <div className="relative group text-xl">
            <span className="text-xl cursor-pointer" onClick={(e) => handleOnClick(e, "/course")}>Course</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-md py-2 px-4 rounded-md w-32 z-10">
              <li>
                <Link
                  href="/course/determinant"
                  onClick={(e) => handleOnClick(e, "/course/determinant")}
                  className="text-sm block hover:bg-gray-100"
                >
                  Determinant
                </Link>
              </li>
              <li>
                <Link
                  href="/course/complex-numbers"
                  onClick={(e) =>
                    handleOnClick(e, "/course/complex-numbers")
                  }
                  className="text-sm block hover:bg-gray-100"
                >
                  Complex Numbers
                </Link>
              </li>
              <li>
                <Link
                  href="/course/series"
                  onClick={(e) => handleOnClick(e, "/course/series-arithmetic")}
                  className="text-sm block hover:bg-gray-100"
                >
                  Series
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </m.nav>
  );

  return <LazyMotion features={domAnimation}>{mainMenu}</LazyMotion>;
}
