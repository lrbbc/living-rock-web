import { Card, CardContent } from "@/components/ui/card";

const pastors = [
  {
    name: "Pastor John Smith",
    church: "LRBBC Antipolo",
    role: "Senior Pastor",
  },
  {
    name: "Pastor Maria Santos",
    church: "LRBBC Vigan",
    role: "Lead Pastor",
  },
  {
    name: "Pastor David Kim",
    church: "LRBBC South Korea",
    role: "Lead Pastor",
  },
  {
    name: "Pastor Michael Johnson",
    church: "LRBBC Canada",
    role: "Lead Pastor",
  },
  {
    name: "Pastor Anna Cruz",
    church: "LRBBC Guiuan, Samar",
    role: "Lead Pastor",
  },
  {
    name: "Pastor Robert Garcia",
    church: "LRBBC Cebu",
    role: "Lead Pastor",
  },
];

const Pastors = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent text-sm tracking-[0.3em] mb-4 uppercase">Our Leadership</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Pastors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated servants leading our congregations with faith, wisdom, and compassion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pastors.map((pastor, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-20 h-20 text-accent"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                  {pastor.name}
                </h3>
                <p className="text-accent font-medium mb-1">{pastor.role}</p>
                <p className="text-muted-foreground text-sm">{pastor.church}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pastors;
