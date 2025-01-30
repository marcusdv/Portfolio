import Bio from './sections/Bio';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Challenge30d30s from './sections/Challenge30d30s';

export default function Home() {
    return (
        <>
            <div className="container m- mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7 ">
                <div className="">
                    <Bio />
                    <Skills />
                </div>
                <div className="flex flex-col gap-4 md:col-span-2 ">
                    <Projects />
                    <Challenge30d30s />
                </div>
            </div>
        </>
    );
}