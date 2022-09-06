import {theme} from '../../../variables';
import { ScreenType } from '../types'

export const size = theme.sizes

export const screenSize = {
  maxMobile: `max-width: ${size.tablet}`,
  minTablet: `min-width: ${size.tablet}`,
  maxTablet: `max-width: ${size.desktop}`,
  minDesktop: `min-width: ${size.desktop}`,
}

type Subscriber = (mediaType: ScreenType) => void

class ScreenMatcher {
  private readonly mobileMedia: MediaQueryList
  private readonly tabletMedia: MediaQueryList
  private readonly desktopMedia: MediaQueryList
  private subscriptions: Subscriber[] = []

  constructor() {
    this.mobileMedia = window.matchMedia(`screen and (${screenSize.maxMobile})`)
    this.tabletMedia = window.matchMedia(
      `screen and (${screenSize.minTablet}) and (${screenSize.maxTablet})`,
    )
    this.desktopMedia = window.matchMedia(`screen and (${screenSize.minDesktop})`)
    this.bindHandler(this.mobileMedia, ScreenType.Mobile)
    this.bindHandler(this.tabletMedia, ScreenType.Tablet)
    this.bindHandler(this.desktopMedia, ScreenType.Desktop)
  }

  private bindHandler(mediaQuery: MediaQueryList, mediaType: ScreenType) {
    const handler = (e: MediaQueryListEvent) => {
      
      if (!e.matches) {
        return
      }
      this.onMediaTypeChange(mediaType)
    }
    mediaQuery.addEventListener && mediaQuery.addEventListener('change', handler)
    return handler
  }

  private onMediaTypeChange(mediaType: ScreenType) {
    this.subscriptions.forEach((handle) => handle(mediaType))
  }

  public subscribe(handler: Subscriber) {
    this.subscriptions.push(handler)
  }

  public unsubscribe(handler: Subscriber) {
    this.subscriptions = this.subscriptions.filter((handle) => handle !== handler)
  }

  public getScreenType() {
    if (this.mobileMedia.matches) {
      return ScreenType.Mobile
    }
    if (this.tabletMedia.matches) {
      return ScreenType.Tablet
    }
    if (this.desktopMedia.matches) {
      return ScreenType.Desktop
    }

    return ScreenType.Desktop
  }
}

export const screenMatcher = new ScreenMatcher()
