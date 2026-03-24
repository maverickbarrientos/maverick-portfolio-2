
export function Badge({ text }) {

    return (

        <div className="border-muted max-w-fit bg-muted rounded-sm">
            <p className="font-mono text-muted text-xs px-2 py-1">{ text }</p>
        </div>

    )

}