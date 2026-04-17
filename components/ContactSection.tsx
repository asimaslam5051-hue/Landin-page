import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"

export default function(){
    return(
        <section className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 md:grid-cols-2 mt-12">
            {/*left side */}
            <div className="flex flex-col gab-6">

              <div className="bg-muted rounded-lg border p-6">
                <div className="mb-4 flex items-center gap-e font-bold">
                    📍 Location:  
                </div>
              
                <div className="text-muted-foreground">
                      123 Maple Lane, Springfield, IL 62704
                </div>
              </div>
              <div className="bg-muted rounded-lg border p-6 mt-6">
                <div className="mb-4 flex items-center gap-e font-bold">
                    📞 Call us:
                </div>
              
                <div className="text-muted-foreground">
                    +1 (555) 987-6543
                </div>
              </div>
              <div className="bg-muted rounded-lg border p-6 mt-6">
                <div className="mb-4 flex items-center gap-e font-bold">
                    ✉️ Email us:
                </div>
              
                <div className="text-muted-foreground">
                    contact@ourcompany.com
                </div>
              </div>
              <div className="bg-muted rounded-lg border p-6 mt-6">
                <div className="mb-4 flex items-center gap-e font-bold">
                    🕒 Business Hours:
                </div>
              
                <div className="text-muted-foreground">
                    Tuesday to Saturday, 9 AM - 5 PM
                </div>
              </div>
            </div>
            {/*Right side */}
            <Card className="bg-muted rounded-xl py-6">
             <CardHeader>
               <CardTitle>Send Message</CardTitle>
    
             </CardHeader>
             <CardContent>
              <form className="grid gap-6">
                <div className="flex flex-col gap-6 md:flex-row">
                    <input
                      type="text"
                      placeholder= "First Name"
                      className="w-full rounded-md border px-3 py-2 bg-transparent"
                    />
                    <input
                      type="text"
                      placeholder= "Last Name"
                      className="w-full rounded-md border px-3 py-2 bg-transparent"
                    />
                </div>
                    <input
                      type="Email"
                      placeholder= "contact@bundui.com"
                      className="w-full rounded-md border px-3 py-2 bg-transparent"
                    />
                    <select className="w-full rounded-md border px-3 py-1 bg-transparent">
                      <option>Select a subject</option>
                      <option>  Web Development</option>
                      <option>Mobile Development</option>
                      <option>figma Design</option>
                      <option>Rest API</option>
                      <option>Full Stack Project</option>
                    
                    </select>
                    {/*message */}
                    <textarea 
                    rows={5}
                    placeholder="your Message..."
                    className="w-full rounded-md border px-3 py-2 bg-transparent resize-none"
                    >
                    </textarea>
                    {/*Button */}
                    <Button className="bg-yellow-700 text-primary-foreground rounded-md px-6 py-5 mt-20 hover:bg-yellow-600 transition">
                      Send Message
                    </Button>
              </form>
             </CardContent>
            </Card>
        </section>
    )
}