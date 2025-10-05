import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const branches = [
  {
    name: "LRBBC Antipolo",
    subtitle: "Main Church",
    location: "Antipolo City, Philippines",
  },
  {
    name: "LRBBC Vigan",
    subtitle: "Branch Church",
    location: "Vigan City, Philippines",
  },
  {
    name: "LRBBC Canada",
    subtitle: "International Branch",
    location: "Toronto, Canada",
  },
  {
    name: "LRBBC South Korea",
    subtitle: "International Branch",
    location: "Seoul, South Korea",
  },
  {
    name: "LRBBC Guiuan, Samar",
    subtitle: "Branch Church",
    location: "Guiuan, Samar, Philippines",
  },
  {
    name: "LRBBC Cebu",
    subtitle: "Branch Church",
    location: "Cebu City, Philippines",
  },
];

const ChurchBranches = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent text-sm tracking-[0.3em] mb-4 uppercase">Our Locations</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Church Branches
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Living Rock Bible Baptist Church serves communities across the globe with six vibrant locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {branches.map((branch, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-8 h-8 text-accent"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 21V12L12 3L21 12V21H15V14H9V21H3Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-foreground group-hover:text-accent transition-colors">
                  {branch.name}
                </h3>
                <p className="text-accent text-center mb-4 text-sm font-medium">
                  {branch.subtitle}
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{branch.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchBranches;
