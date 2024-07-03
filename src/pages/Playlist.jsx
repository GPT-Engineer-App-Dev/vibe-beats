import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PlaylistPage = () => {
  return (
    <div className="space-y-8">
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Playlist Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Playlist description goes here.</p>
            <Button variant="primary" className="mt-4">Play</Button>
          </CardContent>
        </Card>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Songs</h2>
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Song 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the song.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Song 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the song.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PlaylistPage;