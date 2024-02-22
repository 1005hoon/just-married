// @ts-nocheck

import Image from "next/image"

import Lightbox, {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox"

import "yet-another-react-lightbox/styles.css"

import image1 from "@/public/images/gallery-1.jpg"
import image2 from "@/public/images/gallery-2.jpg"
import image3 from "@/public/images/gallery-3.jpg"
import image4 from "@/public/images/gallery-4.jpg"
import image5 from "@/public/images/gallery-5.jpg"
import image6 from "@/public/images/gallery-6.jpg"
import image7 from "@/public/images/gallery-7.jpg"
import image8 from "@/public/images/gallery-8.jpg"
import image9 from "@/public/images/gallery-9.jpg"
import image10 from "@/public/images/gallery-10.jpg"
import image11 from "@/public/images/gallery-11.jpg"
import image12 from "@/public/images/gallery-12.jpg"
import image13 from "@/public/images/gallery-13.jpg"
import image14 from "@/public/images/gallery-14.jpg"
import image15 from "@/public/images/gallery-15.jpg"
import image16 from "@/public/images/gallery-16.jpg"
import image17 from "@/public/images/gallery-17.jpg"
import image18 from "@/public/images/gallery-18.jpg"
import image19 from "@/public/images/gallery-19.jpg"
import image20 from "@/public/images/gallery-20.jpg"
import image21 from "@/public/images/gallery-21.jpg"
import image22 from "@/public/images/gallery-22.jpg"
import image23 from "@/public/images/gallery-23.jpg"
import image24 from "@/public/images/gallery-24.jpg"
import image25 from "@/public/images/gallery-25.jpg"
import image26 from "@/public/images/gallery-26.jpg"
import image27 from "@/public/images/gallery-27.jpg"

function isNextJsImage(slide) {
  return isImageSlide(slide) && typeof slide.width === "number" && typeof slide.height === "number"
}

export default function NextJsImage({ slide, offset, rect }) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps()

  const { currentIndex } = useLightboxState()

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

  if (!isNextJsImage(slide)) return undefined

  const width = !cover
    ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width))
    : rect.width

  const height = !cover
    ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height))
    : rect.height

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={slide}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        loading="eager"
        quality={100}
        draggable={false}
        placeholder={slide.blurDataURL ? "blur" : undefined}
        style={{
          cursor: click ? "pointer" : undefined,
        }}
        onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
      />
    </div>
  )
}

interface LightBoxProps {
  index: number
  open: boolean
  close: () => void
}

export function LightBox(props: LightBoxProps) {
  return (
    <Lightbox
      {...props}
      index={props.index - 1}
      styles={{
        container: {
          backgroundColor: "#484848E6",
        },
      }}
      slides={[
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
      ]}
      render={{ slide: NextJsImage }}
    />
  )
}
