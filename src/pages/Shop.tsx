import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "Study Bible",
    price: "$39.99",
    category: "Books",
  },
  {
    name: "Worship Music CD",
    price: "$14.99",
    category: "Music",
  },
  {
    name: "Faith T-Shirt",
    price: "$19.99",
    category: "Apparel",
  },
  {
    name: "Prayer Journal",
    price: "$12.99",
    category: "Stationery",
  },
  {
    name: "Church Tote Bag",
    price: "$15.99",
    category: "Accessories",
  },
  {
    name: "Devotional Book",
    price: "$16.99",
    category: "Books",
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent text-sm tracking-[0.3em] mb-4 uppercase">Resources</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Church Shop
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Books, music, apparel, and more to enrich your faith journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-12 h-12 text-accent"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L5.70711 14.2929C5.07714 14.9229 5.52331 16 6.41421 16H17M17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16ZM9 18C9 19.1046 8.10457 20 7 20C5.89543 20 5 19.1046 5 18C5 16.8954 5.89543 16 7 16C8.10457 16 9 16.8954 9 18Z" />
                      </svg>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-accent transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{product.price}</span>
                    <Button className="gold-gradient text-accent-foreground hover:opacity-90 transition-opacity">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
