import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import emailjs from '@emailjs/browser';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface RequirementFormProps {
  variant?: 'full' | 'product';
  defaultProduct?: string;
  submitLabel?: string;
  tone?: 'light' | 'dark';
}

const inputBase =
'w-full rounded-sm border px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-150 ease-smooth focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20';

export function RequirementForm({
  variant = 'full',
  defaultProduct = '',
  submitLabel = 'Submit Requirement',
  tone = 'light'
}: RequirementFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const isDark = tone === 'dark';

  const fieldClass = `${inputBase} ${
  isDark ?
  'border-white/15 bg-white/5 text-white placeholder:text-white/35' :
  'border-navy-900/15 bg-white text-navy-900 placeholder:text-navy-900/35'}`;

  const labelClass = `mb-2 block font-display text-[11px] font-semibold uppercase tracking-[0.14em] ${
  isDark ? 'text-white/60' : 'text-navy-900/55'}`;


const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    setStatus('error');
    return;
  }

  setStatus('submitting');

  try {
    await emailjs.sendForm(
      'service_gfoyuef',
      'template_vf4nrrc',
      form,
      {
        publicKey: 'nNdsp-bZ-2YDpy324',
      }
    );

    setStatus('success');
    form.reset();

  } catch (error) {
    console.error('EmailJS error:', error);
    setStatus('error');
  }
};

  if (status === 'success') {
    return (
      <div
        className={`flex flex-col items-start gap-4 border p-8 ${
        isDark ? 'border-white/15 bg-white/5' : 'border-navy-900/10 bg-brand-50'}`
        }
        role="status">
        
        <CheckCircle2Icon className="h-8 w-8 text-brand-500" aria-hidden="true" />
        <h3
          className={`font-display text-xl font-semibold ${
          isDark ? 'text-white' : 'text-navy-900'}`
          }>
          
          Requirement received
        </h3>
        <p className={`text-sm ${isDark ? 'text-white/70' : 'text-navy-900/70'}`}>
          Our team will review the requirement, identify suitable technology from
          our manufacturer network and respond with a proposal.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="font-display text-sm font-semibold text-brand-600 hover:text-brand-700">
          
          Submit another requirement
        </button>
      </div>);

  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className={`border p-6 sm:p-8 ${
      isDark ? 'border-white/15 bg-white/[0.04]' : 'border-navy-900/10 bg-white'}`
      }>
      
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="rf-name">
            Name
          </label>
          <input id="rf-name" name="name" required className={fieldClass} autoComplete="name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="rf-company">
            Company
          </label>
          <input id="rf-company" name="company" required className={fieldClass} autoComplete="organization" />
        </div>
        <div>
          <label className={labelClass} htmlFor="rf-email">
            Email
          </label>
          <input id="rf-email" name="email" type="email" required className={fieldClass} autoComplete="email" />
        </div>
        <div>
          <label className={labelClass} htmlFor="rf-phone">
            Phone
          </label>
          <input id="rf-phone" name="phone" type="tel" className={fieldClass} autoComplete="tel" />
        </div>

        {variant === 'full' &&
        <div>
            <label className={labelClass} htmlFor="rf-industry">
              Industry
            </label>
            <select id="rf-industry" name="industry" className={fieldClass} defaultValue="">
              <option value="">Select industry</option>
              {[
            'Telecommunications',
            'Broadcasting',
            'Enterprise & Corporate',
            'Government & Public Infrastructure',
            'Energy',
            'Agriculture',
            'Infrastructure'].
            map((item) =>
            <option key={item} value={item}>
                  {item}
                </option>
            )}
            </select>
          </div>
        }

        <div>
          <label className={labelClass} htmlFor="rf-product">
            Product / Solution
          </label>
          <select
            id="rf-product"
            name="product"
            className={fieldClass}
            defaultValue={defaultProduct}>
            
            <option value="">Select a product or category</option>
            {categories.map((category) =>
            <optgroup key={category.id} label={category.title}>
                {products.
              filter((product) => product.categoryId === category.id).
              map((product) =>
              <option key={product.slug} value={product.name}>
                      {product.name}
                    </option>
              )}
              </optgroup>
            )}
            <option value="Other / not listed">Other / not listed</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="rf-quantity">
            Quantity / Requirement
          </label>
          <input id="rf-quantity" name="quantity" className={fieldClass} placeholder="e.g. 12 racks, 4 sites" />
        </div>

        {variant === 'full' &&
        <>
            <div>
              <label className={labelClass} htmlFor="rf-location">
                Project Location
              </label>
              <input id="rf-location" name="location" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="rf-date">
                Required Date
              </label>
              <input id="rf-date" name="requiredDate" type="date" className={fieldClass} />
            </div>
          </>
        }

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="rf-message">
            Message
          </label>
          <textarea
            id="rf-message"
            name="message"
            rows={4}
            className={fieldClass}
            placeholder="Describe the technology requirement, specification or project scope." />
          
        </div>
      </div>

      {status === 'error' &&
      <p className="mt-5 text-sm text-red-600" role="alert">
          Please complete the required fields so we can respond accurately.
        </p>
      }

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-7 inline-flex items-center gap-2 rounded-sm bg-brand-500 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 ease-smooth hover:bg-brand-600 disabled:opacity-70">
        
        {status === 'submitting' &&
        <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
        }
        {status === 'submitting' ? 'Submitting' : submitLabel}
      </button>
      <p className={`mt-4 text-xs ${isDark ? 'text-white/45' : 'text-navy-900/45'}`}>
        Requirements are reviewed by our technology supply team. No obligation.
      </p>
    </form>);

}