import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Navbar from "@/components/Navbar";
import "./navbar.css";

export default function NavBarServer(){
    const locale = useLocale();
    const messages = useMessages();
    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
        >
            <Navbar/>
        </NextIntlClientProvider>
    )
}