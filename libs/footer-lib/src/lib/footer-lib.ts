export class Footer extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <section>

        <span> © 2021, Adithya Vinjamoori </span>
        <div class="contact-me">
            <div class="social-media">
                <a class="twitter icon" [href]="info.twitter"></a>
                <a class="linkdn icon" [href]="info.linkdn"></a>
                <a class="email icon" href="mailto:vin.adithya@gmail.com" ></a>
            </div>
        </div>
        <h1 class="logo"></h1>
    </section>
</footer>
`;
  }
}
customElements.define('footer-lib', Footer);