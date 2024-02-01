import { FadeIn } from "./fade-in"
import { ImageGallery } from "./image-gallery"

interface GalleryProps {}

export function Gallery(props: GalleryProps) {
  return (
    <section className="mt-14 flex flex-col items-center px-5">
      <FadeIn className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-light uppercase text-slate-500">Gallery</h2>
        <h2 className="text-xl font-bold">웨딩 갤러리</h2>
      </FadeIn>
      <div className="mt-10 w-full">
        <ImageGallery />
      </div>
    </section>
  )
}
