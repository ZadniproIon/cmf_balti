const Dropdown = ({ title, isOpen, onToggle, children }) => (
  <div className={`dropdown${isOpen ? ' active' : ''}`}>
    <div className="dropdown-header" onClick={onToggle}>
      <span>{title}</span>
      <i
        className="fa-solid fa-chevron-down"
        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
      ></i>
    </div>
    <div className={`dropdown-content${isOpen ? ' show' : ''}`}>{children}</div>
  </div>
)

export default Dropdown
