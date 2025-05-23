import SeoHead from "./(components)/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead
        title="SampleRestaurant | This is TEST sample restaurant page to check SEO"
        description="Explore a sample restaurant website based in Vancouver, built for SEO testing and demo purposes."
        ogImage="https://postcardimage.s3.us-east-2.amazonaws.com/7b9c6fea-9a43-4bb2-b984-174b932294d3-Zustand_Logo_90_90.png"
        url="https://vancouver-sample-seo-test-restaurant.vercel.app/"
        googleVerification="google1574aaf162ed4e0c.html"
      />
      <h1>Welcome to Sample Restaurant — Best Test Page for SEO</h1>
      <p>This page is a great example for learning SEO, restaurant keywords, and how to optimize your site for search engines.</p>
    </>
  );
}
