import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ChurchBranches from "@/components/ChurchBranches";
import Pastors from "@/components/Pastors";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ChurchBranches />
      <Pastors />
    </div>
  );
};

export default Index;
