"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DiscordSection() {
  return (
    <section className="pb-28 sm:pb-32">
      <div className="container px-2">
        <div className="mx-auto max-w-7xl">

          <Card className="rounded-xl py-6 mt-28 shadow-sm border border-border/50">

            <CardHeader className="px-6">
              <CardTitle className="flex flex-col items-center text-3xl font-bold md:text-4xl text-center">

                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={80}
                  height={80}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mb-4 text-primary"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009z" />
                </svg>

                <div>
                  Ready to join this
                  <span className="text-yellow-700 pl-2">
                    Community?
                  </span>
                </div>

              </CardTitle>
            </CardHeader>

            <CardContent className="px-6 mx-auto max-w-screen-sm text-center text-xl text-muted-foreground space-y-4">
              <p>
                Join our vibrant Discord community! Connect, share, and grow with like-minded enthusiasts.
              </p>
            </CardContent>

            <CardFooter className="flex justify-center bg-background py-6">
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-yellow-700 text-secondary-foreground px-6 h-10 text-sm font-medium shadow hover:bg-yellow-600 transition hover:scale-105"
              >
                Click to dive in!
              </a>
            </CardFooter>

          </Card>

        </div>
      </div>
    </section>
  );
}