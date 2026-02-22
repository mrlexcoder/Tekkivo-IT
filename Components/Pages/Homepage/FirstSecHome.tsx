'use client';

import { useState, useRef, useEffect } from 'react';
import '../../../public/Styles/HomeStyles.css';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  hasSearch?: boolean;
  isOpen: boolean;
  onToggle: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const CustomDropdown = ({
  label,
  value,
  options,
  onChange,
  hasSearch = false,
  isOpen,
  onToggle,
  searchTerm,
  onSearchChange,
  dropdownRef
}: CustomDropdownProps) => {
  const filteredOptions = hasSearch && searchTerm
    ? options.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : options;

  return (
    <div className="custom-dropdown" ref={isOpen ? dropdownRef : null}>
      <label className="form-label">{label}</label>
      <div className="custom-dropdown-trigger" onClick={onToggle}>
        <span className="dropdown-value">{value}</span>
        <svg className="dropdown-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      
      {isOpen && (
        <div className="custom-dropdown-menu">
          {hasSearch && (
            <div className="dropdown-search">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="dropdown-search-input"
                autoFocus
              />
            </div>
          )}
          <div className="dropdown-options">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`dropdown-option ${value === option.value ? 'selected' : ''}`}
                onClick={() => {
                  onChange(option.value);
                  onToggle();
                  onSearchChange('');
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const categoryOptions: DropdownOption[] = [
  { value: 'AI', label: 'AI' },
  { value: 'Development', label: 'Development' },
  { value: 'Advertising & Marketing', label: 'Advertising & Marketing' },
  { value: 'Design & Production', label: 'Design & Production' },
  { value: 'Business Services', label: 'Business Services' },
  { value: 'Implementation Services', label: 'Implementation Services' },
  { value: 'Translation Services', label: 'Translation Services' },
  { value: 'Writing Services', label: 'Writing Services' },
  { value: 'Resources', label: 'Resources' },
  { value: 'Engineering Services', label: 'Engineering Services' },
  { value: 'IT Services', label: 'IT Services' },
  { value: 'DevOps', label: 'DevOps' },
  { value: 'Admin Services', label: 'Admin Services' },
];

const subcategoryOptions: DropdownOption[] = [
  { value: 'Web Developers', label: 'Web Developers' },
  { value: 'Mobile Developers', label: 'Mobile Developers' },
  { value: 'Android App Developers', label: 'Android App Developers' },
  { value: 'iOS App Developers', label: 'iOS App Developers' },
  { value: 'Full Stack', label: 'Full Stack' },
  { value: 'Frontend', label: 'Frontend' },
  { value: 'Backend', label: 'Backend' },
];

const cityOptions: DropdownOption[] = [
  { value: 'New York', label: 'New York' },
  { value: 'Boston', label: 'Boston' },
  { value: 'Los Angeles', label: 'Los Angeles' },
  { value: 'Chicago', label: 'Chicago' },
  { value: 'San Francisco', label: 'San Francisco' },
  { value: 'Seattle', label: 'Seattle' },
  { value: 'Austin', label: 'Austin' },
];

const priceOptions: DropdownOption[] = [
  { value: '$50 - $99', label: '$50 - $99' },
  { value: '$100 - $149', label: '$100 - $149' },
  { value: '$150 - $199', label: '$150 - $199' },
  { value: '$200+', label: '$200+' },
];

export default function FirstSecHome() {
  const [category, setCategory] = useState('Development');
  const [subcategory, setSubcategory] = useState('Android App Developers');
  const [city, setCity] = useState('Boston');
  const [priceRange, setPriceRange] = useState('$50 - $99');

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setSearchTerm('');
  };

  return (
    <section className="first-section">
      <div className="first-section-container">
        <div className="first-section-content">
          <div className="first-section-left">
            <h1 className="first-section-title">
              Find a company with the IT Rating
              <br />
              <span className="title-highlight">(Global Digital Ecosystem)</span>
            </h1>
            <p className="first-section-description">
              You can choose an excellent contractor for your tasks by a wide range of parameters:
              the cost of services, real customer reviews, the badge of trusted companies according
              to a <a href="#" className="description-link">public rating formula</a> in the IT companies ranking.
            </p>

            <div className="search-form">
              <div className="search-form-row">
                <CustomDropdown
                  label="Category"
                  value={category}
                  options={categoryOptions}
                  onChange={setCategory}
                  hasSearch={true}
                  isOpen={openDropdown === 'category'}
                  onToggle={() => handleToggleDropdown('category')}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  dropdownRef={dropdownRef}
                />
                
                <CustomDropdown
                  label="Subcategory"
                  value={subcategory}
                  options={subcategoryOptions}
                  onChange={setSubcategory}
                  isOpen={openDropdown === 'subcategory'}
                  onToggle={() => handleToggleDropdown('subcategory')}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  dropdownRef={dropdownRef}
                />
                
                <CustomDropdown
                  label="City"
                  value={city}
                  options={cityOptions}
                  onChange={setCity}
                  isOpen={openDropdown === 'city'}
                  onToggle={() => handleToggleDropdown('city')}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  dropdownRef={dropdownRef}
                />
                
                <CustomDropdown
                  label="Price from"
                  value={priceRange}
                  options={priceOptions}
                  onChange={setPriceRange}
                  isOpen={openDropdown === 'price'}
                  onToggle={() => handleToggleDropdown('price')}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  dropdownRef={dropdownRef}
                />

                <button className="search-submit-btn">
                  Find a performer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
