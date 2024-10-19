import Image from "next/image"

export default function TechTab({title, logo}) {
    return (
        <div className="flex items-center gap-2 text-white font-ubuntu border border-cyan-400 rounded-3xl w-fit py-2 px-3">
            <Image src={logo} width={20} height={20} alt={title} />
            <p>{title}</p>
        </div>
    )
}