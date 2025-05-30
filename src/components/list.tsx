import React, { useState } from "react";

const List = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div>
      {list.map((node) => (
        <div className="container" key={node.id}>
          {node.isFolder && <span>^</span>}
          <span
            onClick={() =>
              setIsExpanded((prev) => ({
                ...prev,
                [node.name]: !prev[node.name],
              }))
            }
          >
            {node.name}
          </span>
          {isExpanded?.[node.name] && node.children && (
            <List list={node.children} />
          )}
        </div>
      ))}
    </div>
  );
};
export default List;
