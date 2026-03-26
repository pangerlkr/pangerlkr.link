import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="relative w-full">
      {/* The scrollytelling section with sticky canvas and overlay */}
      <ScrollyCanvas />

      {/* The Projects Section below */}
      <Projects />
    </main>
  );
}
