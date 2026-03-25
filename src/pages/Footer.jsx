import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function Footer() {

    return (

        <motion.div
            id="footer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
        <section id="contact">

            <div className="grid grid-cols-2 px-10 py-5 border-bottom gap-2">
                <div>
                    <p className="font-display text-xl lg:text-3xl">Let's build something</p>
                    <p className="text-muted text-xs lg:text-sm">Whether it's a product idea, a job opportunity, or just a chat — my inbox is open.</p>
                </div>

                <div className="font-mono text-[10px] lg:text-sm flex flex-col gap-3 text-muted">
                    <div className="border-bottom pb-1 lg:pb-3"><a href="#">@ <span className="ml-2 lg:ml-5">maverickjadebarrientos@gmail.com</span></a></div>
                    <div className="border-bottom pb-1 lg:pb-3"><a href="https://github.com/maverickbarrientos">gh <span className="ml-2 lg:ml-5">github.com/maverickbarrientos</span></a></div>
                    <div><a href="https://www.linkedin.com/in/maverick-barrientos-41b627330/">in <span className="ml-2 lg:ml-5">linkedin.com/in/maverickbarrientos</span></a></div>
                </div>
            </div>


            <div className="flex justify-between px-10 py-3 text-xs text-muted">
                <p>© 2026 Maverick · Built with Care</p>
                <p>Iloilo City, PH</p>
            </div>

        </section>
    </motion.div>
    )

}