import { ProjectCard } from "../components/ProjectCard"
import { Badge } from "../components/Badge"

const projects = [
    {
     title: "CLARe",
     description: "Full-stack lab reservation system with approval workflows, QR verification, and automated management.",
     technologies: [ "FastAPI", "ReactJS", "ReactNative", "TailwindCSS", "NativeWind", "MySQL" ],
     link: "/view_project"
    }, 
    {
     title: "PlantPulse",
     description: "A smart plant watering system that automates irrigation using real-time data and precise control.",
     technologies: [ "HTML", "CSS", "Vanilla JavaScript", "Python Flask" ],
     link: "/view_project"
    }
]

export function Projects () {

    return (

        <div>

            <div className="border border-muted">
                <p className="py-5 px-10 font-mono">PROJECTS</p>
            </div>

            <div className="flex-1 grid grid-cols-2">

                { 
                    projects.map((project, index) => {
                        return (
                            <ProjectCard title={project.title} number={`0${index + 1}`} link={project.link}>
                                <p>{ project.description }</p>
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

        </div>

    )

}