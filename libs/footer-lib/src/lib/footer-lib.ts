export class Footer extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <section>

        <span> © 2021, Adithya Vinjamoori </span>
        <div class="contact-me">
            <div class="social-media">
                <a class="twitter icon" rel="noopener" target="_blank" href="https://twitter.com/adithyavin">twitter</a>
                <a class="linkdn icon" rel="noopener" target="_blank" href="https://www.linkedin.com/in/adithya-vin/">Linkdn</a>
                <a class="email icon" rel="noopener" target="_blank" href="mailto:vin.adithya@gmail.com" >Github</a>
            </div>
        </div>
        <h1 class="logo"></h1>
    </section>
</footer>
`;
  }
}
customElements.define('footer-lib', Footer);