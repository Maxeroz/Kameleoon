import styles from "./TableRow.module.css";
import { Link } from "react-router-dom";
import { TableRowProps } from "./types";

import { useRandomColor } from "./hooks/useRandomColor";
import { getStatusClass } from "./lib/getStatusClass";
import { memo } from "react";

export const TableRow = memo(
  ({
    id,
    name,
    type,
    status,
    site,
    action,
    columnProportions,
  }: TableRowProps) => {
    const randomColor = useRandomColor(id);

    return (
      <div
        className={styles.rowWrapper}
        role="row"
        style={{ "--random-color": randomColor } as React.CSSProperties}
      >
        <div
          className={styles.td}
          role="cell"
          style={{ flex: columnProportions[0] }}
        >
          {name}
        </div>
        <div
          className={`${styles.td} ${styles.type}`}
          role="cell"
          style={{ flex: columnProportions[1] }}
        >
          {type}
        </div>
        <div
          className={`${styles.td} ${getStatusClass(status)}`}
          role="cell"
          style={{ flex: columnProportions[2] }}
        >
          {status}
        </div>
        <div
          className={`${styles.td} ${styles.site}`}
          role="cell"
          style={{ flex: columnProportions[3] }}
        >
          {site}
        </div>
        <div
          className={`${styles.td} ${styles.resultsCell}`}
          role="cell"
          style={{ flex: columnProportions[4] }}
        >
          <Link
            to={`/${action === "Results" ? "results" : "finalize"}/${id}`}
            className={`${styles.button} ${
              action === "Results" ? styles.results : styles.finalize
            }`}
          >
            {action}
          </Link>
        </div>
      </div>
    );
  }
);
