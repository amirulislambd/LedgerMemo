import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { PageHeader } from "../components/ui/page-header";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <PageHeader
          title="AI-powered bookkeeping for everyday shop owners."
          description="This milestone adds reusable base components for the upcoming business workflow screens."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Reusable UI foundation"
            description="Shared building blocks now support a more consistent app experience."
          >
            <div className="flex gap-3">
              <Button>Continue</Button>
              <Button variant="secondary">Learn more</Button>
            </div>
          </Card>

          <Card
            title="Ready for the next step"
            description="The app shell is now prepared for authentication and feature screens."
          />
        </div>
      </div>
    </main>
  );
}
