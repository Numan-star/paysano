'use client'
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface NavLink {
  href: string;
  key: string;
  label: string;
}

interface Translation {
  NAV_LINKS: NavLink[];
  HEADER: string;
  HEADER1: string;
  HEADER_DESCRIPTION: string;
  HEADER_DESCRIPTION1: string;
  HELLO: string;
  HELLO1: string;
  HELLO_DESCRIPTION: string;
  HEADER_BUTTON: string;
  ALL_VEGETABLES: string;
  RESTAURANTS_BUTTON: string;
  TOP_STORES: string;
  TOP_STORES_DESCRIPTION: string;
  TOP_RESTAURANTS: string;
  TOP_RESTAURANTS_DESCRIPTION: string;
  CONTACT: string;
  CONTACT_DESCRIPTION: string;
  PLACEHOLDER: string;
  SUBSCRIBE: string;
  FOOTER_DESCRIPTION: string;
  SUPPORT: string;
  TRENDING: string;
  FEATURES: string;
  LIST_HOME: string;
  LIST_ABOUT: string;
  LIST_FAQS: string;
  LIST_SUPPORT: string;
  LIST_SHOP: string;
  LIST_PORTFOLIO: string;
  LIST_BLOGS: string;
  LIST_HELPCENTER: string;
  LIST_PAID: string;
  LIST_STATUS: string;
  LIST_CONTACT_SUPPORT: string;
  COPYRIGHTS: string;
  Delivery:string;
  Value: string;
}

interface Translations {
  en: Translation;
  it: Translation;
}

const translations: Translations = {
  en: {
    NAV_LINKS: [
      { href: '/', key: 'home', label: 'Home' },
      { href: '/products', key: 'products', label: 'Products' },
      { href: '/stores', key: 'stores', label: 'Stores' },
      { href: '/restaurants', key: 'restaurants', label: 'Restaurants' },
      // { href: '/vegetables', key: 'how_hilink_work', label: 'Vegetables' },
      // { href: '/getstarted', key: 'pricing', label: 'Get Started' },
    ],
    HEADER: 'Unveiling the Finest <span class="text-green">Stores</span> and <span class = "text-green">Restaurants </span>',
    HEADER1: '<span class="text-green">Explore</span> Our Vibrant Selection of Products',
    HEADER_DESCRIPTION: 'Savor culinary wonders and explore curated retail gems on our platform. Indulge in diverse restaurant menus and discover unique store products, all in one place.',
    HEADER_DESCRIPTION1: 'Welcome to our Products Category! Enjoy a diverse selection of fresh, carefully curated fruits, vegetables, and more, all bringing exceptional flavor and variety to your table.',
    HEADER_BUTTON: "Start your Exploration",
    HELLO: 'HELLO & WELCOME',
    HELLO1: 'Product Category',
    HELLO_DESCRIPTION: 'Explore nearby restaurants and shops, discover enticing menus, read reviews, and effortlessly place orders. <span class = "text-green">Welcome to Paysano</span> where convenience meets local delights.',
    ALL_VEGETABLES: "Vegetables",
    RESTAURANTS_BUTTON: "View All",
    TOP_STORES: 'Our Top <span class = "text-green"> Stores </span>',
    TOP_STORES_DESCRIPTION: "Discover an enhanced search experience, personalized recommendation, streamlined ordering, and faster checkout in our latest update. Elevate your app usage with these improvements.",
    TOP_RESTAURANTS: 'Our Top <span class = "text-green"> Restaurants </span>',
    TOP_RESTAURANTS_DESCRIPTION: "Discover an enhanced search experience, personalized recommendation, streamlined ordering, and faster checkout in our latest update. Elevate your app usage with these improvements.",
    CONTACT: "Contact Us",
    CONTACT_DESCRIPTION: "We’d love to hear from you! if you have any question, suggestion or feedback, feel free to get in touch.",
    PLACEHOLDER: "Enter Your Email Address...",
    SUBSCRIBE: "Subscribe",
    FOOTER_DESCRIPTION: "This app seamlessly integrates local restaurants and stores, allowing users to explore nearby restaurants for online food orders with detailed menu information.",
    SUPPORT: "Support",
    TRENDING: "Trending",
    FEATURES: "Download App",
    LIST_HOME: "Home",
    LIST_ABOUT: "Restaurants",
    LIST_FAQS: "Stores",
    LIST_SUPPORT: "Products",
    LIST_SHOP: "Shop",
    LIST_PORTFOLIO: "Portfolio",
    LIST_BLOGS: "Blog",
    LIST_HELPCENTER: "Help Center",
    LIST_PAID: "Paid with Mobile",
    LIST_STATUS: "Status",
    LIST_CONTACT_SUPPORT: "Contact Support",
    COPYRIGHTS: "Copyrights © 2023 All Rights Reserved by Paysano",
    Delivery: "Estimated Delivery Time",
    Value:"Value",

  },
  it: {
    NAV_LINKS: [
      { href: '/', key: 'home', label: 'Home' },
      { href: '/products', key: 'products', label: 'Prodotti' },
      { href: '/stores', key: 'stores', label: 'Negozi' },
      { href: '/restaurants', key: 'restaurants', label: 'Ristoranti' },
    ],
    HEADER: 'Svelare i Migliori  <span class = "text-green"> Negozi </span> e <span class = "text-green"> Ristoranti</span>',
    HEADER1: '<span class = "text-green"> Esplora </span>la nostra vivace selezione di prodotti',
    HEADER_DESCRIPTION: 'Assaporare meraviglie culinarie ed esplorare gioielli di vendita al dettaglio selezionati sulla nostra piattaforma. Concediti i vari menù dei ristoranti e scopri prodotti unici dei negozi, tutto in un unico posto.',
    HEADER_DESCRIPTION1: 'Benvenuto nella nostra categoria di prodotti! Goditi una vasta selezione di frutta, verdura e altro ancora freschi e accuratamente curati, che portano sulla tua tavola un sapore e una varietà eccezionali.',
    HEADER_BUTTON: "Inizia la tua esplorazione",
    HELLO: 'Ciao e Benvenuto',
    HELLO1: 'Categoria di prodotto',
    HELLO_DESCRIPTION: 'Esplora ristoranti e negozi nelle vicinanze, scopri menù allettanti, leggi recensioni e effettua ordini senza sforzo.<span class = "text-green"> Benvenuti a Paysano </span>, dove la comodità incontra le delizie locali.',
    ALL_VEGETABLES: "Verdure",
    RESTAURANTS_BUTTON: "Visualizza tutto",
    TOP_STORES: 'I Nostri Migliori <span class = "text-green">Negozi </span>',
    TOP_STORES_DESCRIPTION: "Scopri un'esperienza di ricerca migliorata, raccomandazioni personalizzate, ordini semplificati e check-out più veloce nel nostro ultimo aggiornamento. Eleva l'utilizzo della tua app con questi miglioramenti.",
    TOP_RESTAURANTS: 'I Nostri Nigliori <span class = "text-green"> Ristoranti</span>',
    TOP_RESTAURANTS_DESCRIPTION: "Scopri un'esperienza di ricerca migliorata, raccomandazioni personalizzate, ordinazione semplificata e checkout più veloce nel nostro ultimo aggiornamento. Eleva l'utilizzo della tua app con questi miglioramenti.",
    CONTACT: "Contattaci",
    CONTACT_DESCRIPTION: "Ci piacerebbe sentire la tua opinione! se hai domande, suggerimenti o feedback, non esitare a contattarci.",
    PLACEHOLDER: "Inserisci il tuo indirizzo email...",
    SUBSCRIBE: "Iscriviti",
    FOOTER_DESCRIPTION: "Questa app integra senza soluzione di continuità ristoranti e negozi locali, consentendo agli utenti di esplorare i ristoranti nelle vicinanze per ordini di cibo online con informazioni dettagliate sui menu.",
    SUPPORT: "Assistenza",
    TRENDING: "Ditendenza",
    FEATURES: "Scarica l'applicazione",
    LIST_HOME: "Home",
    LIST_ABOUT: "Ristoranti",
    LIST_FAQS: "Negozi",
    LIST_SUPPORT: "Prodotti",
    LIST_SHOP: "Negozio",
    LIST_PORTFOLIO: "Portfolio",
    LIST_BLOGS: "Blog",
    LIST_HELPCENTER: "Centro assistenza",
    LIST_PAID: "Pagato con il cellulare",
    LIST_STATUS: "Stato",
    LIST_CONTACT_SUPPORT: "Contattare il supporto",
    COPYRIGHTS: "Copyright © 2023 Tutti i diritti riservati da Paysano",
    Delivery: "Empo di consegna stimato",
    Value:"Valore",
  },
};

interface LanguageContextProps {
  language: keyof Translations;
  setLanguage: Dispatch<SetStateAction<keyof Translations>>;
  t: <K extends keyof Translation>(key: K) => Translation[K];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<keyof Translations>('en');

  const t = <K extends keyof Translation>(key: K): Translation[K] => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
