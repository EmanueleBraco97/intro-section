const IconArrow = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ cursor: "pointer", select: "none" }}>
        {props.isActive ? (
          <button
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#686868"
                strokeWidth="1.5"
                fill="none"
                d="m1 5 4-4 4 4"
              />
            </svg>
          </button>
        ) : (
          <button
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#686868"
                strokeWidth="1.5"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default IconArrow;
