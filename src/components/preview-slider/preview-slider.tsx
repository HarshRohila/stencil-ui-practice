import { Component, Host, h } from '@stencil/core';
import Swiper, { Navigation, Pagination, Parallax } from 'swiper';

@Component({
  tag: 'preview-slider',
  styleUrl: 'preview-slider.scss',
  shadow: true,
})
export class PreviewSlider {
  swiperContainerRef: HTMLDivElement;

  componentDidLoad() {
    Swiper.use([Navigation, Pagination, Parallax]);

    new Swiper(this.swiperContainerRef, {
      speed: 600,
      slidesPerView: 1.5,
      spaceBetween: 0,
      parallax: true,
      centeredSlides: false,
      slidesOffsetBefore: 40,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  render() {
    return (
      <Host>
        <div
          class="swiper-container"
          ref={el => (this.swiperContainerRef = el)}
        >
          <div
            class="parallax-bg"
            data-swiper-parallax="23%"
          >
            <div></div>
          </div>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <preview-card></preview-card>
            </div>
            <div class="swiper-slide">
              <preview-card></preview-card>
            </div>
            <div class="swiper-slide">
              <preview-card></preview-card>
            </div>
            <div class="swiper-slide">
              <preview-card></preview-card>
            </div>
            <div class="swiper-slide">
              <preview-card></preview-card>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </Host>
    );
  }
}
