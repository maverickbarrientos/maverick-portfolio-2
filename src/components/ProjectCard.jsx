

export function ProjectCard({ title, children, link, number }) {

    return (

        <div className="h-full flex flex-col p-5 px-10 gap-3 border-muted">
            <p className="text-muted font-mono">{ number }</p>
            <p className="font-display text-xl">{ title }</p>
            {children}
            <div className="border-bottom max-w-fit">
                <a href={link} className="font-mono text-sm text-muted">View Project →</a>
            </div>
        </div>

    )

}