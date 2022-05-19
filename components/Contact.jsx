import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import getInTouch from '../public/assets/getInTouch.jpg'

import SocialAvatar from "./SocialAvatar"
import ContactForm from './ContactForm';

import { socials } from "../utils/data"

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={getInTouch}
                  alt="/"
                  width={1000}
                  height={600}
                />
              </div>
              <div>
                <h2 className="py-2">Drilon Halili</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  {socials.map((link) => (
                    <SocialAvatar
                      key={link.name}
                      href={link.socialLink}
                      name={link.name}
                      className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <ContactForm />
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Contact;
