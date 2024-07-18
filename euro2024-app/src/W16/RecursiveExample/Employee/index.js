import React, { useState } from "react";

export const Employee = ({ name, title, directReports, idx }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div style={{ marginLeft: idx }}>
      <div>
        {directReports.length > 0 ? (
          <button onClick={onToggleCollapse}>{collapsed ? "+" : "-"}</button>
        ) : null}
        {name} - {title}
      </div>
      {!collapsed &&
        directReports.map((report, idx) => (
          <Employee key={report.name} {...report} idx={idx + 100} />
        ))}
    </div>
  );
};
