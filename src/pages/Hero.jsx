import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function Hero() {

    return (
        <motion.div
            id="#"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3">
                
                <div className="flex flex-col items-start gap-6 col-span-2 p-10 border-bottom lg:border-bottom-none lg:border-r-muted">
                    <p className="font-mono text-muted font-light">FULL STACK DEVELOPER</p>
                    <p className="font-display font-bold leading-tight text-3xl lg:text-5xl">
                        I build web applications <br />
                        and embed hardware into functional systems.
                    </p> 
                    <p className="font-body text-muted leading-relaxed max-w-md text-md">
                        Focused on creating efficient, real-world solutions through software and hardware integration.
                        <br />
                        Currently open to new opportunities.
                    </p>
                    <a href="#projects">
                        <button className="font-mono border-muted p-2 text-xs lg:text-sm rounded-lg">View my work ↓</button>
                    </a>
                </div>

                <div className="col-span-1 flex flex-col justify-between p-10">
                    <p className="font-mono text-muted items-center flex text-md"><span className="w-2 h-2 rounded-full bg-green-400 inline-block mr-2"></span>Available for work</p>

                    <div className="font-mono flex flex-col gap-2 mt-7 lg:my-0">
                        <p className="text-muted text-xs lg:text-xs font-medium">BASED IN</p>
                        <p className="font-normal text-2xl">Iloilo City, <br /> <span className="font-bold">PH</span></p>
                    </div>
                </div>
            </div>
        </motion.div>
    )

}