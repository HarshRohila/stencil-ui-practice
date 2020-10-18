import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
  shadow: true,
})
export class HomePage {

  render() {
    return (
      <Host>
        <h1>Explore the most</h1>
        <preview-slider></preview-slider>
      </Host>
    );
  }

}
