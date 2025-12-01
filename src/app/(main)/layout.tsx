import Emotion from "@/components/Emotion";
import Header from "@/components/Header"
import Navigation from "@/components/Navigation";
import Profile from "@/components/Profile";
export default function MainLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden pb-2">
                <aside className="w-3/12 px-2 h-full">
                    <div className="bg-gray-950/85 w-full h-full rounded-lg p-5 flex flex-col justify-between">
                        <div className="space-y-5">
                            <Profile />
                            <Emotion />
                        </div>
                        <Navigation />
                    </div>
                </aside>
                <main className="w-9/12 px-2 overflow-y-auto">
                    <div className="bg-gray-950/85 w-full h-full rounded-lg p-5">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    </>
  );
}