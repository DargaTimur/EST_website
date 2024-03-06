"use client";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";
import LocalSwitcher from "./UI/Switcher";
import { NAV_LINKS } from "@/constants";
import {useTranslations} from 'next-intl';

const Navbar = () => {
  const t = useTranslations('Index');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function menuLabel(link: { href: string, key: string, title: string }){
    switch (link.key){
      case "about":
        return t("menu.0.label");
      case "events":
        return t("menu.1.label");
      case "tours":
        return t("menu.2.label");
      case "information":
        return t("menu.3.label");
      case "contacts":
        return t("menu.4.label");
      default:
        return "";
    }
  }



  return (
    <div >
      <div >
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} 
          style={{display: "flex", justifyContent: "center", height: scrolled ? '70px' : '100px', position: 'fixed', top: 0, width: '100%'}} 
        >
          <Link href="/" className={`logo ${scrolled ? 'scrolled' : ''}`} style={{marginRight: "5%"}}>
            <img src="/logo.png" alt="logo" height='auto'/> {/** */}
          </Link>
          <div className="header_burger">
            <span></span>
          </div>
          <div className="header_menu">
            <ul className="navbar_menu_container">{/** */}
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} 
                  className="navbar_menu_buttons"
                  onMouseEnter={({ currentTarget }) => currentTarget.style.color = "#2f2399"}
                  onMouseLeave={({ currentTarget }) => currentTarget.style.color = "#000"}
                >
                  {menuLabel(link)}
                </Link> 
              ))} 
            </ul>
          </div>
          <div className="switcher">{/** */}
            <LocalSwitcher/>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar