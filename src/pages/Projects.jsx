import { ProjectCard } from "../components/ProjectCard"
import { Badge } from "../components/Badge"
import { motion } from "framer-motion"

const projects = [
    {
     title: "CLARe",
     description: "Full-stack lab reservation system with approval workflows, QR verification, and automated management.",
     technologies: [ "FastAPI", "ReactJS", "ReactNative", "TailwindCSS", "NativeWind", "MySQL" ],
     link: "/view_project",
     accent: `#FF6E01`
    }, 
    {
     title: "PlantPulse",
     description: "A smart plant watering system that automates irrigation using real-time data and precise control.",
     technologies: [ "HTML", "CSS", "Vanilla JavaScript", "Python Flask" ],
     link: "/view_project"
    }
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function Projects () {

    return (

        <motion.div
            id="#projects"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
        <section id="projects">

            <div className="border border-muted">
                <p className="py-5 px-10 font-mono text-xs   lg:text-md">PROJECTS</p>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

                { 
                    projects.map((project, index) => {
                        return (
                            <ProjectCard title={project.title} number={`0${index + 1}`} link={project.link} accent={project.accent}>
                                <p className="text-sm">{ project.description }</p>
                                <div className="flex gap-2">
                                    { project.technologies.map((technology) => {
                                        return (
                                            <Badge text={technology} />
                                        )
                                    }) }
                                </div>
                            </ProjectCard>
                        )
                    })
                }

            </div>

        </section>

    </motion.div>
    )

}