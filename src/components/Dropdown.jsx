import { ChevronDown } from 'lucide-react'

const Dropdown = ({ title, isOpen, onToggle, children }) => (
  <div className={`dropdown${isOpen ? ' active' : ''}`}>
    <div className="dropdown-header" onClick={onToggle}>
      <span>{title}</span>
      <ChevronDown
        className="dropdown-icon"
        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
      />
    </div>
    <div className={`dropdown-content${isOpen ? ' show' : ''}`}>{children}</div>
  </div>
)

export default Dropdown
