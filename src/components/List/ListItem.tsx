import React, {
  FC,
  PropsWithChildren,
  useState,
  useCallback,
} from "react";
import classnames from "classnames";

import { TFaIcons as TIcon } from '../../types/Icons';

export interface IProps {
  icon?: TIcon,
}

const ListItem: FC<PropsWithChildren<IProps>> = ({
  children,
  icon,
}) => {
  let [selected, setSelected] = useState(false);
  const toggleSelected = useCallback(
    () => setSelected(!selected),
    [selected],
  );

  const iconify = (typeof icon !== undefined && icon !==null);
  const classList = classnames(
    {
      'x-icon--stateful': (iconify && selected),
    },
    icon as string,
  );

  return (<li
    className={classList}
    onClick={toggleSelected}
  >
    {children}
  </li>);
}

export default ListItem;
