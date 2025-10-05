import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Church, Users } from "lucide-react";

const Donations = () => {
  const donationCategories = [
    {
      icon: Church,
      title: "Building Fund",
      description: "Support the construction and maintenance of our church facilities",
    },
    {
      icon: Users,
      title: "Mission & Outreach",
      description: "Help us spread the Gospel and serve communities in need",
    },
    {
      icon: HandHeart,
      title: "Benevolence Fund",
      description: "Assist families and individuals facing financial hardship",
    },
    {
      icon: Heart,
      title: "General Fund",
      description: "Support the day-to-day operations and ministries of the church",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent text-sm tracking-[0.3em] mb-4 uppercase">Give Back</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Support Our Ministry
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your generous contributions help us continue spreading God's love and serving our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {donationCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-border hover:border-accent animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10">
                    <category.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-center">{category.title}</CardTitle>
                  <CardDescription className="text-center">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="gold-gradient text-accent-foreground hover:opacity-90 transition-opacity">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto bg-muted/30">
            <CardHeader>
              <CardTitle className="text-center">Other Ways to Give</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Bank Transfer</h3>
                <p className="text-muted-foreground text-sm">
                  Account Name: Living Rock Bible Baptist Church<br />
                  Account Number: 1234-5678-9012<br />
                  Bank: Sample Bank
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mail a Check</h3>
                <p className="text-muted-foreground text-sm">
                  Living Rock Bible Baptist Church<br />
                  123 Church Street<br />
                  Antipolo City, Philippines
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">In Person</h3>
                <p className="text-muted-foreground text-sm">
                  Visit any of our church locations during service times
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donations;
