import { Card } from "../components/Card"
import { Badge } from "../components/Badge"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const techStack = {
    languages: [ "Python", "JavaScript", "TypeScript", "Java", "C++" ],
    frontend: [ "ReactJS", "VueJS", "VanillaJS", "ReactNative" ],
    backend: [ "Flask", "FastAPI", "MySQL", "FastAPI User Manager", "JWT" ],
    roboticsAndHardware: [ "Arduino", "ESP32", "IoT", "MQTT" ]
}

export function TechStack() {

    return (


        <motion.div
            id="#skills"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
        <section id="skills">

            <div className="border border-muted">
                <p className="py-5 px-10 text-md font-mono">SKILLS & STACK</p>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 min-w-0">
                
                <Card title={"Languages"}>
                    <div className="flex flex-wrap gap-2">
                        { 
                            techStack.languages.map((language) => {
                                return (
                                    <Badge text={language} />
                                )
                            })
                        }
                    </div>
                </Card>

                <Card title={"Frontend"}>
                    <div className="flex flex-wrap gap-2">
                        { 
                            techStack.frontend.map((frontend) => {
                                return (
                                    <Badge text={frontend} />
                                )
                            })
                        }
                    </div>
                </Card>

                <Card title={"Backend & DB"}>
                    <div className="flex flex-wrap gap-2">
                        { 
                            techStack.backend.map((backend) => {
                                return (
                                    <Badge text={backend} />
                                )
                            })
                        }
                    </div>
                </Card>

                <Card title={"Internet of Things"}>
                    <div className="flex flex-wrap gap-2">
                        { 
                            techStack.roboticsAndHardware.map((roboticsAndHardware) => {
                                return (
                                    <Badge text={roboticsAndHardware} />
                                )
                            })
                        }
                    </div>
                </Card>

            </div>

        </section>
    </motion.div>
    )

}