import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const business = [
    {
        name: "LE CONE ORANGE.",
        tag: "Real City's Own",
        business: "Designer",
    }
]

export const HeroText = () => {
    const words = ["LOGO", "MERCH"]
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <section id="hero-text" className="z-10 text-center
        rounded-xl bg-clip-text">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-6xl pb-4 font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: .5 }}
                >{business.map((info, idx) => (
                    info.name
                ))}</motion.h1>

                <div className="flex flex-col">
                    <motion.p className="text-7xl font-medium text-white hover:text-white/80"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: .9 }}
                    >{business.map((info, idx) => (
                        info.tag
                    ))}</motion.p>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.3 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-black text-white text-8xl py-4"
                        />
                        </motion.div>

                    <motion.div className="text-6xl font-medium text-white py-6"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.4 }}
                    >{business.map((info, idx) => (
                        info.business
                    ))}</motion.div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col mt-15 space-y-6 md:hidden">
                <motion.p className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: .5 }}
                >
                    {business.map((info, idx) => (
                        info.name
                    ))}
                </motion.p>
                <div className="cool">
                    <motion.p className="text-5xl"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: .9 }}
                    >
                        {business.map((info, idx) => (
                            info.tag
                        ))}
                    </motion.p>
                    <motion.div className="flip-words pt-2"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.3 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-black text-white text-7xl py-4"
                        />
                        </motion.div>
                    <motion.p className="text-4xl font-medium text-white py-4"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.4 }}
                    >{business.map((info, idx) => (
                        info.business
                    ))}</motion.p>
                </div>
            </div>
        </section>
    )
}
