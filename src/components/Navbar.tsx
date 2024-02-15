"use client";
import {NAV_LINKS} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";
import "./navbar.css";
import LocalSwitcher from "./UI/Switcher";
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

    function menuLabel(link: { href: string, key: string, label: string }){
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
        <div>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}
                 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Link href="/" className={`logo ${scrolled ? 'scrolled' : ''}`}>
                    <Image src="/2.png" alt="logo" width={150} height={100}/>
                </Link>
                <ul className="hidden h-full gap-20 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key}
                              style={{fontSize: "160%", textDecoration: "none", color: "#2775f2"}}>
                            { menuLabel(link) }
                        </Link>
                    ))}
                </ul>
                <div style={{marginLeft: "5%"}}>
                    <LocalSwitcher/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
