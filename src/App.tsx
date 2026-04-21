import { motion } from "motion/react";
import { Facebook, Phone, MapPin, Star, Users, Utensils, ArrowRight, Menu, X, ChevronRight, Heart, Calendar, Award, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const IMAGES = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/611582501_122154385052855027_7962790865275193196_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=o1tdtoCHWvsQ7kNvwGrrXj5&_nc_oc=AdqagZ7NcNdZZcfmKacqu1HPsXWBqqmUi__AqX3-G5d4k4f8Q5JFn2DyR-45B9BM5dU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ZbWBdaj4tYoDpzR7u7eejg&_nc_ss=7a3a8&oh=00_Af2crEMgFsxHE5OO2-wF1iVEFTyq9KJvsb025NCIX9DFfA&oe=69ECFDC4",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/505477400_122117109308855027_219694620475450234_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zpyvpn0MDKMQ7kNvwF7dVde&_nc_oc=AdrFAzF38ErbWUDQFLo-iwMriV1IZJZAJ1GD8OHVS7UHizgsDJnLYoJJlyDvRaVzx7s&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=K6FqCwmlNDRyBB2EiMjuLQ&_nc_ss=7a3a8&oh=00_Af2Soo-HL7NHaRKNUqXZHmMLgjShp91l8ymen6sAzuHrVQ&oe=69ED1929",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/608140900_122154395618855027_591684194534787839_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=9EQBg5dO5s8Q7kNvwHVp7XT&_nc_oc=AdpNyy3KbdFBf0my2r-DmYcs-JxdJkD4D7CpVPPKMbeKhZ_avzz-o79KFc5Az57bpHc&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=5EPoSuutKBpqYN0ymSoilw&_nc_ss=7a3a8&oh=00_Af1Q8ZnHTu9yIDK_Ti6X33_RaUHqRRYTuiuQpbS61Qr-RA&oe=69ED0E54",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/493100699_122099826128855027_6965727365831169382_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VZkugHWTBDoQ7kNvwHEN1-A&_nc_oc=AdpUFrjYnns1EkI3GaTuueJQ-EhkHBDqcVaEtJG4HrV13dObbig5Ob8eDI5085W_xIM&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ULPy7gyOJCwoHKsHpGuhVg&_nc_ss=7a3a8&oh=00_Af1m0WMzMWxQEpxZuAf2dpTxVPLWI8UkwB_BZlvNK1_2yQ&oe=69ED1A19",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/492007820_122095411496855027_7137581225843313936_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2a1932&_nc_ohc=51B4KWa8UnYQ7kNvwGHEF3L&_nc_oc=Ado76nv6PEWEZhXCMhYgw3pvjsaBbShZ7-NU9e1TY4ryXIqPXQrzg2oc54n8x1Eclzs&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=9QKHAC_kIlmPsXikvfnGOw&_nc_ss=7a3a8&oh=00_Af39Ghn2ZqK82qbft55Zf4Agzl1ylQhCQWubiiP-p956fw&oe=69ED351D",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/607999498_122153876762855027_2885623774947438435_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=DADOvzs7LLsQ7kNvwG9siNV&_nc_oc=AdoxQl51LS5SicOjm1ENbcrI7Fhc07Wj8AvHJ1CWqYUk25_9NH-6KT75A-aVgQMLIvM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=JWD_VR3ybFTLCOBS5cVejQ&_nc_ss=7a3a8&oh=00_Af1IxEQ3mpKhnJU-iDB-GwIGaXcaeKCGrcVfTaqf6RZjyQ&oe=69ECFE03",
];

const FB_LINK = "https://www.facebook.com/profile.php?id=61575650816644";
const PHONE = "605 140 089";
const ADDRESS = "Kolejowa 1, 19-100 Mońki";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O nas", href: "#o-nas" },
    { name: "Galeria", href: "#galeria" },
    { name: "Lokalizacja", href: "#lokalizacja" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <div className="min-h-screen bg-art-bg selection:bg-art-gold/30 font-sans text-art-ink border-8 border-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-x-8 border-white ${isScrolled ? 'bg-white/90 backdrop-blur-md h-20 shadow-sm' : 'bg-transparent h-28'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-art-gold flex items-center justify-center overflow-hidden bg-white shrink-0 group-hover:scale-110 transition-transform">
               <div className="text-[8px] text-center font-bold text-art-gold uppercase">K</div>
            </div>
            <span className={`text-2xl font-display italic tracking-tighter transition-colors ${isScrolled ? 'text-art-ink' : 'text-white'}`}>Katarynka</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all hover:text-art-gold ${isScrolled ? 'text-art-ink' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className={`px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-bold transition-all rounded-full border ${isScrolled ? 'bg-art-ink text-white border-art-ink hover:bg-art-gold hover:border-art-gold' : 'bg-white/10 text-white border-white/30 backdrop-blur-md hover:bg-white hover:text-art-ink'}`}
            >
              Rezerwuj
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-art-ink hover:bg-stone-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <motion.div 
          initial={false}
          animate={{ height: isMenuOpen ? "100vh" : 0 }}
          className="lg:hidden absolute top-0 left-0 right-0 bg-white overflow-hidden z-40 border-x-8 border-white"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-10 p-8">
             {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-display italic text-art-ink hover:text-art-gold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="w-full text-center py-5 bg-art-ink text-white rounded-xl text-sm uppercase tracking-[0.2em] font-bold"
            >
              Zadzwoń teraz
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES[0]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-art-ink/40 bg-gradient-to-t from-art-ink via-transparent to-transparent opacity-80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h2 className="text-white/80 text-xs uppercase tracking-[0.4em] font-bold mb-6 italic">Witamy w Katarynce</h2>
            <h1 className="text-7xl md:text-9xl text-white font-display italic leading-[0.85] tracking-tighter mb-8">
              Sztuka <br />
              <span className="text-art-gold">Celebracji</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-display italic mb-10 max-w-xl border-l-2 border-art-gold pl-6 leading-relaxed">
              Tworzymy niezapomniane wspomnienia w sercu Moniek. Elegancja, tradycja i serce włożone w każdy detal.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a href="#kontakt" className="bg-art-gold text-art-ink px-12 py-5 text-sm uppercase tracking-[0.2em] font-bold hover:bg-white transition-all shadow-[0_15px_30px_rgba(212,175,55,0.4)]">
                Sprawdź Termin
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-px bg-white/30" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Mońki, Kolejowa 1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O nas - Experience Section */}
      <section id="o-nas" className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 relative space-y-12 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-art-gold text-xs uppercase tracking-[0.4em] font-bold">O Naszej Sali</span>
                <h3 className="text-5xl md:text-6xl font-display italic leading-tight text-art-ink">
                  Miejsce z Duszą i <br /> <span className="text-art-gold">Historią</span>
                </h3>
              </div>
              <p className="text-art-muted text-lg leading-relaxed italic font-display">
                Sala Bankietowa Katarynka to nie tylko przestrzeń, to filozofia gościnności. Nasze wnętrza zostały zaprojektowane tak, aby łączyć klasyczną elegancję z nowoczesnym komfortem. Od lat towarzyszymy Państwu w najważniejszych momentach życia, dbając o to, by każda uroczystość była unikatowa.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-art-ink/10">
                <div className="space-y-2">
                  <span className="block text-4xl font-display text-art-ink italic leading-none">200+</span>
                  <span className="block text-[10px] uppercase tracking-widest text-art-muted">Udałych Wesel</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-4xl font-display text-art-ink italic leading-none">150</span>
                  <span className="block text-[10px] uppercase tracking-widest text-art-muted">Miejsc Siedzących</span>
                </div>
              </div>
              <a href="#galeria" className="inline-flex items-center gap-4 group text-art-ink hover:text-art-gold transition-colors">
                 <span className="text-xs uppercase tracking-[0.3em] font-bold border-b border-art-ink group-hover:border-art-gold pb-1 transition-colors">Zobacz Wnętrza</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="space-y-4 pt-12">
                <img src={IMAGES[4]} className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl" />
                <img src={IMAGES[2]} className="w-full aspect-square object-cover rounded-2xl" />
              </div>
              <div className="space-y-4">
                <img src={IMAGES[1]} className="w-full aspect-square object-cover rounded-2xl" />
                <img src={IMAGES[3]} className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
            {[
              { icon: <Heart className="w-8 h-8" />, t: "Wesela", d: "Kompleksowa organizacja przyjęć weselnych z dbałością o każdy detal i marzenie młodej pary." },
              { icon: <Award className="w-8 h-8" />, t: "Chrzciny i Komunie", d: "Elegancka oprawa rodzinnych uroczystości w atmosferze pełnej klasy i spokoju." },
              { icon: <Calendar className="w-8 h-8" />, t: "Eventy Firmowe", d: "Profesjonalna przestrzeń na bankiety, konferencje i spotkania integracyjne." }
            ].map((s, i) => (
              <div key={i} className="p-10 bg-white border border-art-ink/5 hover:border-art-gold/30 transition-colors group">
                <div className="text-art-gold mb-6 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
                <h4 className="text-xl font-display italic text-art-ink mb-4">{s.t}</h4>
                <p className="text-sm text-art-muted leading-relaxed italic">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria - Mosaic Section */}
      <section id="galeria" className="py-32 bg-art-ink text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-art-gold text-xs uppercase tracking-[0.4em] font-bold">Galeria Zdjęć</span>
              <h2 className="text-5xl md:text-7xl font-display italic leading-none">Estetyka <br /> <span className="text-art-gold">Katarynki</span></h2>
            </div>
            <p className="max-w-sm text-white/50 text-sm leading-relaxed italic border-l border-white/20 pl-6">
              Zapraszamy do wizualnej podróży przez nasze sale, dekoracje i momenty, które u nas ożywają.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[1000px]">
            <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-8 md:row-span-2 relative overflow-hidden group">
              <img src={IMAGES[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-art-ink/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-8 left-8">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold bg-white text-art-ink px-4 py-2">Główna Sala</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-4 md:row-span-1 relative overflow-hidden group">
              <img src={IMAGES[1]} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 border-[20px] border-white/10 m-4 pointer-events-none" />
            </motion.div>
            <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-4 md:row-span-1 border border-art-gold/30 flex items-center justify-center p-12 text-center group bg-stone-900">
               <div className="space-y-6">
                 <div className="text-art-gold italic text-3xl font-display">Nasze Menu</div>
                 <p className="text-[10px] uppercase tracking-[0.3em] leading-relaxed text-white/60">Tradycyjne regionalne receptury serwowane w nowoczesny sposób</p>
               </div>
            </motion.div>
            <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-4 md:row-span-2 relative overflow-hidden group">
              <img src={IMAGES[4]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute top-8 right-8 text-[11px] uppercase tracking-[0.4em] vertical-rl rotate-180 text-white font-bold opacity-70">Wnętrza</div>
            </motion.div>
            <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-8 md:row-span-2 relative overflow-hidden group">
              <img src={IMAGES[5]} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-art-ink/60 to-transparent p-12 flex flex-col justify-end">
                <h4 className="text-2xl font-display italic text-art-gold mb-2">Imprezy Okolicznościowe</h4>
                <p className="text-xs uppercase tracking-widest text-white/60">Dostosujemy salę do Twoich potrzeb</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lokalizacja - Map & Address Section */}
      <section id="lokalizacja" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-art-gold text-xs uppercase tracking-[0.4em] font-bold">Tu Nas Znajdziesz</span>
                <h2 className="text-5xl md:text-6xl font-display italic text-art-ink">Mońki, Serce <br /> <span className="text-art-gold">Podlasia</span></h2>
              </div>
              <div className="space-y-8">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-full border border-art-gold flex items-center justify-center shrink-0 group-hover:bg-art-gold transition-colors">
                    <MapPin className="w-6 h-6 group-hover:text-white" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-art-muted">Adres</span>
                    <p className="text-2xl font-display italic text-art-ink leading-tight">{ADDRESS}</p>
                    <p className="text-sm text-art-muted italic">Centrum miasta, dogodny dojazd i parking.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-full border border-art-gold flex items-center justify-center shrink-0 group-hover:bg-art-gold transition-colors">
                    <Clock className="w-6 h-6 group-hover:text-white" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-art-muted">Godziny</span>
                    <p className="text-2xl font-display italic text-art-ink leading-tight">Zawsze do Państwa <br /> dyspozycji</p>
                    <p className="text-sm text-art-muted italic font-display">Spotkania prosimy umawiać telefonicznie.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 flex flex-col sm:flex-row gap-6">
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-art-ink text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-art-gold transition-all text-center"
                >
                  Wyznacz Trasę
                </a>
                <a 
                   href={FB_LINK}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-10 py-5 border border-art-ink text-art-ink text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-stone-50 transition-all text-center flex items-center justify-center gap-3"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Obserwuj Nas</span>
                </a>
              </div>
            </div>
            <div className="relative group lg:h-[600px]">
              <div className="absolute -inset-4 bg-art-gold/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-art-ink/10 shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.5291476151033!2d22.79477351336661!3d53.40536219407521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e0246c328f94d1%3A0xfab2838d6f828d06!2sKolejowa%201%2C%2019-100%20Mo%C5%84ki!5e0!3m2!1spl!2spl!4v1776764554638!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt - CTA/Form Section */}
      <section id="kontakt" className="py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-6xl md:text-8xl font-display italic text-art-ink leading-none">Rozpocznijmy <br /> Państwa <span className="text-art-gold">Historię</span></h2>
            <p className="text-art-muted text-lg italic font-display leading-relaxed">
              Dostępność terminów na lata 2025 i 2026 jest ograniczona. Skontaktuj się z nami, aby zarezerwować termin i omówić szczegóły Twojego wydarzenia.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="bg-white p-12 border border-art-ink/5 shadow-xl w-full max-w-sm group hover:scale-105 transition-transform duration-500">
              <Phone className="w-10 h-10 text-art-gold mx-auto mb-6 group-hover:rotate-12 transition-transform" />
              <p className="text-[10px] uppercase tracking-widest font-bold text-art-muted mb-2">Telefon Bezpośredni</p>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-3xl font-display italic text-art-ink hover:text-art-gold transition-colors">{PHONE}</a>
            </div>
            <div className="bg-art-ink p-12 shadow-2xl w-full max-w-sm text-white group hover:scale-105 transition-transform duration-500">
              <Facebook className="w-10 h-10 text-art-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-2">Social Media</p>
              <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className="text-2xl font-display italic text-white hover:text-art-gold transition-colors block">Messenger</a>
              <span className="text-[9px] uppercase tracking-widest text-white/30 block mt-2">Szybka Odpowiedź</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bar bg-art-bg py-20 border-t border-art-ink/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="space-y-8 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-art-gold flex items-center justify-center overflow-hidden bg-white shrink-0">
                 <div className="text-[10px] text-center font-bold text-art-gold">K</div>
              </div>
              <span className="text-3xl font-display italic tracking-tighter">Katarynka</span>
            </div>
            <p className="text-xs uppercase tracking-widest leading-loose text-art-muted font-bold">
              Elegancja • Smak • Tradycja <br /> Mistrzowska Organizacja Eventów
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full md:w-auto">
             <div className="space-y-6">
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-art-ink block mb-4 border-b border-art-gold/30 pb-2">Nawigacja</span>
               <ul className="space-y-4 text-[11px] uppercase tracking-widest text-art-muted font-bold">
                 {navLinks.map(l => (
                   <li key={l.name}><a href={l.href} className="hover:text-art-ink transition-colors">{l.name}</a></li>
                 ))}
               </ul>
             </div>
             <div className="space-y-6">
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-art-ink block mb-4 border-b border-art-gold/30 pb-2">Kontakt</span>
               <ul className="space-y-4 text-[11px] uppercase tracking-widest text-art-muted font-bold">
                 <li><a href={`tel:${PHONE.replace(/\s/g, '')}`} className="hover:text-art-ink transition-colors">{PHONE}</a></li>
                 <li><a href={FB_LINK} target="_blank" className="hover:text-art-ink transition-colors">Facebook</a></li>
                 <li><span className="opacity-50">Messenger</span></li>
               </ul>
             </div>
             <div className="space-y-6 col-span-2 md:col-span-1">
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-art-ink block mb-4 border-b border-art-gold/30 pb-2">Adres</span>
               <p className="text-[11px] uppercase tracking-widest text-art-muted font-bold leading-relaxed">
                 ul. Kolejowa 1 <br /> 19-100 Mońki <br /> Woj. Podlaskie
               </p>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-art-ink/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] text-art-muted font-bold gap-6">
          <span>© {new Date().getFullYear()} Katarynka Mońki</span>
          <span className="hover:text-art-ink cursor-pointer transition-colors">Polityka Prywatności</span>
          <span className="opacity-50 italic">Crafted with Elegance</span>
        </div>
      </footer>
    </div>
  );
}


