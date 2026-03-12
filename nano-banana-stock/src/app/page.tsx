import StepIndicator from "@/components/layout/StepIndicator";
import PresetList from "@/components/prompt/PresetList";
import PlatformSelector from "@/components/platform/PlatformSelector";
import SpecSettings from "@/components/spec/SpecSettings";
import PromptBuilder from "@/components/prompt/PromptBuilder";
import ResultArea from "@/components/prompt/ResultArea";

export default function Home() {
  return (
    <main className="min-h-screen py-10 px-4">
      <StepIndicator />
      <section className="flex flex-col gap-8 max-w-2xl mx-auto mb-32">
        <PresetList />
        <div id="step-1"><PlatformSelector /></div>
        <div id="step-2"><SpecSettings /></div>
        <div id="step-3"><PromptBuilder /></div>
      </section>
      <div id="step-4"><ResultArea /></div>
    </main>
  );
}
