import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-8xl font-bold mb-4">
          <GradientText>404</GradientText>
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
          Lost? Let&rsquo;s get you back.
        </h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Button variant="gradient" href="/">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
