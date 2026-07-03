import { Icon } from "@iconify/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MockDashboard = () => (
  <div className="flex h-[600px] w-full max-w-[1000px] overflow-hidden rounded-2xl border border-border/50 bg-background/50 text-left shadow-2xl backdrop-blur-xl">
    <div className="hidden w-64 flex-col border-r border-border/50 bg-muted/20 p-4 md:flex">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Icon icon="ph:lightning-bold" className="size-5" />
        </div>
        <span className="font-bold tracking-tight">Acme Corp</span>
      </div>

      <nav className="flex-1 space-y-1">
        <div className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-foreground transition-all">
          <Icon icon="ph:squares-four" className="size-5" />
          Overview
        </div>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground">
          <Icon icon="ph:users" className="size-5" />
          Customers
        </div>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground">
          <Icon icon="ph:chart-line-up" className="size-5" />
          Analytics
        </div>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground">
          <Icon icon="ph:gear" className="size-5" />
          Settings
        </div>
      </nav>

      <div className="mt-auto border-t border-border/50 pt-4">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <Avatar className="size-8 border border-border/50">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-none">Admin</span>
            <span className="text-xs text-muted-foreground">
              admin@acme.com
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-1 flex-col overflow-hidden bg-background/50">
      <header className="flex h-16 items-center justify-between border-b border-border/50 px-6">
        <h2 className="text-lg font-semibold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
            <Icon icon="ph:magnifying-glass" className="size-4" />
            <span>Search (⌘K)</span>
          </div>
          <Badge variant="secondary" className="font-mono text-xs">
            v0.1.0
          </Badge>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-background/40 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <Icon
                icon="ph:currency-dollar"
                className="size-4 text-muted-foreground"
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/40 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Icon icon="ph:users" className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/40 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Icon
                icon="ph:activity"
                className="size-4 text-muted-foreground"
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-7">
          <Card className="col-span-4 bg-background/40 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="flex h-[200px] items-end gap-2 px-4 pb-4 pt-8">
                {[40, 25, 60, 45, 80, 55, 90, 75, 100, 65, 85, 70].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-primary/20 transition-all hover:bg-primary"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3 bg-background/40 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    amount: "+$1,999.00",
                    email: "olivia.m@email.com",
                    name: "Olivia Martin",
                  },
                  {
                    amount: "+$39.00",
                    email: "jackson.l@email.com",
                    name: "Jackson Lee",
                  },
                  {
                    amount: "+$299.00",
                    email: "isabella.n@email.com",
                    name: "Isabella Nguyen",
                  },
                ].map((sale, i) => (
                  <div key={i} className="flex items-center">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>
                        {sale.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {sale.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {sale.email}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">{sale.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
