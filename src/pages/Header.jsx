import { useState } from "react"

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between py-6 px-10 border-bottom font-mono">
                <a>Maverick Barrientos</a>

                <div className="hidden lg:flex gap-5 text-muted">
                    <a href="#projects">PROJECT</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#activities">ACTIVITIES</a>
                    <a href="#contact">CONTACT</a>
                </div>

                <button 
                    className="lg:hidden font-mono text-muted"
                    onClick={() => setIsOpen(true)}
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/30 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`fixed top-0 left-0 h-full w-64 z-50 bg-white flex flex-col py-10 px-8 gap-8 font-mono transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                
                <div className="flex justify-between items-center">
                    <a>Maverick Barrientos</a>
                    <button onClick={() => setIsOpen(false)} className="text-muted">✕</button>
                </div>

                <div className="flex flex-col gap-5 text-muted">
                    <a href="#projects" onClick={() => setIsOpen(false)}>PROJECT</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>SKILLS</a>
                    <a href="#activities" onClick={() => setIsOpen(false)}>ACTIVITIES</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
                </div>

            </div>
        </>
    )
}