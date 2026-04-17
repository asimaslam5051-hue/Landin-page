import Image from "next/image"
import { IoLogoLinkedin } from "react-icons/io5"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

type Props = {
  name: string
  role: string
  image: string
  social: {
    linkedin: string
    github: string
    twitter: string
  }
}

export function Profilecard({ name, role, image, social }: Props) {
  return (
   <Card className="flex flex-col pt-0 bg-muted rounded-lg h-full overflow-hidden group">
      {/* IMAGE */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
        className="object-cover w-full h-80 transition-all grayscale opacity-50 group-hover:scale-105 hover:grayscale-20 Opacity-60"
          
        />
      </div>

      {/* NAME */}
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          {name}
        </CardTitle>
      </CardHeader>

      {/* ROLE */}
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {role}
        </p>
      </CardContent>

      {/* SOCIAL */}
      <CardFooter className="flex justify-center gap-4 pb-4 sm:pb-6">
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin className="size-5 sm:size-6 hover:text-blue-500 transition" />
        </a>

        <a href={social.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="size-5 sm:size-6 hover:text-black transition" />
        </a>

        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="size-5 sm:size-6 hover:text-gray-700 transition" />
        </a>
      </CardFooter>

    </Card>
  )
}