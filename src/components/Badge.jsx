export function Badge({ text }) {
    return (
        <div className="inline-flex border-muted bg-muted rounded-sm w-fit">
            <p className="font-mono text-muted text-xs px-2 py-1 whitespace-nowrap">{ text }</p>
        </div>
    )
}