'use client'
import Box from "@/components/objects/Box"
import { Canvas } from "@react-three/fiber"

export default function Page() {
    return (
        <main className="bg-red-200 w-full h-[100vh]">
            <Canvas className="h-full w-full bg-gray-300">
                <Box />
            </Canvas>
        </main>
    )
}