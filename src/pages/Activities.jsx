import { Badge } from "../components/Badge"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const activities = [
    {
        title: "Iloilo Provincial Hackathon",
        type: "HACKATHON",
        location: "ISAT-U · Iloilo City",
        date: "Sep 2025",
        description: "Participated in the Iloilo Provincial Hackathon, where we collaborated to design and develop a working solution under time constraints."
    }, 
    {
        title: "CITE Week Hackathon",
        type: "HACKATHON", 
        location: "PHINMA-UI · Iloilo City",
        date: "Oct 2025",
        description: "Led a team to a 1st Runner-Up finish in the PHINMA-UI CITE Week Hackathon, coordinating development and delivering a working solution under pressure."
    }, 
    {
        title: "Python TechBoost",
        type: "SPEAKER",
        location: "PHINMA-UI · Iloilo City",
        date: "Dec 2025",
        description: "Assisted in teaching Python fundamentals to freshmen, contributing a session on basic programming concepts."
    },
    {
        title: "F1StackMind Code Craft",
        type: "SPEAKER",
        location: "PHINMA-UI · Iloilo City",
        date: "Feb 2026",
        description: "Served as Microcontroller Project Manager, leading development and teaching Arduino microcontrollers."
    }
]

export function Activities() {

    return (

        <motion.div
            id="#activities"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
        <section id="activities">

            <div className="border border-muted">
                <p className="py-5 px-10 text-md font-mono">ACTIVITIES</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2">

                {
                    activities.map((activity) => {
                        return (
                            <div className="grid grid-cols-4 border-muted">
                                <div className="col-span-1 border-r-muted px-5 py-5 flex flex-col gap-2 min-w-0">
                                    <p className="font-mono text-muted text-xs whitespace-nowrap">{ activity.date }</p>
                                    <Badge text={activity.type} />
                                </div>
                                <div className="col-span-3 text-xs flex flex-col gap-2 py-5 px-10">
                                    <p className="text-sm">{ activity.title }</p>
                                    <p className="font-mono text-muted">{ activity.location }</p>
                                    <p className="text-muted">{ activity.description }</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </section>
    </motion.div>
    )

}