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
        md:items-start md:justify-start min-h-screen overflow-hidden c-space w-full">
            <div className="absolute top-1/2 left-1/2
            w-200 h-200 bg-primary/5
            rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />

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
            <div className="relative container px-5 mx-auto pt-5 md:pt-20 pb-30 z-10">
                <div className="grid items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8 text-center h-full overflow-hidden">
                        {/* Hero */}
                        <div className="space-y-10 md:space-y-0 animate-fade-in animation-delay-100">
                            <Suspense fallback={<Loader />}>
                                <HeroText />
                            </Suspense>
                        </div>

                        {/* CTA */}
                        {/* <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-300">
                            <a href="https://www.instagram.com/leconeorange" target="_blank">
                                <Button size="lg">
                                    SHOP <ShoppingCart className="w-5 h-5" />
                                </Button>
                            </a>
                        </div> */}
                        {/* CTA */}


                    </div>
                    {/* Content */}
                </div>

                {/* Services */}
                {/* <div className="mt-10 animate-fade-in animation-delay-600">
                    <p className="text-sm text-white/60 hover:text-white text-center uppercase">WHAT WE DO</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...services, ...services, ...services].map((service, idx) => (
                                <div key={idx} className="text-2xl shrink-0 px-8">
                                    <div key={idx} className="shrink-0 px-2 py-6">
                                        <span className="w-50 h-50 object-cover opacity-60 hover:opacity-100 hover:text-white transition-colors">{service}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                {/* Services */}

                {/* ChevronDown */}
                {/* <div className='absolute bottom-8 left-1/2 -translate-x-1/2
            animate-fade-in animation-delay-800'>
                    <a
                        href="#about"
                        className='flex flex-col items-center gap-2 text-white/60 hover:text-white'>
                        <span className='text-primary hover:text-white text-sm uppercase tracking-wider'>Scroll</span>
                        <ChevronDown className='text-primary hover:text-white w-6 h-6 animate-bounce' />
                    </a>
                </div> */}
            </div >


        </section >
    )
}
