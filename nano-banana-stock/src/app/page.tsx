import StepIndicator from "@/components/layout/StepIndicator";
import PlatformSelector from "@/components/platform/PlatformSelector";

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <StepIndicator />
      <section className="flex flex-col gap-6 max-w-2xl mx-auto">
        <PlatformSelector />
      </section>
    </main>
  );
}
