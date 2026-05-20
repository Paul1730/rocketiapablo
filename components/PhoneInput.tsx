'use client';

import PhoneInputLib from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PhoneInput({ value, onChange }: Props) {
  return (
    <>
      <style>{`
        .rocket-phone .flag-dropdown {
          background: rgba(255,255,255,0.04) !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-right: none !important;
          border-radius: 12px 0 0 12px !important;
        }
        .rocket-phone .flag-dropdown:hover,
        .rocket-phone .flag-dropdown.open {
          background: rgba(0,210,255,0.08) !important;
          border-color: rgba(0,210,255,0.4) !important;
        }
        .rocket-phone .selected-flag {
          background: transparent !important;
          border-radius: 12px 0 0 12px !important;
          padding-left: 12px !important;
        }
        .rocket-phone .selected-flag:hover,
        .rocket-phone .selected-flag:focus {
          background: transparent !important;
        }
        .rocket-phone .country-list {
          background: #0d1535 !important;
          border: 1px solid rgba(0,210,255,0.2) !important;
          border-radius: 12px !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6) !important;
          scrollbar-width: thin;
          scrollbar-color: rgba(0,210,255,0.2) transparent;
        }
        .rocket-phone .country-list .country {
          color: rgba(168,188,207,0.9) !important;
          padding: 8px 14px !important;
        }
        .rocket-phone .country-list .country:hover {
          background: rgba(0,210,255,0.08) !important;
          color: #fff !important;
        }
        .rocket-phone .country-list .country.highlight {
          background: rgba(0,210,255,0.12) !important;
          color: #00D2FF !important;
        }
        .rocket-phone .country-list .search {
          background: #0d1535 !important;
          border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          padding: 8px 10px !important;
        }
        .rocket-phone .country-list .search-box {
          background: rgba(255,255,255,0.04) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 8px !important;
          color: #fff !important;
          padding: 6px 10px !important;
          width: 100% !important;
          outline: none !important;
          font-size: 13px !important;
        }
        .rocket-phone .country-list .search-box::placeholder {
          color: rgba(255,255,255,0.25) !important;
        }
        .rocket-phone .country-list .divider {
          border-color: rgba(255,255,255,0.06) !important;
        }
        .rocket-phone input[type="tel"] {
          background: rgba(255,255,255,0.04) !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-left: none !important;
          border-radius: 0 12px 12px 0 !important;
          color: #fff !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          height: 48px !important;
          width: 100% !important;
          transition: border-color 0.2s !important;
          outline: none !important;
        }
        .rocket-phone input[type="tel"]:focus {
          border-color: rgba(0,210,255,0.4) !important;
          box-shadow: none !important;
        }
        .rocket-phone input[type="tel"]::placeholder {
          color: rgba(255,255,255,0.2) !important;
        }
        .rocket-phone .arrow {
          border-top-color: rgba(168,188,207,0.5) !important;
        }
        .rocket-phone .flag-dropdown.open .arrow {
          border-bottom-color: rgba(168,188,207,0.5) !important;
        }
      `}</style>

      <PhoneInputLib
        country="sv"
        preferredCountries={['sv', 'gt', 'hn', 'ni', 'cr', 'pa', 'mx', 'co', 've', 'pe', 'ar', 'cl', 'ec', 'bo', 'py', 'uy', 'do', 'cu', 'pr', 'us']}
        value={value}
        onChange={(phone) => onChange('+' + phone)}
        containerClass="rocket-phone"
        enableSearch
        searchPlaceholder="Buscar país..."
        searchNotFound="País no encontrado"
        inputProps={{ placeholder: '+503 7180 7574' }}
      />
    </>
  );
}
