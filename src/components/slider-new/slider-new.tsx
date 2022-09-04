import {ProGallery, Item} from 'pro-gallery';
import {useEffect, useRef, useState} from "react";
import {GalleryWrapper} from "./slider-new-styled";
import 'pro-gallery/dist/statics/main.css';
import {Icon} from "../icon";


type Props = {
  items: Item[]
}

function customNavArrowsRenderer(direction: 'left'|'right') {
  switch (direction) {
    case 'left':
      return <Icon name="leftArrow" color='white' />
    case 'right':
      return <Icon name="rightArrow" color='white' />
  }
}

export function SliderNew({items}: Props) {
  const scrollingElementRef = useRef<HTMLElement|null>(null) as React.MutableRefObject<HTMLDivElement|null>
  const [width, setWidth] = useState(0)

  useEffect(()=>{
    if(scrollingElementRef.current){
      setWidth(scrollingElementRef.current!.offsetWidth )
    }
  },[setWidth])

  // The options of the gallery (from the playground current state)
  const options = {
    "layoutParams": {
      "structure": {
        "galleryLayout": 4
      },
      "info": {
        "placement": ""
      }
    },
    "behaviourParams": {
      "gallery": {
        "horizontal": {
          "loop": false
        }
      },
      "item": {
        "clickAction": "ACTION",
        "overlay": {
          "hoveringBehaviour": "NEVER_VISIBLE"
        }
      }
    }
  }

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: width,
    height: scrollingElementRef.current?.offsetHeight || 0
  };




  return (<GalleryWrapper ref={scrollingElementRef}>
    <ProGallery
      items={items}
      options={options}
      container={container}
      // eventsListener={(eName, eData) => console.log({eName, eData})}
      scrollingElement={scrollingElementRef.current}
      customComponents={{
        customNavArrowsRenderer
      }}
    />
  </GalleryWrapper>)
}