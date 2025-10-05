import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Heart, Store, Users, Church } from "lucide-react";

const Pages = () => {
  const pageLinks = [
    {
      icon: Church,
      title: "About Us",
      description: "Learn about our history, mission, and vision",
      link: "/",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Meet our pastors and ministry leaders",
      link: "/",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Upcoming and past church events",
      link: "/events",
    },
    {
      icon: Heart,
      title: "Donations",
      description: "Support our ministry and outreach",
      link: "/donations",
    },
    {
      icon: BookOpen,
      title: "Blog",
      description: "Reflections and teachings",
      link: "/blog",
    },
    {
      icon: Store,
      title: "Shop",
      description: "Church resources and merchandise",
      link: "/shop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent text-sm tracking-[0.3em] mb-4 uppercase">Explore</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              All Pages
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover everything our church has to offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pageLinks.map((page, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <page.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-center group-hover:text-accent transition-colors">
                    {page.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {page.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link to={page.link}>
                    <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-all">
                      Visit Page
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
