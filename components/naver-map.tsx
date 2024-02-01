"use client"

import { useEffect, useRef } from "react"

interface NaverMapProps {}

export function NaverMap(props: NaverMapProps) {
  const mapElement = useRef(null)

  useEffect(() => {
    if (!mapElement.current || !window.naver) return

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.

    const location = new window.naver.maps.LatLng(37.286753351973466, 127.03636076924276)
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    }

    const map = new window.naver.maps.Map(mapElement.current, mapOptions)

    new window.naver.maps.Marker({
      position: location,
      map,
    })
  }, [])

  return <div id="map" className="h-full w-full" ref={mapElement} />
}
