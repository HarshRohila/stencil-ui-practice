import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'preview-card',
  styleUrl: 'preview-card.scss',
  shadow: true,
})
export class PreviewCard {

  render() {
    return (
      <Host>
        <div>
          <h1>Pune</h1>
          <h3>India</h3>
          <p>4.8 (13000 views)</p>
          <i class="far fa-2x fa-heart"></i>
        </div>
      </Host>
    );
  }

}
