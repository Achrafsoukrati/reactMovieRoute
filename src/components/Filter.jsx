const filterStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#141414',
};

const inputStyle = {
  margin: '0 10px',
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  fontSize: '16px',
  color: '#ccc',
};

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    <div className="filter" style={filterStyle}>
      <input 
        type="text" 
        value={title} 
        placeholder="Filter by title" 
        onChange={onTitleChange} 
        style={inputStyle}
      />
      <input 
        type="number" 
        value={rate} 
        placeholder="Filter by rate" 
        onChange={onRateChange} 
        style={{ ...inputStyle, maxWidth: '80px' }}
      />
    </div>
  );
}
export default Filter