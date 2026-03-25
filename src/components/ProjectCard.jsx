export function ProjectCard({ title, children, link, number, accent = "#3a9f6a" }) {

    return (
        <div className="group h-full flex flex-col flex-wrap p-5 px-10 gap-3 border-muted relative overflow-hidden transition-colors duration-150 hover:bg-black/2">
            
            <div 
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: accent }}
            />

            <p className="text-muted font-mono">{ number }</p>
            <p className="font-display text-xl">{ title }</p>
            {children}
            <div className="border-bottom max-w-fit">
                <a href={link} className="font-mono text-xs text-muted">View Project →</a>
            </div>
        </div>
    )
}