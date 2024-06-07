import { component$, $, useStore } from '@builder.io/qwik';
import emailjs from '@emailjs/browser';
import type { DocumentHead } from "@builder.io/qwik-city";
import { NavigationForm } from './steps/navigationForm';

export default component$(() => {
  const formState = useStore({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    siteType: '',
    uiDesign: false,
    redactor: false,
    backEnd: false,
    seo: false,
    extraServices: false,
    host: false,
    design: false,
    visual: false,
    texts: false,
    message: '',
    contactMethod: '',
  });

  const changeStep = $((index: number) => {
    const stepElement = document.getElementById('multiform');
    if (stepElement) {
      stepElement.setAttribute('active-step', index.toString());
    } else {
      console.error('Form element not found');
    }
  });

  const sendEmail = $((e: Event) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    emailjs.send('service_s120oie', 'template_pho4gjb', {
      user_name: `${formState.firstName} ${formState.lastName}`,
      user_email: formState.email,
      phone: formState.phone,
      site_type: formState.siteType,
      ui_design: formState.uiDesign,
      redactor: formState.redactor,
      back_end: formState.backEnd,
      seo: formState.seo,
      extra_services: formState.extraServices,
      host: formState.host,
      design: formState.design,
      visual: formState.visual,
      texts: formState.texts,
      message: formState.message,
      contact_method: formState.contactMethod,
    }, 'cPl3JnjbrzrtpkR7h')
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  });

  return (
    <section id="order" class="container">
    <form onSubmit$={(e: Event) => sendEmail(e)}>
        <NavigationForm/>
        <div id="multiform" class="form-steps" active-step="1">
          <div class="step-1">
            <h2>Qui fait la commande ?</h2>
            <div class="first-step">
              <span class="f in">
                <label for="first-name-input">Nom</label>
                <input type="text" id="first-name-input" placeholder="ex: RABARY" onInput$={(e) => formState.firstName = (e.target as HTMLInputElement).value} />
              </span>
              <span class="f in">
                <label for="last-name-input">Prénoms</label>
                <input type="text" id="last-name-input" placeholder="ex: Aon Lyl" onInput$={(e) => formState.lastName = (e.target as HTMLInputElement).value} />
              </span>
              <span class="f in">
                <label for="email-input">Adresse e-mail</label>
                <input type="email" id="email-input" placeholder="ex: aonrabary@gmail.com" onInput$={(e) => formState.email = (e.target as HTMLInputElement).value} />
              </span>
              <span class="f in">
                <label for="phone-input">Numéro</label>
                <input type="text" id="phone-input" placeholder="ex: +261 32 00 000 00" onInput$={(e) => formState.phone = (e.target as HTMLInputElement).value} />
              </span>
            </div>
            <div class="buttons">
              <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(2);}}>Suivant</button>
            </div>
          </div>
          <div class="step-2">
            <h2>De quel genre de site avez vous besoin ?</h2>
            <div class="second-step">
              <p>Type de site :</p>
              <div class="site-type">
                <span>
                  <input type="radio" name="site-type" id="full-code" onClick$={() => formState.siteType = 'Full-code'} />
                  <label for="full-code">Site Full-code</label>
                </span>
                <span>
                  <input type="radio" name="site-type" id="low-code" onClick$={() => formState.siteType = 'Low-code'} />
                  <label for="low-code">Site Low-code</label>
                </span>
              </div>
              <p>Services supplémentaires :</p>
              <div class="options">
                <span>
                  <input type="checkbox" name="responsive" id="ui-design" onClick$={() => formState.uiDesign = !formState.uiDesign} />
                  <label for="ui-design">Design UI/UX</label>
                </span>
                <span>
                  <input type="checkbox" name="responsive" id="redactor" onClick$={() => formState.redactor = !formState.redactor} />
                  <label for="redactor">Rédaction</label>
                </span>
                <span>
                  <input type="checkbox" name="responsive" id="back-end" onClick$={() => formState.backEnd = !formState.backEnd} />
                  <label for="back-end">Services Back-End</label>
                </span>
                <span>
                  <input type="checkbox" name="responsive" id="seo" onClick$={() => formState.seo = !formState.seo} />
                  <label for="seo">Réferencement naturel</label>
                </span>
                <span>
                  <input type="checkbox" name="responsive" id="extra-services" onClick$={() => formState.extraServices = !formState.extraServices} />
                  <label for="extra-services">Sans service supplémentaires</label>
                </span>
              </div>
            </div>
            <div class="buttons">
              <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(1);}}>Précédent</button>
              <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(3);}}>Suivant</button>
            </div>
          </div>
          <div class="step-3">
            <h2>À quel stade en êtes vous ?</h2>
            <p>Lesquels de ces options vous avez déjà ?</p>
            <div class="third-step">
              <span class="feature">
                <input type="checkbox" name="host" id="host" onClick$={() => formState.host = !formState.host} />
                <label for="host"><span>Hébergement</span></label>
              </span>
              <span class="feature">
                <input type="checkbox" name="design" id="design" onClick$={() => formState.design = !formState.design} />
                <label for="design"><span>Design</span></label>
              </span>
              <span class="feature">
                <input type="checkbox" name="visual" id="visual" onClick$={() => formState.visual = !formState.visual} />
                <label for="visual"><span>Visuel</span></label>
              </span>
              <span class="feature">
                <input type="checkbox" name="textss" id="textss" onClick$={() => formState.texts = !formState.texts} />
                <label for="textss"><span>Textes</span></label>
              </span>
            </div>
            <div class="buttons">
              <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(2);}}>Précédent</button>
              <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(4);}}>Suivant</button>
            </div>
          </div>
          <div class="step-4">
            <h2>Details sur le site</h2>
            <p>Parlez nous du site que vous voulez créer avec le plus de détails possible.</p>
            <div class="fourth-step">
              <textarea name="message" id="text-area" placeholder="Votre message…" rows={10} onInput$={(e) => formState.message = (e.target as HTMLTextAreaElement).value}></textarea>
            </div>
            
            <p>Via quoi souhaitez vous être contacter ?</p>
            <div class="last-options">
              <span>
                <input type="radio" name="get-in-touch" id="contact-mail" onClick$={() => formState.contactMethod = 'E-mail'} />
                <label for="contact-mail">E-mail</label>
              </span>
              <span>
                <input type="radio" name="get-in-touch" id="contact-phone" onClick$={() => formState.contactMethod = 'Numéro'} />
                <label for="contact-phone">Numéro</label>
              </span>
              <span>
                <input type="radio" name="get-in-touch" id="contact-social" onClick$={() => formState.contactMethod = 'Réseau social'} />
                <label for="contact-social">Réseau social</label>
              </span>
            </div>
            <div class="buttons">
              <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(3);}}>Précédent</button>
              <button type="submit">Demander un devis</button>
            </div>
          </div>
        </div>
      </form>
      {/* <div class="fuse"><img src={fuse} alt="spaceship" width={250} height={250}/></div> */}
    </section>
  );
});

export const head: DocumentHead = {
  title: "Ohayo Dev & Design | Commande",
  meta: [
    {
      name: "description",
      content: "Commandez votre site personnalisé chez Ohayo Dev & Design. Choisissez le type de site, les services supplémentaires, et spécifiez vos besoins en détail pour une création qui vous ressemble.",
    },
  ],
};