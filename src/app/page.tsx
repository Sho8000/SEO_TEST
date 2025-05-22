import SeoHead from "./(components)/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead
        title="SampleRestaurant | This is TEST"
        description="You should Go There!!!"
        ogImage="https://postcardimage.s3.us-east-2.amazonaws.com/7b9c6fea-9a43-4bb2-b984-174b932294d3-Zustand_Logo_90_90.png"
        url="https://seo-test-delta-ruddy.vercel.app/"
      />
      <h1>This is test page for SEO</h1>
    </>
  );
}
