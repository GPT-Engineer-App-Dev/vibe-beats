import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Browse = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Genres & Moods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Genre 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the genre.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Genre 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the genre.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Top Charts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Chart 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the top chart.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top Chart 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some description about the top chart.</p>
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

export default Browse;