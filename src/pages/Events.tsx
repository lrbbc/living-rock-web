import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const upcomingEvents = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM & 11:00 AM",
    location: "All Branches",
    description: "Join us for worship, prayer, and the Word of God",
  },
  {
    title: "Youth Fellowship Night",
    date: "December 15, 2025",
    time: "6:00 PM",
    location: "LRBBC Antipolo",
    description: "An evening of worship, games, and fellowship for young adults",
  },
  {
    title: "Christmas Celebration",
    date: "December 25, 2025",
    time: "10:00 AM",
    location: "All Branches",
    description: "Celebrate the birth of our Savior with special music and message",
  },
  {
    title: "New Year Prayer Vigil",
    date: "December 31, 2025",
    time: "9:00 PM",
    location: "All Branches",
    description: "Welcome the new year with prayer and thanksgiving",
  },
];

const pastEvents = [
  {
    title: "Community Outreach Program",
    date: "November 20, 2025",
    location: "LRBBC Cebu",
    description: "Served over 200 families with food and medical assistance",
  },
  {
    title: "Baptism Service",
    date: "November 15, 2025",
    location: "LRBBC Antipolo",
    description: "20 new believers publicly declared their faith",
  },
  {
    title: "Mission Conference",
    date: "October 28-30, 2025",
    location: "LRBBC Canada",
    description: "Three-day conference on global missions and evangelism",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent text-sm tracking-[0.3em] mb-4 uppercase">Join Us</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Church Events
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Be part of our community through worship, fellowship, and service
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-border hover:border-accent animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <Badge className="bg-accent text-accent-foreground w-fit">Upcoming</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="past" className="space-y-6">
              {pastEvents.map((event, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit">Completed</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Events;
