import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Sprout } from "lucide";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every assest is verified by us. Not happy? We offer a 7-day refund guarantee.",
  },
  {
    name: "For our Planet",
    Icon: Sprout,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="text-center items-center py-20 mx-auto flex flex-col max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            A marketplace for high-quality{" "}
            <span className="text-rose-600">Digital Assets</span>.
          </h1>
          <p className="max-w-prose text-muted-foreground mt-6 text-lg">
            Welcome to DigitalMonkey. Every assest on our platform is verified
            by us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Products &rarr;
            </Link>
            <Button variant="ghost">Our Products</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div></div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
