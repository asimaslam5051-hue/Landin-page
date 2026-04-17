import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartLine } from "lucide-react";

type Props = {
  
  title: string;
  description: string;
};

export function Cards({ title,  description }: Props) {
  return (
       <Card className="w-full max-w-xl flex flex-col gap-6 rounded-xl border bg-background   transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex justify-between items-start px-6">
        
       
        <div className="flex items-center gap-4">
          <ChartLine className="text-primary bg-primary/20 rounded-full p-2 size-10 ring-8 ring-primary/10" />
          <div>
                <CardTitle className="text-lg font-semibold">
                    {title}
                </CardTitle>
            </div>
        </div>

       
        

      </CardHeader>

      <CardContent className="px-6 text-muted-foreground leading-relaxed">
        {description}
      </CardContent>
      

    </Card>
  );
}