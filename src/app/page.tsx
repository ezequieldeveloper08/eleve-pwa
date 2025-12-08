import { HomeActions } from "@/components/home-actions";
import { HomeAppBar } from "@/components/home-app-bar";
import { HomeCarousel } from "@/components/home-carousel";
import { HomeNavbottom } from "@/components/home-navbottom";
import { HomePrayers } from "@/components/home-prayers";
import { HomeProgramming } from "@/components/home-programming";

export default function Home() {
  return (
    <main>
      <HomeAppBar />
      <div className="max-w-xl w-full mx-auto">
        <HomeCarousel />
        <HomeProgramming />
        <HomeActions />
        <HomePrayers />
      </div>
      <HomeNavbottom />
    </main>
  );
}
