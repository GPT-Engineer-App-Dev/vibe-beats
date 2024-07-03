import { Carousel } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Featured Album 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Some description about the album.</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Featured Album 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Some description about the album.</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recently Played</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Recently Played 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the recently played item.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recently Played 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the recently played item.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Popular Playlist 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the popular playlist.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Popular Playlist 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the popular playlist.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>New Release 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the new release.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New Release 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the new release.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;