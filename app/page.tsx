import Bio from "./sections/Bio";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
    return (
        <>
            <main className="mx-auto max-w-content px-6">
                <Bio />
                <Projects />
                <Skills />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
