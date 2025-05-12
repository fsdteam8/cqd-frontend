import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Subscription Plan
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the Package that Fits Your Needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Freebie Plan */}
          <Card className="relative flex flex-col border rounded-none rounded-tr-3xl rounded-bl-3xl  shadow-md">
            <CardHeader className="pb-0">
              <h3 className="text-2xl font-bold">Freebie</h3>
              <p className="text-muted-foreground mt-2">
                Lorem ipsum dolor sit amet consectetur. Risus turpis diam tortor
                suspendisse. Nulla.
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold">$0</span>
                <span className="ml-1 text-muted-foreground">/ Month</span>
              </div>
              <Button variant="outline" className="w-full py-6 rounded-md">
                Get Started Now
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-3 pt-4">
              <FeatureItem included text="Lorem ipsum dolor sit amet" />
              <FeatureItem included text="Lorem ipsum dolor sit amet" />
              <FeatureItem included={false} text="Lorem ipsum dolor sit amet" />
              <FeatureItem included={false} text="Lorem ipsum dolor sit amet" />
              <FeatureItem included={false} text="Lorem ipsum dolor sit amet" />
              <FeatureItem included={false} text="Lorem ipsum dolor sit amet" />
              <FeatureItem included={false} text="Lorem ipsum dolor sit amet" />
              <FeatureItem
                included={false}
                text="Lorem ipsum dolor sit amet consectetur. Dictumst molestie eget."
              />
            </CardFooter>
          </Card>

          {/* Professional Plan */}
          <Card className="relative flex flex-col border rounded-none rounded-tr-3xl rounded-bl-3xl shadow-md bg-black text-white">
            <CardHeader className="pb-0">
              <h3 className="text-2xl font-bold">Professional</h3>
              <p className="text-zinc-400 mt-2">
                Lorem ipsum dolor sit amet consectetur. Urna nec non diam non
                nisi nisi egestas.
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold">$25</span>
                <span className="ml-1 text-zinc-400">/ Month</span>
              </div>
              <Button
                variant="default"
                className="w-full py-6 rounded-md bg-white text-black hover:bg-zinc-200"
              >
                Get Started Now
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-3 pt-4">
              <FeatureItem
                included
                text="Lorem ipsum dolor sit amet"
                darkMode
              />
              <FeatureItem
                included
                text="Lorem ipsum dolor sit amet"
                darkMode
              />
              <FeatureItem
                included
                text="Lorem ipsum dolor sit amet"
                darkMode
              />
              <FeatureItem
                included
                text="Lorem ipsum dolor sit amet"
                darkMode
              />
              <FeatureItem
                included
                text="Lorem ipsum dolor sit amet"
                darkMode
              />
              <FeatureItem
                included
                text="Lorem ipsum dolor sit amet"
                darkMode
              />
              <FeatureItem
                included={false}
                text="Lorem ipsum dolor sit amet"
                darkMode
              />
              <FeatureItem
                included={false}
                text="Lorem ipsum dolor sit amet consectetur. Neque curabitur tempor."
                darkMode
              />
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative flex flex-col border rounded-none rounded-tr-3xl rounded-bl-3xl shadow-md">
            <CardHeader className="pb-0">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-muted-foreground mt-2">
                Lorem ipsum dolor sit amet consectetur. Nunc mattis in aliquam
                tellus enim tortor.
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold">$100</span>
                <span className="ml-1 text-muted-foreground">/ Month</span>
              </div>
              <Button variant="outline" className="w-full py-6 rounded-md">
                Get Started Now
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-3 pt-4">
              <FeatureItem included text="Lorem ipsum dolor sit amet" />
              <FeatureItem included text="Lorem ipsum dolor sit amet" />
              <FeatureItem included text="Lorem ipsum dolor sit amet" />
              <FeatureItem included text="Lorem ipsum dolor sit amet" />
              <FeatureItem included text="Lorem ipsum dolor sit amet" />
              <FeatureItem included text="Lorem ipsum dolor sit amet" />
              <FeatureItem included text="Lorem ipsum dolor sit amet" />
              <FeatureItem
                included
                text="Lorem ipsum dolor sit amet consectetur. Proin morbi mi."
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  included: boolean;
  text: string;
  darkMode?: boolean;
}

function FeatureItem({ included, text, darkMode = false }: FeatureItemProps) {
  return (
    <div className="flex items-start">
      <div
        className={`flex-shrink-0 h-5 w-5 rounded-full ${
          included ? (darkMode ? "bg-white" : "bg-slate-100") : ""
        } flex items-center justify-center mr-3`}
      >
        {included ? (
          <Check
            className={`h-4 w-4 ${darkMode ? "text-black" : "text-slate-600"}`}
          />
        ) : (
          <X
            className={`h-4 w-4 ${
              darkMode ? "text-zinc-500" : "text-slate-300"
            }`}
          />
        )}
      </div>
      <span
        className={`text-sm ${
          darkMode && !included
            ? "text-zinc-500"
            : included
            ? ""
            : "text-slate-300"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
