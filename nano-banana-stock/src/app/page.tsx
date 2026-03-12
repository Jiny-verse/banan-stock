import StepIndicator from "@/components/layout/StepIndicator";
import PlatformSelector from "@/components/platform/PlatformSelector";
import SpecSettings from "@/components/spec/SpecSettings";
import PromptBuilder from "@/components/prompt/PromptBuilder";
import ResultArea from "@/components/prompt/ResultArea";

export default function Home() {
  return (
    <main className="min-h-screen py-10 px-4">
      <StepIndicator />
      <section className="flex flex-col gap-6 max-w-2xl mx-auto mb-32">
        <PlatformSelector />
        <SpecSettings />
        <PromptBuilder />
      </section>
      <ResultArea />
    </main>
  );
}
