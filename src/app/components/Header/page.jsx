import Link from "next/link"

export default function Header() {
    return (
        <header className="w-screen h-14 bg-slate-800">
            <nav className="max-w-[1920px] h-full w-full m-auto">
                <ul className="w-full h-full text-white flex items-center justify-center gap-3">
                    <li><Link href={'/'}>Inicio</Link></li>
                    <li><Link href={'/'}>Sobre Mim</Link></li>
                    <li><Link href={'/'}>Skills</Link></li>
                    <li><Link href={'/'}>Projetos</Link></li>
                    <li><Link href={'/'}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}