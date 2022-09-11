import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export const TreeView: FunctionComponent<{ node: TreeNode; level: number }> = ({
  node,
  level,
}) => {
  const classLevel = ["pl-1", "pl-2", "pl-3", "pl-4", "pl-5", "pl-6"];
  return (
    <ul>
      <li className={classLevel[level]}>
        {node.children ? (
          <span>{node.name}</span>
        ) : (
          <Link
            to={`/species/${node.name.toLowerCase().replace(" ", "_")}`}
            className="text-primary-100 underline"
          >
            {node.name}
          </Link>
        )}
        {node.children
          ? node.children.map((n) => <TreeView node={n} level={level + 1} />)
          : null}
      </li>
    </ul>
  );
};
