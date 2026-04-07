import { HeroText } from "../components/HeroText"
import { Suspense } from "react"
import { Film, Video, Scissors, ArrowRight, Download, PhoneCall, ChevronDown, ShoppingCart } from "lucide-react"
import { useMediaQuery } from "react-responsive"
// import { easing } from "maath"
import { Loader } from "../components/Loader"
import { Button } from "../components/Button"
import { motion } from "motion/react"

const services = [
    "Logo Design",
    "Business Card Design",
    "Event Planning",
]

const social = [
    { icon: "Instagram", href: "https://instagram.com/leconeorange" },
]

export const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 })
    return (
        <section id="hero" className="flex items-start justify-center 
        md:items-start md:justify-start min-h-screen overflow-x-hidden c-space w-full">
            {/* <div className="absolute top-1/2 left-1/2
            w-200 h-200 bg-primary/5
            rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            /> */}

            {/* BG Image */}
            <div className="absolute inset-0">
                <img src="/assets/logo.png" alt="LCO" className="w-full h-full object-cover opacity-30" />
            </div>
            {/* BG Image */}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-b
                from-primary via-primary/80 to-black/90" />
            {/* Overlay Gradient */}

            {/* Moving Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, idx) => (
                    <Scissors
                        key={idx}
                        className="absolute w-1.5 h-1.5 rounded-2xl"
                        style={{
                            color: "#fff",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift 50s ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}%`
                        }}
                    />
                ))}

                {[...Array(15)].map((_, idx) => (
                    <Scissors
                        key={idx}
                        className="absolute w-1.5 h-1.5 rounded-2xl"
                        style={{
                            color: "#fff",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift 50s ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}%`
                        }}
                    />
                ))}
            </div>
            {/* Moving Particles */}



            {/* Content */}
            


        </section >
    )
}
