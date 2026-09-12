import PageHero from "../components/common/PageHero";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Take a glimpse into the learning experiences, activities, celebrations, and memorable moments at JADHAV Public School."
      />
      <Gallery />
    </>
  );
};

export default GalleryPage;