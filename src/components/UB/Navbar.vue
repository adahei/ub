<template lang="html">
  <header class="header" role="banner">
    <scroll-nav class="header__inner" :offset="80">
      <div class="navigation__container">
        <a href="#hem" class="logo scroll-item" aria-label="Utvecklarbolaget" @click="clickNavigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="634" height="125" viewBox="0 0 634 125" version="1.1">
            <g stroke="none" stroke-width="1" fill="black" fill-rule="evenodd">
              <path class="txt lt-1" d="M79.8 95.2L80.9 101.8C78.8 102.2 76.9 102.4 75.2 102.4 72.5 102.4 70.5 102 69 101.1 67.5 100.3 66.5 99.2 65.8 97.8 65.2 96.4 64.9 93.4 64.9 89L64.9 63.8 59.5 63.8 59.5 58 64.9 58 64.9 47.2 72.3 42.7 72.3 58 79.8 58 79.8 63.8 72.3 63.8 72.3 89.4C72.3 91.5 72.4 92.9 72.7 93.5 73 94.1 73.4 94.6 74 94.9 74.6 95.3 75.4 95.5 76.5 95.5 77.3 95.5 78.4 95.4 79.8 95.2L79.8 95.2Z"/>
              <path class="txt lt-2" d="M99.6 101.8L82.9 58 90.7 58 100.1 84.3C101.1 87.1 102.1 90 103 93.1 103.6 90.8 104.5 88 105.7 84.8L115.5 58 123.1 58 106.5 101.8 99.6 101.8 99.6 101.8Z"/>
              <path class="txt lt-3" d="M135.6 75.7L160.1 75.7C159.7 72 158.8 69.3 157.2 67.4 154.9 64.6 151.8 63.1 148 63.1 144.6 63.1 141.7 64.3 139.4 66.5 137.1 68.8 135.8 71.9 135.6 75.7L135.6 75.7ZM159.9 87.7L167.6 88.7C166.4 93.2 164.2 96.6 160.9 99.1 157.6 101.6 153.4 102.8 148.4 102.8 141.9 102.8 136.9 100.8 133.1 96.9 129.4 93 127.5 87.4 127.5 80.3 127.5 72.9 129.4 67.2 133.2 63.1 137 59 141.9 57 148 57 153.8 57 158.6 59 162.3 63 166 67 167.9 72.6 167.9 79.8 167.9 80.3 167.9 81 167.8 81.8L135.2 81.8C135.4 86.6 136.8 90.3 139.2 92.9 141.7 95.4 144.7 96.7 148.4 96.7 151.1 96.7 153.5 96 155.4 94.6 157.3 93.2 158.8 90.9 159.9 87.7L159.9 87.7Z"/>
              <path class="txt lt-4" d="M205.9 85.8L213.2 86.7C212.4 91.8 210.4 95.7 207.1 98.6 203.8 101.4 199.8 102.8 195 102.8 189 102.8 184.2 100.9 180.5 96.9 176.9 93 175 87.4 175 80.1 175 75.4 175.8 71.2 177.4 67.7 179 64.1 181.4 61.5 184.6 59.7 187.8 57.9 191.3 57 195 57 199.8 57 203.7 58.2 206.7 60.6 209.7 63.1 211.7 66.5 212.5 70.9L205.3 72C204.6 69.1 203.4 66.9 201.6 65.4 199.9 63.9 197.8 63.1 195.3 63.1 191.6 63.1 188.5 64.5 186.2 67.1 183.9 69.8 182.7 74.1 182.7 79.9 182.7 85.8 183.8 90 186.1 92.7 188.3 95.4 191.3 96.7 194.9 96.7 197.8 96.7 200.3 95.8 202.2 94 204.2 92.2 205.4 89.5 205.9 85.8L205.9 85.8Z"/>
              <polygon class="txt lt-5" points="219.9 101.8 219.9 41.3 227.4 41.3 227.4 75.8 244.9 58 254.6 58 237.8 74.3 256.2 101.8 247.1 101.8 232.6 79.4 227.4 84.5 227.4 101.8"/>
              <polygon class="txt lt-6" points="262.4 101.8 269.8 101.8 269.8 41.3 262.4 41.3"/>
              <path class="txt lt-7" d="M309.6 79.8C306.9 80.9 302.9 81.9 297.5 82.6 294.4 83.1 292.3 83.6 291 84.1 289.7 84.7 288.7 85.5 288.1 86.5 287.4 87.6 287 88.8 287 90.1 287 92 287.8 93.7 289.3 95 290.8 96.3 293 97 295.9 97 298.7 97 301.3 96.4 303.5 95.1 305.7 93.9 307.4 92.2 308.4 90 309.2 88.3 309.6 85.9 309.6 82.6L309.6 79.8 309.6 79.8ZM310.2 96.4C307.5 98.8 304.8 100.4 302.3 101.4 299.8 102.3 297 102.8 294.1 102.8 289.3 102.8 285.6 101.6 283 99.3 280.4 97 279.1 94 279.1 90.3 279.1 88.2 279.6 86.2 280.6 84.4 281.6 82.6 282.9 81.2 284.4 80.1 286 79 287.8 78.2 289.8 77.7 291.2 77.3 293.4 76.9 296.4 76.6 302.3 75.9 306.8 75 309.6 74 309.6 73 309.7 72.4 309.7 72.1 309.7 69.1 309 66.9 307.5 65.7 305.6 64 302.8 63.2 299.1 63.2 295.6 63.2 293 63.8 291.4 65 289.7 66.2 288.5 68.4 287.7 71.5L280.4 70.5C281 67.4 282.1 64.9 283.6 63 285.2 61.1 287.4 59.6 290.2 58.6 293.1 57.5 296.4 57 300.2 57 303.9 57 307 57.4 309.3 58.3 311.6 59.2 313.3 60.3 314.4 61.7 315.6 63 316.3 64.7 316.8 66.7 317 68 317.1 70.3 317.1 73.6L317.1 83.5C317.1 90.4 317.3 94.7 317.6 96.6 317.9 98.4 318.5 100.1 319.5 101.8L311.7 101.8C311 100.3 310.5 98.5 310.2 96.4L310.2 96.4Z"/>
              <path class="txt lt-8" d="M328.9 101.8L328.9 58 335.6 58 335.6 64.7C337.3 61.6 338.9 59.5 340.4 58.5 341.8 57.5 343.4 57 345.1 57 347.6 57 350.1 57.8 352.7 59.4L350.2 66.3C348.4 65.3 346.5 64.7 344.7 64.7 343.1 64.7 341.6 65.2 340.4 66.2 339.1 67.1 338.2 68.5 337.6 70.3 336.8 72.9 336.3 75.8 336.3 78.9L336.3 101.8 328.9 101.8 328.9 101.8Z"/>
              <path class="txt lt-9" d="M364.2 79.6C364.2 84.9 365 88.7 366.4 91 368.7 94.8 371.9 96.7 375.9 96.7 379.1 96.7 381.9 95.3 384.3 92.5 386.7 89.6 387.9 85.5 387.9 79.9 387.9 74.2 386.7 69.9 384.4 67.2 382.2 64.5 379.4 63.1 376.2 63.1 373 63.1 370.2 64.5 367.8 67.4 365.4 70.2 364.2 74.3 364.2 79.6L364.2 79.6ZM364.4 101.8L357.4 101.8 357.4 41.3 364.9 41.3 364.9 62.9C368 59 372 57 376.9 57 379.6 57 382.1 57.6 384.5 58.6 386.9 59.7 388.9 61.3 390.5 63.2 392 65.2 393.3 67.6 394.1 70.3 395 73.1 395.4 76.1 395.4 79.2 395.4 86.8 393.6 92.6 389.9 96.7 386.1 100.8 381.7 102.8 376.5 102.8 371.3 102.8 367.3 100.7 364.4 96.4L364.4 101.8 364.4 101.8Z"/>
              <path class="txt lt-10" d="M409.7 79.9C409.7 85.5 410.9 89.7 413.4 92.5 415.9 95.3 418.9 96.7 422.6 96.7 426.3 96.7 429.4 95.3 431.8 92.5 434.3 89.7 435.5 85.4 435.5 79.7 435.5 74.3 434.3 70.1 431.8 67.4 429.3 64.6 426.3 63.2 422.6 63.2 418.9 63.2 415.9 64.6 413.4 67.4 410.9 70.1 409.7 74.3 409.7 79.9L409.7 79.9ZM402.1 79.9C402.1 71.8 404.4 65.8 408.8 61.9 412.6 58.6 417.2 57 422.6 57 428.6 57 433.6 59 437.4 62.9 441.2 66.9 443.1 72.4 443.1 79.3 443.1 85 442.3 89.4 440.6 92.6 438.9 95.8 436.4 98.3 433.2 100.1 430 101.9 426.5 102.8 422.6 102.8 416.5 102.8 411.6 100.8 407.8 96.9 404 93 402.1 87.3 402.1 79.9L402.1 79.9Z"/>
              <polygon class="txt lt-11" points="452.1 101.8 459.5 101.8 459.5 41.3 452.1 41.3"/>
              <path class="txt lt-12" d="M499.3 79.8C496.6 80.9 492.6 81.9 487.2 82.6 484.2 83.1 482 83.6 480.7 84.1 479.4 84.7 478.5 85.5 477.8 86.5 477.1 87.6 476.7 88.8 476.7 90.1 476.7 92 477.5 93.7 479 95 480.5 96.3 482.7 97 485.6 97 488.5 97 491 96.4 493.2 95.1 495.4 93.9 497.1 92.2 498.1 90 498.9 88.3 499.3 85.9 499.3 82.6L499.3 79.8 499.3 79.8ZM500 96.4C497.2 98.8 494.5 100.4 492 101.4 489.5 102.3 486.7 102.8 483.8 102.8 479 102.8 475.3 101.6 472.7 99.3 470.1 97 468.8 94 468.8 90.3 468.8 88.2 469.3 86.2 470.3 84.4 471.3 82.6 472.6 81.2 474.1 80.1 475.7 79 477.5 78.2 479.5 77.7 481 77.3 483.2 76.9 486.1 76.6 492.1 75.9 496.5 75 499.3 74 499.4 73 499.4 72.4 499.4 72.1 499.4 69.1 498.7 66.9 497.2 65.7 495.4 64 492.6 63.2 488.8 63.2 485.3 63.2 482.8 63.8 481.1 65 479.4 66.2 478.2 68.4 477.4 71.5L470.1 70.5C470.8 67.4 471.8 64.9 473.4 63 474.9 61.1 477.1 59.6 479.9 58.6 482.8 57.5 486.1 57 489.9 57 493.6 57 496.7 57.4 499 58.3 501.3 59.2 503 60.3 504.2 61.7 505.3 63 506 64.7 506.5 66.7 506.7 68 506.8 70.3 506.8 73.6L506.8 83.5C506.8 90.4 507 94.7 507.3 96.6 507.6 98.4 508.3 100.1 509.2 101.8L501.5 101.8C500.7 100.3 500.2 98.5 500 96.4L500 96.4Z"/>
              <path class="txt lt-13" d="M523.5 79.1C523.5 84.9 524.7 89.1 527 91.7 529.2 94.4 532.1 95.7 535.5 95.7 538.9 95.7 541.8 94.4 544.1 91.8 546.4 89.1 547.6 85 547.6 79.4 547.6 74 546.4 70 544 67.3 541.6 64.5 538.7 63.2 535.4 63.2 532.1 63.2 529.3 64.5 527 67.2 524.7 69.9 523.5 73.9 523.5 79.1L523.5 79.1ZM517.4 105.5L524.6 106.6C524.9 108.8 525.7 110.4 527.1 111.4 528.9 112.8 531.5 113.5 534.7 113.5 538.1 113.5 540.8 112.8 542.6 111.4 544.5 110 545.8 108.1 546.4 105.6 546.8 104.1 547 100.9 546.9 96.1 543.7 99.9 539.7 101.8 534.8 101.8 528.8 101.8 524.1 99.7 520.8 95.3 517.5 91 515.9 85.8 515.9 79.7 515.9 75.5 516.6 71.7 518.1 68.1 519.7 64.6 521.9 61.9 524.7 59.9 527.6 58 531 57 534.9 57 540 57 544.3 59.1 547.7 63.3L547.7 58 554.5 58 554.5 95.9C554.5 102.7 553.8 107.5 552.4 110.4 551 113.3 548.8 115.5 545.8 117.2 542.8 118.8 539.1 119.6 534.7 119.6 529.5 119.6 525.3 118.5 522 116.1 518.8 113.7 517.3 110.2 517.4 105.5L517.4 105.5Z"/>
              <path class="txt lt-14" d="M571.7 75.7L596.2 75.7C595.8 72 594.9 69.3 593.4 67.4 591 64.6 587.9 63.1 584.2 63.1 580.7 63.1 577.9 64.3 575.5 66.5 573.2 68.8 571.9 71.9 571.7 75.7L571.7 75.7ZM596.1 87.7L603.7 88.7C602.6 93.2 600.3 96.6 597 99.1 593.7 101.6 589.6 102.8 584.5 102.8 578.1 102.8 573 100.8 569.3 96.9 565.5 93 563.6 87.4 563.6 80.3 563.6 72.9 565.5 67.2 569.3 63.1 573.1 59 578 57 584.1 57 589.9 57 594.7 59 598.4 63 602.2 67 604 72.6 604 79.8 604 80.3 604 81 604 81.8L571.3 81.8C571.6 86.6 572.9 90.3 575.4 92.9 577.8 95.4 580.9 96.7 584.6 96.7 587.3 96.7 589.6 96 591.5 94.6 593.4 93.2 595 90.9 596.1 87.7L596.1 87.7Z"/>
              <path class="txt lt-15" d="M629.7 95.2L630.8 101.8C628.7 102.2 626.8 102.4 625.1 102.4 622.4 102.4 620.4 102 618.9 101.1 617.4 100.3 616.4 99.2 615.7 97.8 615.1 96.4 614.8 93.4 614.8 89L614.8 63.8 609.4 63.8 609.4 58 614.8 58 614.8 47.2 622.2 42.7 622.2 58 629.7 58 629.7 63.8 622.2 63.8 622.2 89.4C622.2 91.5 622.3 92.9 622.6 93.5 622.9 94.1 623.3 94.6 623.9 94.9 624.5 95.3 625.3 95.5 626.4 95.5 627.2 95.5 628.3 95.4 629.7 95.2L629.7 95.2Z"/>
              <path fill="#E25A29" class="lt-u" d="M3.5 41.3L3.5 83.1C3.5 94.7 12.9 104.2 24.6 104.2L30.9 104.2C42.6 104.2 52 94.7 52 83.1L52 21 58 21 45.4 3 33 21 40 21 40 80.6C40 87.5 34.4 93.1 27.5 93.1 20.6 93.1 15 87.5 15 80.6L15 41.3 3.5 41.3 3.5 41.3Z"/>
            </g>
          </svg>
        </a>
        <div>
          <button type="button" class="hamburger" @click.prevent="toggleNav" aria-controls="navigation" :aria-expanded="open ? 'true' : 'false'" aria-label="Meny">
            <i class="fa fa-bars"></i>
          </button>
          <div id="navigation" class="navigation" :class="{'open': open}">
            <ul>
              <li v-for="item in nav"><a class="navigation__item scroll-item" @click="clickNavigation" :href="'#' + friendlyURL(item.title)">{{item.title}}</a></li>
              <li v-if="hasSpinner" class="hidden"><a class="custom-lonenurra scroll-item" href="#lonesnurra"></a></li>
            </ul>
            <ul class="nav-contact-item">
              <li>
                <li><a href="#" class="navigation__item" @click.prevent="handleContact" :class="{'active': contactOpen}"><i class="fa fa-envelope-o"></i> Kontakt</a></li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </scroll-nav>
    <aside class="navigation__contact" :class="{'contactOpen': contactOpen}">
      <header class="navigation__contact__header">
        <h2>Kontakt</h2>
        <button type="button" @click="contactOpen = false"><i class="fa fa-close"></i></button>
      </header>
      <form @submit.prevent="submit" class="contact-form" id="contact-form">
        <fieldset class="form-field">
          <label for="name">Namn</label>
          <input type="text" id="name" name="name" v-model="name" aria-label="Namn"/>
        </fieldset>
        <fieldset class="form-field">
          <label for="email">E-post</label>
          <input type="email" id="email" name="email" v-model="email" aria-label="E-post"/>
        </fieldset>
        <fieldset class="form-field">
          <label for="message">Meddelande</label>
          <textarea id="message" name="message" v-model="message" aria-label="Meddelande"></textarea>
        </fieldset>
        <div v-if="sent" class="data-sent-message">Tack f&ouml;r att du&nbsp;valt att kontakta Utvecklarbolaget, vi&nbsp;&aring;terkopplar snarast!</div>
        <div v-if="error" class="data-error-message">Tyv&auml;rr kunde vi&nbsp;inte s&auml;nda ditt meddelande, f&ouml;rs&ouml;k igen om&nbsp;en&nbsp;liten stund</div>
        <div class="contact-form-send">
          <button type="submit" id="send-contact-details">Skicka</button>
        </div>
      </form>
      <div class="social-buttons">
        <a href="https://www.facebook.com/utvecklarbolaget/" class="icon-social icon-facebook" target="_blank" aria-label="Facebook" rel="noopener">
          <svg enable-background="new 0 0 144.083 144" height="144px" version="1.1" viewBox="0 0 144.083 144" width="144.083px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M72.041,11.166c-33.543,0-60.833,27.29-60.833,60.834c0,33.545,27.29,60.834,60.833,60.834  c33.544,0,60.835-27.289,60.835-60.834C132.875,38.456,105.584,11.166,72.041,11.166z M72.041,126.834  c-30.235,0-54.833-24.598-54.833-54.834c0-30.235,24.598-54.834,54.833-54.834c30.235,0,54.835,24.599,54.835,54.834  C126.875,102.236,102.276,126.834,72.041,126.834z"/>
          <path d="M90.792,36.304H77.596c-0.031,0-0.061,0.001-0.09,0.004c-13.323,0.042-15.063,9.345-15.07,17.476  c-0.018,0.076-0.028,0.154-0.028,0.235v5.708h-9.118c-0.552,0-1,0.448-1,1v14.077c0,0.553,0.448,1,1,1h9.118v30.891  c0,0.553,0.448,1,1,1h13.307c0.553,0,1-0.447,1-1V75.805h13.076c0.553,0,1-0.447,1-1V60.728c0-0.552-0.447-1-1-1H76.715v-7.567  h14.076c0.553,0,1-0.448,1-1V37.304C91.792,36.752,91.344,36.304,90.792,36.304z"/>
        </svg>
        </a>
        <a href="https://www.linkedin.com/company/utvecklarbolaget" class="icon-social icon-linkedin" target="_blank" aria-label="Linkedin" rel="noopener">
          <svg enable-background="new 0 0 144.083 144" height="144px" version="1.1" viewBox="0 0 144.083 144" width="144.083px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M72.041,11.166c-33.543,0-60.833,27.29-60.833,60.834c0,33.545,27.29,60.834,60.833,60.834  c33.544,0,60.835-27.289,60.835-60.834C132.875,38.456,105.584,11.166,72.041,11.166z M72.041,126.834  c-30.235,0-54.833-24.598-54.833-54.834c0-30.235,24.598-54.834,54.833-54.834c30.235,0,54.835,24.599,54.835,54.834  C126.875,102.236,102.276,126.834,72.041,126.834z"/>
          <rect height="36.734" width="14.078" x="41.143" y="59.11"/>
          <ellipse cx="48.042" cy="46.75" rx="7.125" ry="6.5"/>
          <path d="M90.608,58.28c-2.883,0-5.326,0.525-7.334,1.574c-2.006,1.05-3.988,2.796-5.949,5.24V59.11H64.215v36.734h14.078V78.203  c0-3.344,0.531-5.66,1.592-6.952c1.061-1.291,2.443-1.937,4.15-1.937c1.545,0,2.744,0.479,3.598,1.436  c0.854,0.957,1.279,2.588,1.279,4.895v20.199h14.148V72.497c0-4.843-1.102-8.423-3.305-10.741  C97.555,59.438,94.504,58.28,90.608,58.28z"/>
        </svg>
        </a>
      </div>
    </aside>
  </header>
</template>

<script>
import axios from 'axios'
import StringHandler from '@/mixins/stringHandler'
import ScrollNav from '@/components/UB/ScrollNav'
export default {
  mixins: [StringHandler],
  components: {
    ScrollNav
  },
  props: {
    nav: {
      type: Array,
      required: true
    },
    navloaded: {
      type: Boolean,
      default: false
    },
    hasSpinner: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.loading = true
  },
  data () {
    return {
      loading: true,
      open: false,
      contactOpen: false,
      name: '',
      email: '',
      message: '',
      error: false,
      sent: false
    }
  },
  methods: {
    navigate (to) {
      this.$emit('navigate', to)
    },
    clickNavigation () {
      this.open = false
      this.contactOpen = false
    },
    handleContact (e) {
      e.preventDefault()
      this.open = false
      this.contactOpen = !this.contactOpen
    },
    submit () {
      this.sent = false
      this.error = false

      var params = new URLSearchParams()
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)
      axios.post(window.location.protocol + '//utvecklarbolaget.se/contact2.php', params)
      .then(response => {
        this.sent = true
      })
      .catch(e => {
        this.error = true
      })
    },
    toggleNav () {
      this.open = !this.open
      this.contactOpen = false
      // this.contactOpen = !this.contactOpen
    }
  },
  watch: {
    nav: function () {
      if (this.nav.length > 0) {
        this.loading = false
      }
    },
    showContact: function () {
      this.open = this.showContact
      this.contactOpen = this.showContact
    },
    contactOpen: function () {
      if (this.contactOpen) {
        document.body.classList.add('contact--open')
        console.log(document.body.clientHeight)
        // document.ontouchmove = function (e) {
        //   e.preventDefault()
        // }
      } else {
        this.contactPost = 0
        // document.ontouchmove = function (e) {
        //   return true
        // }
        document.body.classList.remove('contact--open')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/ub/variables';
.data-sent-message,
.data-error-message {
  padding: .5rem;
  margin: $spacing-sm 0;
}
.data-sent-message {
  background-color: $success-bg-color;
  color: $success-border-color;
}
.data-error-message {
  background-color: $error-bg-color;
  color: $error-border-color;
}
@media (min-width: $screen-sm) {
  .nav-enter-active {
    transition: all .3s ease;
  }
  .nav-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .nav-enter, .nav-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
}
</style>
