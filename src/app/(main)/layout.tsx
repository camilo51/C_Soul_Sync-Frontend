import Card from "@/components/Card";
import Header from "@/components/Header"
import { MoonIcon } from "@heroicons/react/16/solid";

export default function MainLayout() {
  return (
    <>
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden pb-2">
                <aside className="w-3/12 px-2 h-full">
                    <div className="bg-gray-300 w-full h-full rounded-lg p-2 flex flex-col justify-between">
                        <div>
                            <h2 className="text-lg font-bold mb-5 p-3">Tu biblioteca</h2>
                            <div className="space-y-5">
                                <Card 
                                    title="Crea tu propia lista"
                                    description="Es muy facil crear una lista, solo tienes que darle click al boton de abajo"
                                    button="Crear lista"
                                />
                                <Card 
                                    title="Encuentra nuevos artistas"
                                    description="Explora y descubre nuevos artistas que te encantarán"
                                    button="Explorar"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="p-2 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600 transition-colors duration-300">
                                <MoonIcon className="w-7 aspect-square text-black" />
                            </button>
                        </div>
                    </div>
                </aside>
                <main className="w-9/12 px-2 overflow-y-auto">
                    <div className="bg-gray-300 w-full h-full rounded-lg">

                    </div>
                    
                </main>
            </div>
        </div>
    </>
  );
}
