import React, { ReactElement } from "react";

import { useHistory } from "react-router-dom";

import * as styles from "./ProfilePage.css";
import { UsersPermissionsMe } from "../../../@types/queryTypes";

interface Props {
  user: UsersPermissionsMe | boolean;
  handleLogout: () => void;
}

export default function ProfilePage({
  user,
  handleLogout,
}: Props): ReactElement | null {
  const history = useHistory();
  if (typeof user === "boolean") return null;
  return (
    <div className={styles.profile}>
      <div className={styles.profile_head}>
        <h2>{user.username}</h2>
        <button className={styles.profile_head_logout} onClick={handleLogout}>
          Выйти
        </button>
      </div>
      <div className={styles.profile_body}>
        {user.role.type === "admin" && (
          <button onClick={() => history.replace("/dashboard")}>
            Редактор
          </button>
        )}
      </div>
    </div>
  );
}
