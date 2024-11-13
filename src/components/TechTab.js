'use client'
import Image from "next/image"
import { motion } from "framer-motion"

export default function TechTab({ title, logo, index, animationsActive = false, radius, angleOffset, duration, styles }) {
    const tabVariants = {
        animateUpDown: {
            y: [-200, 70],
            x: 0,
            transition: {
                y: {
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 7,
                    ease: 'easeInOut',
                    delay: index
                }
            }
        },
        animateInCircle: {
            x: Array.from({ length: 360 }, (_, i) =>
                radius * Math.cos((i * Math.PI) / 180 + angleOffset)
            ),
            y: Array.from({ length: 360 }, (_, i) =>
                radius * Math.sin((i * Math.PI) / 180 + angleOffset)
            ),
            transition: {
                repeat: Infinity,
                duration: duration,
                ease: "linear"
            }
        }
    }

    return (
        <motion.div style={styles} variants={tabVariants} animate={animationsActive && "animateInCircle"} className="flex justify-center items-center gap-2 text-white font-ubuntu border border-cyan-400 rounded-3xl w-fit py-2 px-3">
            <Image src={logo} width={20} height={20} alt={title} />
            <p>{title}</p>
        </motion.div>
    )
}