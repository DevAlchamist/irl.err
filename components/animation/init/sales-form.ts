import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$, motionEnabled } from '@/utils/dom';
import { setRollText } from '@/utils/roll';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DISCORD_WEBHOOK_URL =
  import.meta.env.PUBLIC_DISCORD_WEBHOOK_URL ||
  'https://discord.com/api/webhooks/1569035006922195118/KkJVC9UWFlOQNO3PpQcGtbx5SZg9aG4wzBYQ3Os_GlFagfgOSZ8LCo6wnMhU4zhnTXsu';

export default function init() {
  const form = $<HTMLFormElement>('[data-sales-form]');
  if (!form) return;
  const intents = $$<HTMLInputElement>('[data-intent-input]', form);
  const demoOnly = $('[data-demo-only]', form);
  const submit = $<HTMLButtonElement>('[data-sales-submit]', form);
  const label = $('[data-submit-label]', form);
  const status = $('[data-sales-status]', form);

  const setIntent = (intent: string) => {
    intents.forEach((input) => (input.checked = input.value === intent));
    if (demoOnly) {
      demoOnly.hidden = intent !== 'demo';
      if (intent === 'demo' && motionEnabled())
        gsap.fromTo(demoOnly, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 });
    }
    if (label) setRollText(label, intent === 'demo' ? (label.dataset.demo ?? '') : (label.dataset.free ?? ''));
    ScrollTrigger.refresh();
  };

  const readUrl = () => {
    const intent = new URLSearchParams(window.location.search).get('intent');
    setIntent(intent === 'demo' ? 'demo' : 'free');
  };

  intents.forEach((input) => input.addEventListener('change', () => setIntent(input.value)));
  document.addEventListener('kairo:url', readUrl);
  readUrl();

  const setError = (name: string, message: string) => {
    const input = form.elements.namedItem(name) as HTMLInputElement | null;
    const error = $(`[data-error-for="${name}"]`, form);
    input?.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
    return !message;
  };

  $$<HTMLInputElement>('input[required]', form).forEach((input) => {
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') setError(input.name, '');
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const size = String(data.get('size') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const intent = data.get('intent') === 'demo' ? 'demo' : 'free';

    const valid = [
      setError('name', name ? '' : (form.dataset.errorName ?? '')),
      setError('email', EMAIL.test(email) ? '' : (form.dataset.errorEmail ?? '')),
      setError('company', company ? '' : (form.dataset.errorCompany ?? '')),
    ].every(Boolean);

    if (!valid) {
      $<HTMLInputElement>('[aria-invalid="true"]', form)?.focus();
      if (status) status.textContent = '';
      return;
    }

    if (!submit || !status) return;
    submit.disabled = true;
    submit.setAttribute('aria-busy', 'true');
    status.className = 'mt-6 min-h-6 text-sm text-mute';
    status.textContent = form.dataset.sending ?? '';

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'irl.err Leads',
          embeds: [
            {
              title: intent === 'demo' ? '📅 New Demo Request' : '🚀 New Free Workspace Request',
              color: 0xff5400,
              fields: [
                { name: 'Name', value: name || 'N/A', inline: true },
                { name: 'Email', value: email || 'N/A', inline: true },
                { name: 'Company', value: company || 'N/A', inline: true },
                { name: 'Company Size', value: size || 'N/A', inline: true },
                { name: 'Intent', value: intent === 'demo' ? 'Request a Demo' : 'Create Free Workspace', inline: true },
                ...(message ? [{ name: 'Message', value: message }] : []),
              ],
              footer: { text: 'Submitted via irl.err Pricing Page' },
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Discord returned HTTP ${response.status}`);
      }

      status.className = 'mt-6 min-h-6 text-sm text-bone';
      const template = (intent === 'demo' ? form.dataset.successDemo : form.dataset.successFree) ?? '';
      status.textContent = template.replace('{name}', name.split(' ')[0]).replace('{email}', email);
      form.reset();
      setIntent(intent);
    } catch (err) {
      console.error('Failed to send sales form to Discord webhook:', err);
      status.className = 'mt-6 min-h-6 text-sm text-signal';
      status.textContent = 'Something went wrong sending your request. Please try again.';
    } finally {
      submit.removeAttribute('aria-busy');
      setTimeout(() => (submit.disabled = false), 1500);
    }
  });
}
