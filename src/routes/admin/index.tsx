import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FolderKanban, MessageSquareQuote, Users } from "lucide-react";
import { AdminShell } from "@/admin/components/AdminLayout";
import { useAdminStore } from "@/admin/store";
import { PROJECT_CATEGORIES } from "@/admin/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/admin/")({
  component: AdminOverviewPage,
});

function AdminOverviewPage() {
  const state = useAdminStore();

  const cards = [
    {
      title: "Projects",
      count: state.projects.length,
      description: "Software, video, design, photo, voice off & prints",
      href: "/admin/projects" as const,
      icon: FolderKanban,
    },
    {
      title: "Trusted By",
      count: state.brands.length,
      description: "Client logos shown on the homepage marquee",
      href: "/admin/trusted-by" as const,
      icon: Users,
    },
    {
      title: "Testimonials",
      count: state.testimonials.length,
      description: "Quotes from partners and clients",
      href: "/admin/testimonials" as const,
      icon: MessageSquareQuote,
    },
  ];

  return (
    <AdminShell title="Overview" description="Manage portfolio content before connecting MongoDB.">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.href} to={card.href} className="group">
              <Card className="h-full border-border/80 bg-card/60 transition-colors group-hover:border-primary/40">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-base">{card.title}</CardTitle>
                    <CardDescription className="mt-1">{card.description}</CardDescription>
                  </div>
                  <div className="rounded-lg border border-border bg-background/60 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent className="flex items-end justify-between">
                  <p className="text-3xl font-semibold tracking-tight">{card.count}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground">
                    Open <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card className="mt-6 border-border/80 bg-card/60">
        <CardHeader>
          <CardTitle className="text-base">Projects by category</CardTitle>
          <CardDescription>Current mock store counts (localStorage).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECT_CATEGORIES.map((category) => {
              const count = state.projects.filter((p) => p.category === category.id).length;
              return (
                <div
                  key={category.id}
                  className="flex items-center justify-between rounded-xl border border-border/70 bg-background/40 px-4 py-3"
                >
                  <span className="text-sm text-muted-foreground">{category.label}</span>
                  <span className="text-sm font-semibold">{count}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </AdminShell>
  );
}
