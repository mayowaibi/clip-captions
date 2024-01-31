import ClipIcon from "../components/ClipIcon";
import DemoSection from "../components/DemoSection";
import UploadForm from "../components/UploadForm";

export default function Home() {
  return (
    <main className="p-4 max-w-2xl mx-auto">
      <header className="my-8 flex justify-center text-3xl">
        <a href="/" className="flex gap-1">
        <ClipIcon />
        <span>ClipCaptions</span>
          </a>
      </header>
      <div className="text-center mt-16 mb-10">
        <h1 className="text-3xl mb-3">
          Add captions to your clips
          </h1>
        <h2 className="text-white/75">
          Upload your clip below
          </h2>
      </div>
      <div className="text-center">
        <UploadForm />
        <DemoSection />
      </div>
    </main>
  );
}