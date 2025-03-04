import classNames from "classnames";
import styles from "../TableRow.module.css";

export const getStatusClass = (status: string) =>
  classNames({
    [styles.statusOnline]: status === "Online",
    [styles.statusPaused]: status === "Paused",
    [styles.statusDraft]: status === "Draft",
    [styles.statusStopped]: status === "Stopped",
  });
