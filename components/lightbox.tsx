// @ts-nocheck

import Image from "next/image"

import Lightbox, {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox"

import "yet-another-react-lightbox/styles.css"

import image1 from "@/public/images/gallery-1.png"
import image2 from "@/public/images/gallery-2.png"
import image3 from "@/public/images/gallery-3.png"
import image4 from "@/public/images/gallery-4.png"
import image5 from "@/public/images/gallery-5.png"
import image6 from "@/public/images/gallery-6.png"
import image7 from "@/public/images/gallery-7.png"
import image8 from "@/public/images/gallery-8.png"
import image9 from "@/public/images/gallery-9.png"
import image10 from "@/public/images/gallery-10.png"
import image11 from "@/public/images/gallery-11.png"
import image12 from "@/public/images/gallery-12.png"
import image13 from "@/public/images/gallery-13.png"
import image14 from "@/public/images/gallery-14.png"
import image15 from "@/public/images/gallery-15.png"
import image16 from "@/public/images/gallery-16.png"
import image17 from "@/public/images/gallery-17.png"
import image18 from "@/public/images/gallery-18.png"
import image19 from "@/public/images/gallery-19.png"
import image20 from "@/public/images/gallery-20.png"
import image21 from "@/public/images/gallery-21.png"
import image22 from "@/public/images/gallery-22.png"
import image23 from "@/public/images/gallery-23.png"
import image24 from "@/public/images/gallery-24.png"
import image25 from "@/public/images/gallery-25.png"
import image26 from "@/public/images/gallery-26.png"
import image27 from "@/public/images/gallery-27.png"

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
        quality={75}
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
