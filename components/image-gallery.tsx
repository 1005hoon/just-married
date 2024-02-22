"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import { FadeIn } from "./fade-in"
import { LightBox } from "./lightbox"

interface ImageGalleryProps {}

export function ImageGallery(props: ImageGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const onClick = (i: number) => {
    setOpen(true)
    setIndex(i)
  }

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <div>
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, page) => (
              <CarouselItem className="grid grid-cols-3 gap-2" key={page}>
                {Array.from({ length: 9 }).map((_, index) => {
                  // Calculate the correct item number for each page
                  const itemNumber = index + 1 + page * 9

                  return (
                    <FadeIn
                      delay={0.05 * itemNumber}
                      className="relative h-[140px] w-full rounded shadow-lg"
                      key={index}
                    >
                      <Image
                        onClick={() => onClick(itemNumber)}
                        alt="갤러리 이미지"
                        className="rounded object-cover shadow-inner"
                        src={`/images/gallery-${itemNumber}.jpg`}
                        quality={80}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </FadeIn>
                  )
                })}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => {
            return (
              <button
                onClick={() => api?.scrollTo(index)}
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full bg-[#E2DCDC] transition-colors",
                  index === current - 1 && "bg-[#A39292]"
                )}
              ></button>
            )
          })}
        </div>
      </div>
      <LightBox index={index} open={open} close={() => setOpen(false)} />
    </>
  )
}
