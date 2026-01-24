import { useId } from 'react'
import { ChevronDown } from 'lucide-react'

const Dropdown = ({ title, isOpen, onToggle, children }) => {
  const buttonId = useId()
  const contentId = useId()

  return (
    <div className={`dropdown${isOpen ? ' active' : ''}`}>
      <button
        type="button"
        id={buttonId}
        className="dropdown-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{title}</span>
        <ChevronDown
          className="dropdown-icon"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div
        id={contentId}
        className={`dropdown-content${isOpen ? ' show' : ''}`}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}

export default Dropdown
