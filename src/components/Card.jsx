

export function Card({ title, children }) {

    return (

        <div className="border border-muted px-10 py-5">
            <p className="font-mono text-muted text-xs lg:text-sm mb-3">{ title }</p>
            { children }
        </div>

    )

}