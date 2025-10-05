import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "Walking in Faith: A Journey of Trust",
    category: "Devotional",
    date: "December 1, 2025",
    excerpt: "Exploring what it means to truly trust God in every circumstance of life...",
  },
  {
    title: "The Power of Community Prayer",
    category: "Prayer",
    date: "November 28, 2025",
    excerpt: "Discover how praying together strengthens our faith and bonds as believers...",
  },
  {
    title: "Serving with Joy: Ministry Opportunities",
    category: "Service",
    date: "November 25, 2025",
    excerpt: "Learn about the various ways you can serve in our church community...",
  },
  {
    title: "Biblical Wisdom for Daily Living",
    category: "Teaching",
    date: "November 20, 2025",
    excerpt: "Practical applications of Scripture for modern challenges...",
  },
  {
    title: "Testimonies of Faith from Our Members",
    category: "Testimonies",
    date: "November 15, 2025",
    excerpt: "Inspiring stories of God's faithfulness in the lives of our congregation...",
  },
  {
    title: "Understanding God's Grace",
    category: "Teaching",
    date: "November 10, 2025",
    excerpt: "A deep dive into the transformative power of God's unmerited favor...",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent text-sm tracking-[0.3em] mb-4 uppercase">Inspiration</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Church Blog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Reflections, teachings, and stories from our faith community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-10 h-10 text-accent"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 6.5C12 8.15685 10.6569 9.5 9 9.5C7.34315 9.5 6 8.15685 6 6.5C6 4.84315 7.34315 3.5 9 3.5C10.6569 3.5 12 4.84315 12 6.5Z" />
                        <path d="M18 6.5C18 8.15685 16.6569 9.5 15 9.5C13.3431 9.5 12 8.15685 12 6.5C12 4.84315 13.3431 3.5 15 3.5C16.6569 3.5 18 4.84315 18 6.5Z" />
                        <path d="M3 18.5V20.5H21V18.5C21 16.0147 18.9853 14 16.5 14H7.5C5.01472 14 3 16.0147 3 18.5Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
