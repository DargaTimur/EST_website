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
    <div style={{marginLeft: "10rem", marginRight: "10rem" }}>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} 
        style={{display: "flex", justifyContent: "center", height: scrolled ? '70px' : '140px', position: 'fixed', top: 0, width: '100%'}} 
      >
        <Link href="/" className={`logo ${scrolled ? 'scrolled' : ''}`} style={{marginRight: "4rem"}}>
          <Image src="/2.png" alt="logo" width={120} height={100}/>
        </Link>
        <div>
          <ul style={{display: "flex", gap: "1.7rem", margin: 0, padding: 0}}>
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} 
                className="nav-link"  
                style={{fontSize: "106%", fontWeight: "500", textDecoration: "none", color: scrolled ? "#fff" : "#000", transition: "color 0.4s ease"}}
                onMouseEnter={({ currentTarget }) => currentTarget.style.color = "#1f38ab"}
                onMouseLeave={({ currentTarget }) => currentTarget.style.color = scrolled ? "#fff" : "#000"}
              >
                {menuLabel(link)}
              </Link> 
            ))} 
          </ul>
        </div>
        <div className="switcher" style={{marginLeft: "1.7rem", color: scrolled ? "#fff" : "#000"}}>
          <LocalSwitcher/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar