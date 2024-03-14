import React, { useState, useEffect, useRef, FC } from "react"

interface Props {
  speed: number
  end: number
}

const AnimatedLine: FC<Props> = ({ speed, end }) => {
  const [length, setLength] = useState<number>(0)
  const pathRef = useRef<SVGPathElement>(null)
  const containerRef = useRef<SVGSVGElement>(null)
  const [containerHeight, setContainerHeight] = useState<number | null>(null)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength()
      setLength(pathLength)
    }
  }, [end, containerHeight, containerWidth])

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth)
      setContainerHeight(containerRef.current.clientHeight)
    }
  }, [containerRef])

  useEffect(() => {
    let c = 0
    const interval = setInterval(() => {
      setCurrent(c++)
      if (c > end) {
        clearInterval(interval)
      }
    }, 40 / speed)
  }, [end])

  const animationStyle = {
    strokeDasharray: length,
    strokeDashoffset: length,
    animation: `draw ${10 / speed}s forwards`,
  }

  const peakX = 300
  const peakY = 250
  const endY = 100

  return (
    <>
      <svg ref={containerRef} width="100%" height="100%">
        {containerHeight && containerWidth && (
          <path
            ref={pathRef}
            d={`M${0},${containerHeight} Q${peakX},${peakY} ${
              containerWidth - 200
            },${endY}`}
            stroke="rgb(75, 192, 192)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            style={animationStyle}
          />
        )}
        <style>
          {`@keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
				`}
        </style>
      </svg>
      <div className="absolute right-0 top-0 w-full flex justify-center">
        <h2 className="text-4xl m-auto font-bold font-mono mt-4">{current}x</h2>
      </div>
    </>
  )
}

export default AnimatedLine
