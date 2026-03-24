import { Card } from "../components/Card"
import { Badge } from "../components/Badge"

const techStack = {
    languages: [ "Python", "JavaScript", "TypeScript", "Java", "C++" ],
    frontend: [ "ReactJS", "VueJS", "VanillaJS", "ReactNative" ],
    backend: [ "Flask", "FastAPI", "MySQL", "FastAPI User Manager", "JWT" ],
    roboticsAndHardware: [ "Arduino", "ESP32", "IoT", "MQTT" ]
}

export function TechStack() {

    return (

        <div>

            <div className="border border-muted">
                <p className="py-5 px-10 font-mono">SKILLS & STACK</p>
            </div>

            <div className="flex-1 grid grid-cols-4 min-w-0">
                
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

        </div>

    )

}