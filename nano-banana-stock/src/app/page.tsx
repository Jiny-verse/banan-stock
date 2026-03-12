import StepIndicator from "@/components/layout/StepIndicator";
import PlatformSelector from "@/components/platform/PlatformSelector";
import SpecSettings from "@/components/spec/SpecSettings";

export default function Home() {
  return (
    <main className="min-h-screen py-10 px-4">
      <StepIndicator />
      <section className="flex flex-col gap-6 max-w-2xl mx-auto">
        <PlatformSelector />
        <SpecSettings />
      </section>
    </main>
  );
}
