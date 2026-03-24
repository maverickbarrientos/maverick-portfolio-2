

export function Hero() {

    return (
        <div className="grid grid-cols-3 px-10">
            
            <div className="flex flex-col items-start gap-6 col-span-2 border-r border-r-muted py-10">
                <p className="font-mono text-muted font-light">FULL STACK DEVELOPER</p>
                <p className="font-display font-bold text-5xl leading-tight">
                    I build web applications <br />
                    and embed hardware into functional systems.
                </p> 
                <p className="font-body text-muted leading-relaxed max-w-md">
                    Focused on creating efficient, real-world solutions through software and hardware integration.
                    <br />
                    Currently open to new opportunities.
                </p>
                <button className="font-mono border-muted p-2 text-sm rounded-lg hover:bg-">View my work ↓</button>
            </div>

            <div className="col-span-1 flex flex-col justify-between px-5 py-10">
                <p className="font-mono text-muted items-center flex"><span className="w-2 h-2 rounded-full bg-green-400 inline-block mr-2"></span>Available for work</p>

                <div className="font-mono flex flex-col gap-2">
                    <p className="text-muted font-medium">BASED IN</p>
                    <p className="font-normal text-2xl">Iloilo City, <br /> <span className="font-bold">PH</span></p>
                </div>
            </div>
        </div>
    )

}