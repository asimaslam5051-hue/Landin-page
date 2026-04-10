
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 


type Props = 
            { title: string; 
              description: string;
              pro?:boolean;
            };
export function AnalyticsCard({ title, description, pro = false }: Props) {
  return (
    <Card className="relative w-full max-w-xl flex flex-col gap-4 p-6 rounded-xl border bg-background transition-all duration-300 hover:shadow-lg h-full">
      {pro && (
        <span className="absolute top-1 right-0 rounded-md bg-secondary  py-0.5 text-xs font-medium text-secondary-foreground">
          PRO
        </span>
      )}
      <CardHeader className="flex justify-between items-center p-0">
        <CardTitle className="text-lg font-semibold">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 text-muted-foreground leading-relaxed text-sm max-w-md">
        {description}
      </CardContent>

    </Card>
  );
}