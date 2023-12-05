import Stepper from "@/page/resources/Stepper";
import Navigation from "@/page/layout/Navigation";

export default function Page() {
    return (
        <main className="overflow-hidden">
            <div className="absolute top-0 w-full">
                <Navigation />
            </div>
            <div className="container ">
                <Stepper />
            </div>
        </main>
    )
}