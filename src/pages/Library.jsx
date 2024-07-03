import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LibraryPage = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Playlist 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the playlist.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Playlist 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the playlist.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Liked Songs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Liked Song 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the liked song.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Liked Song 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the liked song.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Albums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Album 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the album.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Album 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the album.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LibraryPage;