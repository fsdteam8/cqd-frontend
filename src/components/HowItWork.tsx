import { Badge } from "lucide-react";
import Image from "next/image";

const HowItWork = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-between px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            How It Works
          </h2>
          <p className="text-lg md:text-xl">The Interactive Platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
              src="/images/hiw.png"
              alt="Cleaning professionals at work"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Find Local Clients
              </h3>
              <p className="text-lg">
                Easily connect with nearby businesses to share subscriptions.
              </p>
            </div>

            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Turpis dignissim tortor
              tellus eget pulvinar risus tempor congue. Gravida tortor molestie
              cursus in elementum. Ultricies non est tincidunt quisque leo id
              suspendisse ut eget.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge
                variant="outline"
                className="bg-black text-white px-4 py-2 rounded-full"
              >
                Local Networking
              </Badge>
              <Badge
                variant="outline"
                className="bg-black text-white px-4 py-2 rounded-full"
              >
                Business Connections
              </Badge>
              <Badge
                variant="outline"
                className="bg-black text-white px-4 py-2 rounded-full"
              >
                Subscription Sharing
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
