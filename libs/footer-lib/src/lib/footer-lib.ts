export class Footer extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<div class="about-me">
    <div class="more">
            I occasionally take on <br/>freelance opportunities      
    </div>
    <p>Have an exciting project where you need some help?<br/>Send me over an <a href="mailto:vin.adithya@gmail.com" >email</a>, and let's chat.</p>

    </div>
    <div class="footer-container">
    <div class="section">

        <span> © 2021, Adithya Vinjamoori </span>
        <div class="contact-me">
            <div class="social-media">
                <a class="twitter icon" [href]="info.twitter"></a>
                <a class="linkdn icon" [href]="info.linkdn"></a>
                <a class="email icon" href="mailto:vin.adithya@gmail.com" ></a>
            </div>
        </div>
        <h1 class="logo"></h1>
    </div>
</div>
`;
  }
}
customElements.define('footer-lib', Footer);