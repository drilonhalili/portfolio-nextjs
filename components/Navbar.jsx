import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useRouter } from "next/router"

import SocialAvatar from "./SocialAvatar"

import { navbar, socials } from "../utils/data"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState("#ecf0f3")
  const [linkColor, setLinkColor] = useState("#1f2937")
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent")
      setLinkColor("#ecf0f3")
    } else {
      setNavBg("#ecf0f3")
      setLinkColor("#1f2937")
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navLogo.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {navbar.map((nav) => {
              return (
                <Link key={nav.name} href={nav.path}>
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    {nav.name}
                  </li>
                </Link>
              )
            })}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/navLogo.png"
                width="87"
                height="35"
                alt="/"
              />
              {nav && (
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              )}
            </div>
            {nav && (
              <div className="border-b word-break: break-all border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&apos;s build something legendary together
                </p>
              </div>
            )}
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {navbar.map((nav) => {
                return (
                  <Link key={nav.name} href={nav.path}>
                    <li onClick={() => setNav(false)} className="py-2 text-sm">
                      {nav.name}
                    </li>
                  </Link>
                )
              })}
            </ul>
            <div className="pt-32">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                {socials.map((link) => (
                  <SocialAvatar
                    key={link.name}
                    href={link.socialLink}
                    name={link.name}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
